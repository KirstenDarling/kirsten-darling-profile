import { defineField, defineType } from "sanity";

export const mainPostType = defineType({
  name: "mainPost",
  title: "Main Post",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "Select a Post",
      type: "reference",
      to: [{ type: "post" }],
      description: "Choose the blog post to be featured",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
