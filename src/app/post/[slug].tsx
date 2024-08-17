// ./frontend/pages/post/[slug].tsx

import { client } from "../../sanity/lib/client";

interface Post {
  _id: string;
  slug: { current: string };
  title: string;
}

const Post: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article>
      <h1>{post?.slug?.current}</h1>
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
}

export default Post;
