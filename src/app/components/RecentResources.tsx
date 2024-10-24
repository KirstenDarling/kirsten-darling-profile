import { client } from "@/sanity/lib/client";
import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Resource {
  _id: string;
  title: string;
  type: string;
  imageSrc: string;
  description: string;
  url: string;
  _updatedAt: string;
}

interface CardProps {
  _id: string;
  title: string;
  type: string;
  imageSrc: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({
  title,
  type,
  imageSrc,
  description,
  url,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden relative h-[33rem]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[15rem] object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold mb-2 text-center">{title}</h4>
        <p className="text-gray-700 mb-2 text-center">{description}</p>
      </div>
      <Link href={url ? url : ""} legacyBehavior>
        <a className="absolute bottom-0 left-0 w-full bg-green-500 text-white py-2 px-4 flex items-center justify-center">
          Open {type}
          <span className="ml-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </a>
      </Link>
    </div>
  );
};

interface CardGridProps {
  resources: Resource[];
}

const CardGrid: React.FC<CardGridProps> = ({ resources }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {resources.map((resource) => (
        <Card key={resource._id} {...resource} />
      ))}
    </div>
  );
};

const RecentResources: React.FC = () => {
  const [resources, setResources] = React.useState<Resource[]>([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const query = `*[_type == "resource"] | order(_updatedAt desc)[0...6]{
          _id, 
          title,
          type,
          'imageSrc': image.asset->url, 
          description, 
          url,
          _updatedAt
        }`;
        const resourcesData = await client.fetch(query);
        setResources(resourcesData);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  interface HeaderProps {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  }

  const Header: React.FC<HeaderProps> = ({
    title,
    subtitle,
    buttonText,
    buttonLink,
  }) => (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-lg text-white mb-6">{subtitle}</p>
      <Link href={buttonLink} legacyBehavior>
        <a className="bg-white text-purple-500 font-bold py-2 px-4 rounded hover:bg-purple-100 transition duration-300">
          {buttonText}
        </a>
      </Link>
    </div>
  );

  return (
    <div className="w-full bg-white flex flex-col">
      <Header
        title="Coding Resources"
        subtitle="Explore the latest additions to the Resource Center, featuring videos, courses, and learning paths to enhance your coding journey."
        buttonText="View All Resources"
        buttonLink="/coding-resources"
      />
      <div className="flex-grow">
        <CardGrid resources={resources} />
      </div>
    </div>
  );
};

export default RecentResources;
