import type { APIContext, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import { deriveVisualParams } from '../../lib/visual-hash';

const fontRegular = fs.readFileSync('./public/fonts/atkinson-regular.woff');
const fontBold = fs.readFileSync('./public/fonts/atkinson-bold.woff');

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft);
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      pubDate: post.data.pubDate.toISOString().split('T')[0],
    },
  }));
};

export async function GET({ props }: APIContext) {
  const { title, pubDate } = props as { title: string; pubDate: string };
  const params = deriveVisualParams(title, pubDate);

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, hsl(${params.hue1}, 50%, 15%) 0%, hsl(${params.hue2}, 40%, 25%) 100%)`,
          fontFamily: 'Atkinson',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
        },
        children: [
          // Decorative circles in the background
          ...Array.from({ length: 5 }, (_, i) => ({
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                width: `${80 + ((params.seed * (i + 1) * 7) % 200)}px`,
                height: `${80 + ((params.seed * (i + 1) * 7) % 200)}px`,
                borderRadius: '50%',
                background: `hsla(${(params.hue1 + i * 40) % 360}, 60%, 50%, ${0.06 + (i % 3) * 0.03})`,
                top: `${((params.seed * (i + 3) * 13) % 500) + 20}px`,
                left: `${((params.seed * (i + 2) * 17) % 1000) + 50}px`,
              },
              key: `circle-${i}`,
            },
          })),
          // Title
          {
            type: 'div',
            props: {
              style: {
                fontSize: title.length > 60 ? '42px' : title.length > 40 ? '50px' : '58px',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.2,
                textAlign: 'center',
                maxWidth: '1000px',
              },
              children: title,
            },
          },
          // Bottom branding
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: `hsl(${params.hue1}, 70%, 65%)`,
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '22px',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    children: 'alexvey.com',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Atkinson', data: fontRegular, style: 'normal' as const, weight: 400 },
        { name: 'Atkinson', data: fontBold, style: 'normal' as const, weight: 700 },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  const png = resvg.render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
}
