import { createFileRoute, useLoaderData,Link  } from '@tanstack/react-router'
import { Card } from '../component/Global/card';
import type { BookList } from '@/Types/book';

export const Route = createFileRoute('/')({
  component: Mainpage,
  loader: async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/api/books/get_latest_book")
      const data = await res.json()
      return data
    } catch (error) {
      return error
    }
  }
})
function Mainpage() {
  const data = useLoaderData({ from: "/" }) as BookList

  if (!data || data.length === 0) {
    return <p>No data</p>
  }

  // First book is highlight, rest are regular items
  const [highlight, ...rest] = data

  return (
    <>
      <section className="flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold text-center">Latest Releases</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center w-full max-w-4xl">
          {/* Highlight */}
          <div id="highlight" className="col-span-1 md:col-span-2 bg-gray-200 p-6 text-center w-full">
            <Link to={`/books/${highlight.id}`}>
              {highlight.book_name}
            </Link>
          </div>

          {/* Remaining books equally */}
          {rest.map((book) => (
            <div key={book.id} className="bg-gray-100 p-4 text-center w-full">
              <Link to={`/books/${book.id}`}>
                {book.book_name}
              </Link>
            </div>
          ))}
        </div>

    <div className="w-full flex flex-col items-center mt-12">
  <h2 className="text-2xl font-semibold mb-4 text-center">Updates</h2>
  <div className="w-full px-4">
    <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-4 justify-center w-full">
      {data.map((book) => (
        <div
          key={book.id}
          className="bg-gray-100 p-4 text-center rounded-lg hover:bg-gray-200 transition-colors duration-200 md:w-[170px]"
        >
          <Link to={`/books/${book.id}`}>
            <p className="font-medium">{book.book_name}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
     </section>

    </>
    
  )
}