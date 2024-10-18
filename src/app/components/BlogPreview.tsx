import React from "react";
import SampleImage from "../../../public/sampleImage.png";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  categories: string[];
  excerpt: string;
}

const BlogPreview: React.FC<BlogPost> = ({
  title,
  date,
  author,
  categories,
  excerpt,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="p-6 pb-4">
        <Image src={SampleImage} alt="Sample Image" width={350} height={75} />
        <div className="bg-purple-200 inline-block rounded-md px-2 py-1 text-xs font-medium text-gray-700">
          {date}
        </div>
        <hr className="w-full color-red border-[red] border-[2px] relative top-50" />
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <div className="mt-3">
          <ul className="mt-2 text-sm text-gray-600 flex items-center">
            {" "}
            {/* Use a ul for the list */}
            {categories.map((category, index) => (
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
        <p className="text-gray-700">{excerpt}</p>
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
