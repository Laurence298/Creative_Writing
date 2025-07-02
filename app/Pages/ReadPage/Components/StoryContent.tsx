import { extractParagraphsFromLexicalRoot } from "~/Helper/extractText";
import type { Chapter } from "~/Types/book";

type CurrentChpater = {
  chapter: Chapter;
};
export default function StoryContent(chapter: CurrentChpater) {
  const paragraphs = extractParagraphsFromLexicalRoot(chapter?.chapter?.content?.root);

  return (

    <>

<div id="story-content" className="max-w-3xl mx-auto px-4 py-8 bg-white text-gray-900">
  <h2 className="text-2xl font-semibold mb-4">{chapter?.chapter?.title}</h2>
   {paragraphs.map((text, idx) => (
        <p key={idx} className="space-y-6 text-lg leading-relaxed">
          {text}
        </p>
      ))}
</div>
</>


  );
}
