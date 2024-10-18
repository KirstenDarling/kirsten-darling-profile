"use client";

import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import ComingSoonSection from "../components/ComingSoonSection";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HighlightArea = styled.div`
  position: absolute;
  top: 10%; // Adjust these values to match the computer's position
  left: 25%;
  width: 50%;
  height: 60%;
  cursor: pointer;

  &:hover {
    outline: 3px solid #00ff00; // Glowy purple border
    box-shadow: 0 0 10px #00ff00;
  }
`;

const BookHighlightArea = styled.svg`
  position: absolute;
  top: 38%; // Adjust this value for vertical positioning
  left: 8%; // Adjust this value for horizontal positioning
  width: 15%; // Adjust this value to scale the SVG
  height: 20%; // Adjust this value to scale the SVG
  cursor: pointer;

  path {
    transition:
      fill 0.3s,
      stroke 0.3s;
  }

  &:hover {
    outline: 3px solid #00ff00; // Glowy purple border
    box-shadow: 0 0 10px #00ff00;
  }
`;

const KeyboardHighlightArea = styled.svg`
  position: absolute;
  bottom: 10%; // Adjusted vertical position (increased to lower it)
  left: 11%;
  width: 40%;
  height: 10%;
  cursor: pointer;

  path {
    transition:
      fill 0.3s,
      stroke 0.3s;
  }

  &:hover {
    outline: 3px solid #00ff00; // Glowy purple border
    box-shadow: 0 0 10px #00ff00;
  }
`;

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

const ModalContent = styled.div`
  background-color: #e0d0f0;
  width: 800px;
  height: 500px;
  position: relative;
  border: 20px solid #9966cc;
  border-image-slice: 20;
  border-image-source: url("border-image.png");
  border-image-repeat: round;
  border-radius: 1rem;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  padding: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0; // Removed spacing from the top
    left: 0; // Removed spacing from the left
    right: 0; // Removed spacing from the right
    bottom: 0; // Removed spacing from the bottom
    border-radius: 1rem;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3); // Adjusted inset box-shadow
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  h2 {
    // Styles for the h2 heading
    text-align: center; // Center the heading
    margin: 20px; // Even spacing around the heading
  }

  p {
    // Styles for the p element
    margin: 20px; // Even spacing around the paragraph
    text-align: left; // Keep the text left-aligned
  }
`;

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [booksModalIsOpen, setBooksModalIsOpen] = useState(false);
  const [keyboardModalIsOpen, setKeyboardModalIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openBooksModal = () => {
    setBooksModalIsOpen(true);
  };

  const closeBooksModal = () => {
    setBooksModalIsOpen(false);
  };

  const openKeyboardModal = () => {
    setKeyboardModalIsOpen(true);
  };

  const closeKeyboardModal = () => {
    setKeyboardModalIsOpen(false);
  };

  return (
    <div className="w-full bg-white flex-col justify-start items-center inline-flex">
      <Container>
        <Image src="bubbleMac.png" alt="Desk setup" />
        <HighlightArea onClick={openModal} />

        <BookHighlightArea onClick={openBooksModal}>
          {" "}
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="transparent"
            stroke="none"
          />
        </BookHighlightArea>

        <KeyboardHighlightArea onClick={openKeyboardModal}>
          {" "}
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="transparent"
            stroke="none"
          />
        </KeyboardHighlightArea>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Computer Modal"
        >
          <ModalContent className="border-r-[3rem]">
            <h2>Coming Soon</h2>
            <ComingSoonSection showTopImage={false} />
          </ModalContent>
          <button onClick={closeModal}>Close</button>
        </Modal>

        <Modal
          isOpen={booksModalIsOpen}
          onRequestClose={closeBooksModal}
          style={customStyles}
          contentLabel="Books Modal"
        >
          <ModalContent className="border-r-[3rem]">
            <h2>Coming Soon</h2>
            <ComingSoonSection showTopImage={false} />
          </ModalContent>
          <button onClick={closeBooksModal}>Close</button>
        </Modal>

        <Modal
          isOpen={keyboardModalIsOpen}
          onRequestClose={closeKeyboardModal}
          style={customStyles}
          contentLabel="Keyboard Modal"
        >
          <ModalContent className="border-r-[3rem]">
            <h2>Coming Soon</h2>
            <ComingSoonSection showTopImage={false} />
          </ModalContent>
          <button onClick={closeKeyboardModal}>Close</button>
        </Modal>
      </Container>
    </div>
  );
}
