import BlogPreview from "./BlogPreview";

const blogPosts = [
  {
    title: "How To Overcome Fear Of Rejection & Be Happy All The Time",
    date: "November 4, 2020",
    author: "Coach",
    categories: ["Coach", "Career"],
    excerpt:
      "There's a growing community of digital world who live a location independent lifestyle. We're software developers, designers, writers, journalists, engineers, and all sorts of people who share a passion for...",
  },
  {
    title: "10 Online Careers You Can Start Today With Basically No Money",
    date: "November 4, 2020",
    author: "Impact",
    categories: ["Business", "Impact"],
    excerpt:
      "This in itself makes you feel worse about yourself, creating a vicious cycle of fear and low self-esteem. Sometimes, you probably feel like you've tried everything to feel better and...",
  },
  {
    title: "5 Ways to make More Money as a Coach or Consultant",
    date: "November 4, 2020",
    author: "Career",
    categories: ["Career", "Business"],
    excerpt:
      "You may feel undesirable, uninteresting, and pessimistic about the prospect of finding love. Feeling rejected hurts. It undermines your confidence and makes you doubt your worth. Trapped by a horrible...",
  },
];

const BlogPreviewSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-[#250844]">
      {" "}
      {blogPosts.map((blogPost) => (
        <BlogPreview key={blogPost.title} {...blogPost} />
      ))}
    </div>
  );
};

export default BlogPreviewSection;
