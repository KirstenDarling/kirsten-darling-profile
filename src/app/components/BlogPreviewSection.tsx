import BlogPreview from "./BlogPreview";

const BlogPreviewSection = ({
  cards,
}: {
  cards: {
    title: string;
    publishedAt: string;
    categories?: string[];
    body: string | any[];
  }[];
}) => {
  return (
    <div className="flex flex-wrap justify-around p-4 bg-[#250844]">
      {" "}
      {cards.map((cards) => (
        <BlogPreview key={cards.title} {...cards} />
      ))}
    </div>
  );
};

export default BlogPreviewSection;
