"use client";

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

  const [matchingVerb, setMatchingVerb] = React.useState("Play");

  const flashCardLink = {
    name: `${matchingVerb} Matching Game`,
    onClick: () => {
      setIsShown(!isShown);
      setMatchingVerb("Close");
    },
  };

  const cheatSheetLink = {
    name: "Cheat Sheet",
    url: "https://www.example-style-guide.com",
  };

  const roadmapLink = {
    name: "Roadmap",
    url: "https://www.example-style-guide.com",
  };

  const [isShown, setIsShown] = React.useState(false);
  const [iframePosition, setIframePosition] = React.useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent<HTMLIFrameElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        offsetX: e.clientX - rect.left,
        offsetY: e.clientY - rect.top,
      })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    setIframePosition({
      x: e.clientX - data.offsetX,
      y: e.clientY - data.offsetY,
    });
  };

  return (
    <div className="w-full h-[100vh] bg-purple-500 flex-col justify-start items-center inline-flex">
      {/* <StudyBuddy resources={resources} />

      <Pill link={flashCardLink} />
      <Pill link={cheatSheetLink} />
      <Pill link={roadmapLink} />
      <div className="flex flex-row bg-red-200"> */}

      <iframe
        className={`${isShown ? `absolute ${window.innerWidth <= 768 ? "top-[8%]" : "top-[15%]"} z-[1]` : "hidden"}`}
        src="https://quizlet.com/950214239/match/embed?i=1rmz5e&x=1jj1"
        height="110%"
        width={window.innerWidth <= 768 ? "100%" : "500"}
        style={{ border: 0 }}
        draggable="true"
        onDragStart={handleDragStart}
      ></iframe>

      <Pill link={flashCardLink} />
      <iframe
        src="https://roadmap.sh/r/embed?id=66fb3c7ce52a9bf4762b6115"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
