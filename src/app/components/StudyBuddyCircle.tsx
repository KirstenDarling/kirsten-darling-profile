"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BuddyCircle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  width: 275px;
  height: 275px;
  border-radius: 50%;
  background-color: #9370db; /* Bright Purple */
  box-shadow: 0 0 10px #39ff14; /* Neon Green Glow */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: grab;
  z-index: 1000; /* Ensure it's on top */
  transform: translate(-50%, -50%); /* Center the circle */

  &:active {
    cursor: grabbing;
  }
`;

const ResourceLink = styled.a`
  color: #39ff14; /* Neon Green */
  font-family: "Press Start 2P", cursive; /* Example of a playful, techy font */
  font-size: 1.25rem;
  margin: 3px 0;
  text-decoration: none;

  &:hover {
    text-shadow: 0 0 5px #39ff14;
  }
`;

interface Resource {
  name: string;
  url: string;
}

interface StudyBuddyProps {
  resources: Resource[];
}

const StudyBuddy: React.FC<StudyBuddyProps> = ({ resources }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize position on component mount (optional)
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    setPosition({ x: initialX, y: initialY });
  }, []);

  const onMouseDown = (e: { clientX: number; clientY: number }) => {
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      setPosition({
        x: e.clientX - offsetX,
        y: e.clientY - offsetY,
      });
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <BuddyCircle
      style={{ left: position.x, top: position.y }}
      onMouseDown={onMouseDown}
    >
      {resources.map((resource, index) => (
        <ResourceLink key={index} href={resource.url} target="_blank">
          {resource.name}
        </ResourceLink>
      ))}
    </BuddyCircle>
  );
};

export default StudyBuddy;
