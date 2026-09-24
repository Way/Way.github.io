import fs from 'node:fs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { SITE_DESCRIPTION, SITE_STRAPLINE, SITE_TITLE } from '../consts';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const PAPER = '#f1f1ec';
const INK = '#161b2a';
const INK_SOFT = '#3a4052';
const KICKER = '#2b5c9e';

const font = (file: string) => fs.readFileSync(`./src/assets/og-fonts/${file}`);

const FONTS = [
  { name: 'Playfair Display', data: font('playfair-display-900.woff'), weight: 900 as const, style: 'normal' as const },
  { name: 'Newsreader', data: font('newsreader-72-700.woff'), weight: 700 as const, style: 'normal' as const },
  { name: 'Newsreader', data: font('newsreader-36-400-italic.woff'), weight: 400 as const, style: 'italic' as const },
  { name: 'Inter Tight', data: font('inter-tight-600.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'Inter Tight', data: font('inter-tight-700.woff'), weight: 700 as const, style: 'normal' as const },
];

type Style = Record<string, string | number>;
type Node = { type: string; props: { style?: Style; children?: Child } };
type Child = string | Node | Child[];

const h = (style: Style, children?: Child): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

const LABEL: Style = { fontFamily: 'Inter Tight', fontWeight: 600, fontSize: 25, lineHeight: 1, color: INK_SOFT };

const rule = (height: number) => h({ height, background: INK });

const metaRow = (left: string, center: string, right: string) =>
  h({ ...LABEL, paddingBottom: 14 }, [
    h({ flex: '1 1 0' }, left),
    h({ flexShrink: 0, padding: '0 24px', whiteSpace: 'nowrap' }, center),
    h({ flex: '1 1 0', justifyContent: 'flex-end' }, right),
  ]);

const frame = (padding: string, children: Child[]) =>
  h({ width: '100%', height: '100%', flexDirection: 'column', background: PAPER, color: INK, padding }, children);

export const longDate = (date: Date) =>
  date.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Berlin',
  });

function headlineSize(title: string): number {
  const n = title.length;
  return n <= 22 ? 94 : n <= 34 ? 82 : n <= 46 ? 72 : 62;
}

export interface ArticleCard {
  title: string;
  kicker: string;
  ressort: string;
  pubDate: Date;
  week: number;
  readingMinutes: number;
}

export function articleCard(a: ArticleCard): Node {
  return frame('40px 64px 34px', [
    metaRow(a.ressort, longDate(a.pubDate), 'alexvey.com'),
    rule(5),
    h(
      {
        justifyContent: 'center',
        fontFamily: 'Playfair Display',
        fontWeight: 900,
        fontSize: 78,
        lineHeight: 0.9,
        letterSpacing: -1.5,
        padding: '18px 0 14px',
      },
      SITE_TITLE,
    ),
    rule(1.5),
    h({ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 30px' }, [
      h(
        { fontFamily: 'Inter Tight', fontWeight: 700, fontSize: 28, lineHeight: 1, color: KICKER, marginBottom: 18 },
        a.kicker,
      ),
      h(
        {
          fontFamily: 'Newsreader',
          fontWeight: 700,
          fontSize: headlineSize(a.title),
          lineHeight: 1.02,
          letterSpacing: -1,
          textAlign: 'center',
          textWrap: 'balance',
          justifyContent: 'center',
          maxWidth: 1000,
        },
        a.title,
      ),
    ]),
    rule(1.5),
    h(
      { ...LABEL, justifyContent: 'center', letterSpacing: 5, textTransform: 'uppercase', paddingTop: 14 },
      `KW ${a.week} · ${a.readingMinutes} Min. Lesezeit`,
    ),
  ]);
}

export interface HomeCard {
  issue: number;
  date: Date;
  focus?: string;
}

export function homeCard(c: HomeCard): Node {
  return frame('40px 64px 36px', [
    metaRow(`Ausgabe ${c.issue}`, longDate(c.date), 'alexvey.com'),
    rule(5),
    h({ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }, [
      h(
        { fontFamily: 'Playfair Display', fontWeight: 900, fontSize: 212, lineHeight: 0.86, letterSpacing: -6 },
        SITE_TITLE,
      ),
      h({ ...LABEL, fontSize: 22, letterSpacing: 8, textTransform: 'uppercase', marginTop: 44 }, SITE_DESCRIPTION),
    ]),
    rule(1.5),
    h({ justifyContent: 'space-between', alignItems: 'flex-end', padding: '16px 0 14px' }, [
      c.focus
        ? h({ alignItems: 'flex-end' }, [
            h({ ...LABEL, fontWeight: 700, fontSize: 24, letterSpacing: 2, textTransform: 'uppercase', marginRight: 12 }, 'Schwerpunkt'),
            h({ fontFamily: 'Newsreader', fontStyle: 'italic', fontWeight: 400, fontSize: 30, lineHeight: 1 }, c.focus),
          ])
        : h({}),
      h(LABEL, SITE_STRAPLINE),
    ]),
    rule(1.5),
  ]);
}

export async function renderPng(node: Node): Promise<Response> {
  const svg = await satori(node as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: FONTS,
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
