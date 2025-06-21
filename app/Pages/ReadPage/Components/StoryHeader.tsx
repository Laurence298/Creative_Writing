import React from "react";
import type { Chapter } from "~/Types/book";

type CurrentChpater = {
  chapter: Chapter;
};
export default function StoryHeader(chapter: CurrentChpater)  {
  return (
    <>
      <h1 >The Last Leaf</h1>
      <h2 >by O. Henry</h2>
    </>
  );
}
