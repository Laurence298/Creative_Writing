import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reading/$readingId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/reading/$readingId"!</div>
}
