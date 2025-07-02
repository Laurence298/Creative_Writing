import type { Chapter } from "~/Types/book";

type CurrentChpater = {
  chapter: Chapter;
};
export default function StoryHeader(chapter: CurrentChpater)  {
  return (
    <>
      <div className="text-center mt-12 mb-8 px-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          {chapter?.chapter?.parent_book?.title || "Loading..."}
        </h1>

    </div>
    </>
  );
}
