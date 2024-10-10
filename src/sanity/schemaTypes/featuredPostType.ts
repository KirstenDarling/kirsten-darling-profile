import { defineField, defineType } from "sanity";

export const featuredPostType = defineType({
  name: "featuredPost",
  title: "Featured Posts", // Updated title to reflect multiple posts
  type: "document",
  fields: [
    defineField({
      name: "posts", // Changed to "posts" to reflect an array
      title: "Select Posts", // Updated title
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
      description: "Choose up to 4 blog posts to be featured",
      validation: (Rule) => Rule.max(4), // Limit the array to a maximum of 4 items
    }),
  ],
});
