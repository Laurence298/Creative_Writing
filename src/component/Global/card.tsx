import type { Chapter } from "@/Types/book";
import { Link } from "@tanstack/react-router";


type CardProps = {
  chapter: Chapter;
};

export function Card({chapter}: CardProps) {
return (
<>
   <Link to={`reading/$readingId`} params={{ readingId: chapter.id }} >
      <div
  
      className="rounded-2xl shadow-md border border-gray-200 p-4 w-120 md:w-150"
    >
      <h2 className="text-xl font-semibold ">{chapter.parent_book.title}</h2>
      <h3 className="text-md ">{chapter.title}</h3>
    </div>

       
    </Link>
</>
)

}