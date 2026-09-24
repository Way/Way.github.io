import { homeCard, renderPng } from '../../lib/og-image';
import { getPublishedPosts, kickerOf } from '../../lib/posts';

export async function GET() {
  const posts = await getPublishedPosts();
  const featured = posts[0];
  return renderPng(
    homeCard({
      issue: posts.length,
      date: new Date(),
      focus: featured && kickerOf(featured),
    }),
  );
}
