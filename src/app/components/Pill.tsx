"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PillContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 10px 20px; /* Adjust padding for desired size */
  background-color: #39ff14; /* Neon Green */
  box-shadow: 0 0 5px #9370db; /* Bright Purple Glow */
  border-radius: 20px; /* Pill shape */
  display: flex;
  align-items: center;
  cursor: grab;
  z-index: 1000;
  transform: translate(-50%, -50%);

  &:active {
    cursor: grabbing;
  }
`;

const PillLink = styled.a`
  color: #ffffff; /* White */
  font-family: "Press Start 2P", cursive;
  font-size: 1rem; /* Adjust font size as needed */
  text-decoration: none;
  text-shadow: 1px 1px 2px #000000; /* Thin black outline */

  &:hover {
    color: #39ff14; /* Neon Green */
    text-shadow:
      1px 1px 2px #000000,
      0 0 3px #9370db; /* Thin black outline and bright purple glow */
  }
`;

interface PillProps {
  link: {
    name: string;
    url: string;
  };
}

const Pill: React.FC<PillProps> = ({ link }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
    <PillContainer
      style={{ left: position.x, top: position.y }}
      onMouseDown={onMouseDown}
    >
      <PillLink href={link.url} target="_blank">
        {link.name}
      </PillLink>
    </PillContainer>
  );
};

export default Pill;
