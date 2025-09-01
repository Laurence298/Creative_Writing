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
         <section className="flex flex-col items-center gap-8 px-4 py-8">
      {/* Book Title */}
      <h1 className="text-4xl font-bold text-center">{book.book_name}</h1>

      {/* Book Description */}
      <div className="w-full max-w-3xl bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">description</p>
      </div>

      {/* Chapter List */}
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Chapters</h2>
        <div className="grid grid-cols-1 gap-4">
          {book.chapters.map((chapter) => (
            <div 
              key={chapter.id} 
              className="bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:bg-gray-200 transition"
            >
              <Link 
                to={`/books/${book.id}/${chapter.id}`} 
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {chapter.chapter_name}
              </Link>
              <span className="text-sm text-gray-500">
                Released: 
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
