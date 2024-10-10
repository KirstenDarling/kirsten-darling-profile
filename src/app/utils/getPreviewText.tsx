import React from "react";

interface Block {
  _type: string;
  children?: Block[];
  text?: string;
}

const getPreviewText = (
  postBody: string | Block[],
  maxLength: number
): JSX.Element => {
  let text = "";
  let length = 0;

  if (typeof postBody === "string") {
    text = postBody;
    length = postBody.length;
  } else {
    for (let i = 0; i < postBody.length; i++) {
      const block = postBody[i];
      // Check if the block has children (for nested structures)
      if (
        block._type === "block" &&
        block.children &&
        Array.isArray(block.children)
      ) {
        block.children.forEach((child: Block) => {
          if (child._type === "span" && child.text) {
            // Extract text from spans
            text += child.text + " ";
            length += child.text.length;
          }
        });
      }
      if (length >= maxLength) {
        break;
      }
    }
  }

  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + "...";
  }

  return <p>{text}</p>;
};

export default getPreviewText;
