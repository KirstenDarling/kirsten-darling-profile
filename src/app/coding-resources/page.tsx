"use client";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import * as React from "react";
import { useEffect } from "react";
import { faArrowRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Resource {
  _id: string;
  title: string;
  type: string;
  imageSrc: string;
  language?: string[]; // Language is now an array of strings
  description: string;
  url: string;
}

interface SidebarProps {
  onFilterChange: (filters: { language: string[]; type: string[] }) => void;
  resources: Resource[]; // Add resources prop
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange, resources }) => {
  const [filters, setFilters] = React.useState<{
    language: string[];
    type: string[];
  }>({
    language: [],
    type: [],
  });

  const [showFilters, setShowFilters] = React.useState(false); // Initially hide on all screens

  useEffect(() => {
    // Check screen size and update showFilters on client-side
    if (typeof window !== "undefined") {
      setShowFilters(window.innerWidth >= 768);
    }
  }, []);

  const handleFilterChange = (
    category: keyof typeof filters,
    value: string
  ) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <aside className="bg-purple-300 md:bg-gray-100 p-4 min-w-[15rem]">
      {/* Conditionally render the toggle button */}
      {showFilters &&
        typeof window !== "undefined" &&
        window.innerWidth > 768 && (
          <h3 className="text-lg font-bold">Filters</h3>
        )}

      {typeof window !== "undefined" && window.innerWidth < 768 && (
        <div
          className="flex items-center justify-between pointer-events-auto cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <h3 className="text-lg font-bold">Filters</h3>
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      )}
      {/* Conditionally render filter options based on screen size and showFilters state */}
      {(typeof window !== "undefined" && window.innerWidth >= 768) ||
      showFilters ? (
        <div>
          <div className="mt-5">
            <h4>Language/Framework</h4>
            <label className="block">
              <input
                type="checkbox"
                value="HTML"
                onChange={() => handleFilterChange("language", "HTML")}
              />{" "}
              HTML
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="CSS"
                onChange={() => handleFilterChange("language", "CSS")}
              />{" "}
              CSS
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Regex"
                onChange={() => handleFilterChange("language", "Regex")}
              />{" "}
              Regex
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Git"
                onChange={() => handleFilterChange("language", "Git")}
              />{" "}
              Git
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="JavaScript"
                onChange={() => handleFilterChange("language", "JavaScript")}
              />{" "}
              JavaScript
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="React"
                onChange={() => handleFilterChange("language", "React")}
              />{" "}
              React
            </label>
          </div>
          <div className="mt-8">
            <h4>Type</h4>
            <label className="block">
              <input
                type="checkbox"
                value="TOOL"
                onChange={() => handleFilterChange("type", "TOOL")}
              />{" "}
              TOOL
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="EBOOK"
                onChange={() => handleFilterChange("type", "EBOOK")}
              />{" "}
              EBOOK
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="WEBINAR"
                onChange={() => handleFilterChange("type", "WEBINAR")}
              />{" "}
              WEBINAR
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Event Cloud"
                onChange={() => handleFilterChange("type", "Event Cloud")}
              />{" "}
              Event Cloud
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Hospitality Cloud"
                onChange={() => handleFilterChange("type", "Hospitality Cloud")}
              />{" "}
              Hospitality Cloud
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Website"
                onChange={() => handleFilterChange("type", "Website")}
              />{" "}
              Website
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Social Media"
                onChange={() => handleFilterChange("type", "Social Media")}
              />{" "}
              Social Media
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="App"
                onChange={() => handleFilterChange("type", "App")}
              />{" "}
              App
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Video"
                onChange={() => handleFilterChange("type", "Video")}
              />{" "}
              Video
            </label>
          </div>
        </div>
      ) : null}
    </aside>
  );
};

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

const Home: React.FC = () => {
  const [resources, setResources] = React.useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = React.useState<Resource[]>(
    []
  );

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const query = `*[_type == "resource"] {
          _id, 
          title,
          type,
          'imageSrc': image.asset->url, 
          language,
          description, 
          url, 
        }`;
        const resourcesData = await client.fetch(query);
        setResources(resourcesData);
        setFilteredResources(resourcesData);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  const handleFilterChange = (filters: {
    language: string[];
    type: string[];
  }) => {
    const filtered = resources.filter((resource) => {
      const matchesLanguage =
        filters.language.length === 0 ||
        resource.language?.some((lang) => filters.language.includes(lang));
      const matchesType =
        filters.type.length === 0 || filters.type.includes(resource.type);
      return matchesLanguage && matchesType;
    });
    setFilteredResources(filtered);
  };

  return (
    <div className="w-full bg-white flex flex-col md:flex-row">
      <Sidebar onFilterChange={handleFilterChange} resources={resources} />
      <div className="flex-grow">
        <CardGrid resources={filteredResources} />
      </div>
    </div>
  );
};

export default Home;
