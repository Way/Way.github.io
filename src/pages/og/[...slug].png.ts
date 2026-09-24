import type { APIContext, GetStaticPaths } from 'astro';
import { type ArticleCard, articleCard, renderPng } from '../../lib/og-image';
import { getPublishedPosts, isoWeek, kickerOf, readingMinutes, ressortLabel } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      kicker: kickerOf(post),
      ressort: ressortLabel(post),
      pubDate: post.data.pubDate,
      week: isoWeek(post.data.pubDate),
      readingMinutes: readingMinutes(post),
    } satisfies ArticleCard,
  }));
};

export async function GET({ props }: APIContext) {
  return renderPng(articleCard(props as ArticleCard));
}
