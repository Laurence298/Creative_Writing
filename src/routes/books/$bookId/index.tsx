import type { Book } from '@/Types/book';
import { createFileRoute,useLoaderData,Link } from '@tanstack/react-router'

export const Route = createFileRoute('/books/$bookId/')({
  component: RouteComponent,
  loader: async ({params:{bookId}}) =>{
    const res = await fetch(`http://127.0.0.1:3000/api/books/${bookId}`)
    const data: Book = await res.json()

    
    return data;
  }
})

function RouteComponent() {
  const book = useLoaderData({from: "/books/$bookId/"}) as Book

  if(!book){
    return(
      <p> loading ...</p>
    )
  }
  return (

    <>
        <h2>{book.book_name}</h2>
        <div>
          <ul>
           {book.chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link 
                to="/books/$bookId/$chapterId" 
                params={{ bookId: book.id, chapterId: chapter.id }}
              >
                {chapter.chapter_name ?? `Chapter ${chapter.id}`}  {/* ✅ Visible label */}
              </Link>
            </li>
          ))}
          </ul>
        </div>
    </>
  )
}
