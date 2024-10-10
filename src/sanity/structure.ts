import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.listItem()
        .title("Main Post")
        .icon(() => "⭐")
        .child(
          S.editor()
            .id("mainPost")
            .schemaType("mainPost")
            .documentId("mainPost")
        ),
      S.divider(),
      S.listItem()
        .title("Featured Posts")
        .icon(() => "⭐")
        .child(
          S.editor()
            .id("featuredPost")
            .schemaType("featuredPost")
            .documentId("featuredPost")
        ),
      S.divider(),
      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "mainPost", "featuredPost"].includes(
            item.getId()!
          )
      ),
    ]);
