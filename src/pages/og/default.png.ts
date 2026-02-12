import type { APIContext } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';

const fontRegular = fs.readFileSync('./public/fonts/atkinson-regular.woff');
const fontBold = fs.readFileSync('./public/fonts/atkinson-bold.woff');

export async function GET({}: APIContext) {
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
          background: 'linear-gradient(135deg, hsl(220, 50%, 12%) 0%, hsl(260, 40%, 22%) 100%)',
          fontFamily: 'Atkinson',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: '64px',
                fontWeight: 700,
                color: 'white',
              },
              children: 'alexvey.com',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '26px',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '16px',
              },
              children: 'Technologie, Strategie & Innovation',
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
