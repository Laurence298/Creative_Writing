import type { BookList } from '@/Types/book';
import { createFileRoute,useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/books/')({
  component: RouteComponent,
  loader: async () =>{
    const res = await fetch("http://127.0.0.1:3000/api/books")
    const data = await res.json

    return data;
  }
})

function RouteComponent() {
  const data = useLoaderData({from: "/books"}) as BookList

  console.log(data)

  if (!data || !data.length) {
    return(
      <>
        <p> kok </p>
      </>
    )
  }
  
  return (
    <>
      {data.map((book) =>(
        <p key={book.id}>{book.book_name}</p>
      ))}
    </>
  )
}
