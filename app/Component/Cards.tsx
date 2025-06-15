import { Link } from "react-router";
import type { Chapter } from "~/Types/book";

type CardProps = {
  chapter: Chapter;
};

export function Card({chapter}: CardProps) {
return (
<>
   <div className="story-card">
        <h3>{chapter.parent_book.title +" "+ chapter.title}</h3>
        <p>{chapter.parent_book.description}</p>
        <Link to="/reading/1" className="read-more">Read Story →</Link>
      </div>
</>
)

}