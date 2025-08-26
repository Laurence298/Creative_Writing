import { createFileRoute, useLoaderData,Link  } from '@tanstack/react-router'
import { Card } from '../component/Global/card';
import type { BookList } from '@/Types/book';

export const Route = createFileRoute('/')({
  component: Mainpage,
  loader: async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/api/books")
      const data = await res.json()
      return data
    } catch (error) {
      return error
    }
  }
})

function Mainpage() {
  const data = useLoaderData({from: "/"}) as BookList
  if (!data) {
    return <p>No data</p>
  }

  return (
    <>
     <h1> Latest Realeases</h1>
     <section>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <Link to="/books/$bookId" params={{ bookId: String(book.id) }}>
            {book.book_name}
            </Link>
          </li>
      ))}
      </ul>
      
     </section>
      
    </>
  )
}
