import React from "react";
import Container from "@/layouts/Container";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import ProgramList from "./ProgramList";
import {SessionProps} from "@/components/Speakers/Session/SessionProps";

const Program = ({sessions}: {sessions: SessionProps[]}) => {
  return (
    <BackgroundImage
      imagePath="/images/background/programs.jpg"
      className="py-12"
    >
      <Container size="large">
        <div className="program">
          <ProgramList sessions={sessions} />
        </div>
      </Container>
    </BackgroundImage>
  );
};

export default Program;
