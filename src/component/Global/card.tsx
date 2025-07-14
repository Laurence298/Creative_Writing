import type { Chapter } from "@/Types/book";


type CardProps = {
  chapter: Chapter;
};

export function Card({chapter}: CardProps) {
return (
<>
      <div  className="rounded-2xl shadow-md border border-gray-200 p-4 w-120 md:w-150" >
      <h2 className="text-xl font-semibold ">{chapter.parent_book.title}</h2>
      <h3 className="text-md ">{chapter.title}</h3>
    </div>
     
</>
)

}