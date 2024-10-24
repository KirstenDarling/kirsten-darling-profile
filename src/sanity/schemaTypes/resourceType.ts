import { defineField, defineType } from "sanity";

export const resourceType = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Tool", value: "TOOL" },
          { title: "Ebook", value: "EBOOK" },
          { title: "Webinar", value: "WEBINAR" },
          { title: "Event Cloud", value: "Event Cloud" },
          { title: "Hospitality Cloud", value: "Hospitality Cloud" },
          { title: "Website", value: "Website" },
          { title: "Social Media", value: "Social Media" },
          { title: "App", value: "App" },
          { title: "Video", value: "Video" },
          // Add other resource types as needed
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Languages", // Changed to plural
      type: "array", // Changed to array type
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "HTML", value: "HTML" },
          { title: "CSS", value: "CSS" },
          { title: "JavaScript", value: "JavaScript" },
          { title: "React", value: "React" },
          { title: "Regex", value: "Regex" },
          { title: "Git", value: "Git" },
          { title: "C#", value: "CSharp" },
          { title: ".NET", value: "Dotnet" },
          // Add other languages as needed
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Enable image cropping
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description", // Optional: Add a description field
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "url", // Optional: Add a URL field if resources link externally
      title: "URL",
      type: "url",
    }),
  ],
});
