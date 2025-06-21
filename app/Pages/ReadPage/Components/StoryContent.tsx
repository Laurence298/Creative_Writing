import React from "react";
import type { Chapter } from "~/Types/book";

type CurrentChpater = {
  chapter: Chapter;
};
export default function StoryContent(chapter: CurrentChpater) {
  return (
    <div
      id="story-content"
      
    >
      <p>
        In a little district west of Washington Square the streets have run
        crazy and broken themselves into small strips called “places.” These
        “places” make strange angles and curves. One street crosses itself a
        time or two. An artist once discovered a valuable possibility in this
        street. It was that the irregularity of the street relieved the monotony
        of line and shadow that a straight street always produces.
      </p>
      <p>...</p>
    </div>
  );
}
