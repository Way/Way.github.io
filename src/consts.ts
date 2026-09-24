// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Alex Vey';
export const SITE_DESCRIPTION = 'People. Life. Technology.';
export const SITE_STRAPLINE = 'Notizen aus dem Engineering-Alltag';

export const RESSORTS = {
  'agenten-engineering': 'Agenten & Engineering',
  'maerkte-modelle': 'Märkte & Modelle',
  'arbeit-karriere': 'Arbeit & Karriere',
  'fuehrung-kultur': 'Führung & Kultur',
} as const;

export type RessortId = keyof typeof RESSORTS;
export const RESSORT_IDS = Object.keys(RESSORTS) as [RessortId, ...RessortId[]];

export const FIGURE_IDS = ['agent-computer', 'useful-meaningful'] as const;
export type FigureId = (typeof FIGURE_IDS)[number];
