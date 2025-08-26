import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/$bookId/$chapterId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/books/$bookid/$chapterId"!</div>
}
