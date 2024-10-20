import React from "react";
import SampleImage from "../../../public/sampleImage.png";
import Image from "next/image";
import getPreviewText from "../utils/getPreviewText";

interface BlogPost {
  title: string;
  publishedAt: string;
  categories?: string[];
  body: string | any[];
}

const BlogPreview: React.FC<BlogPost> = ({
  title,
  publishedAt,
  categories,
  body,
}) => {
  return (
    <div className="bg-white rounded-lg mt-[5%] min-w-[325px] w-[30%] shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6 pb-4">
        <Image src={SampleImage} alt="Sample Image" width={350} height={75} />
        <div className="bg-purple-200 relative z-2 inline-block mt-2 px-2 py-1 text-xs font-medium text-gray-700">
          {publishedAt}
        </div>
        <hr className="w-[130%] relative z-0 color-red border-purple-200 top-[-22px] left-[-15%] border-[2px]" />
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <div className="mt-3">
          <ul className="mt-2 text-sm text-gray-600 flex items-center">
            {" "}
            {/* Use a ul for the list */}
            {categories &&
              categories.map((category, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && ( // Add a dot separator if not the first item
                    <span className="mx-2 text-purple-500">•</span>
                  )}
                  <span className="underline text-purple-500">
                    {" "}
                    {/* Underline the category */}
                    <span className="text-gray-600">
                      {" "}
                      {/* Add gray text here */}
                      {category}
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="p-6 pt-4">
        <p className="text-gray-700">
          {body}
          {/* {getPreviewText(body, 275)} */}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-end">
        <a href="#" className="text-purple-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPreview;
