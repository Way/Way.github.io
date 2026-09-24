import { type CollectionEntry, getCollection } from 'astro:content';
import { RESSORTS } from '../consts';

export type Post = CollectionEntry<'blog'>;

const WORDS_PER_MINUTE = 220;

export async function getPublishedPosts(): Promise<Post[]> {
  return (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function ressortLabel(post: Post): string {
  return RESSORTS[post.data.ressort];
}

export function kickerOf(post: Post): string {
  return post.data.kicker ?? ressortLabel(post);
}

export function readingMinutes(post: Post): number {
  const words = (post.body ?? '')
    .replace(/^import .*$/gm, '')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function relatedPosts(post: Post, all: Post[], count = 3): Post[] {
  const others = all.filter((p) => p.id !== post.id);
  const sameRessort = others.filter((p) => p.data.ressort === post.data.ressort);
  const rest = others.filter((p) => p.data.ressort !== post.data.ressort);
  return [...sameRessort, ...rest].slice(0, count);
}

export function isoWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7);
}

export type MonthCount = { year: number; month: number; count: number };

export function postsPerMonth(posts: Post[]): MonthCount[] {
  if (posts.length === 0) return [];
  const dates = posts.map((p) => p.data.pubDate);
  const first = new Date(Math.min(...dates.map((d) => d.valueOf())));
  const last = new Date(Math.max(...dates.map((d) => d.valueOf())));
  const months: MonthCount[] = [];
  for (
    let y = first.getFullYear(), m = first.getMonth();
    y < last.getFullYear() || (y === last.getFullYear() && m <= last.getMonth());
    m === 11 ? ((m = 0), y++) : m++
  ) {
    months.push({
      year: y,
      month: m,
      count: dates.filter((d) => d.getFullYear() === y && d.getMonth() === m).length,
    });
  }
  return months;
}
