import React from "react";
import StoryHeader from "./Components/StoryHeader";
import StoryContent from "./Components/StoryContent";
import ReadAloudButton from "./Components/ReadAloudButton";

export default function StoryContainer() {
  return (
    <div >
      <StoryHeader />
      <StoryContent />
      <ReadAloudButton />
    </div>
  );
}
