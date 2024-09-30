import * as React from "react";
import ComingSoonSection from "../components/ComingSoonSection";
import StudyBuddy from "../components/StudyBuddyCircle";
import Pill from "../components/Pill";

export default function Home() {
  const resources = [
    {
      name: "Coding Bootcamp Notes",
      url: "https://www.example-bootcamp-notes.com",
    },
    {
      name: "Math Flashcards",
      url: "https://www.example-flashcard-site.com/math",
    },
    {
      name: "History Study Guide",
      url: "https://www.example-study-guides.com/history",
    },
    {
      name: "Science Textbook Online",
      url: "https://www.example-textbook-site.com/science",
    },
    {
      name: "Language Learning App",
      url: "https://www.example-language-app.com",
    },
  ];

  const flashCardLink = {
    name: "Flash Cards",
    url: "https://www.example-style-guide.com",
  };

  const cheatSheetLink = {
    name: "Cheat Sheet",
    url: "https://www.example-style-guide.com",
  };

  const roadmapLink = {
    name: "Roadmap",
    url: "https://www.example-style-guide.com",
  };

  return (
    <div className="w-full h-[100vh] bg-purple-500 flex-col justify-start items-center inline-flex">
      <StudyBuddy resources={resources} />
      <div className="flex flex-row">
        <Pill link={flashCardLink} />
        <Pill link={cheatSheetLink} />
        <Pill link={roadmapLink} />
      </div>
    </div>
  );
}
