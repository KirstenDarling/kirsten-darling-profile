import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { mainPostType } from "./mainPostType";
import { resourceType } from "./resourceType";
import { featuredPostType } from "./featuredPostType";
import { postType } from "./postType";
import { authorType } from "./authorType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    mainPostType,
    resourceType,
    featuredPostType,
    authorType,
  ],
};
