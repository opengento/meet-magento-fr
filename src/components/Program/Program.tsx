import React from "react";
import Container from "@/layouts/Container";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import ProgramList from "./ProgramList";

const Program = () => {
  return (
    <BackgroundImage
      imagePath="/images/background/programs.jpg"
      className="py-12"
    >
      <Container size="large">
        <div className="program">
          <ProgramList />
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default Program;
