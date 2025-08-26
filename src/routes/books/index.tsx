import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books/')({
  component: RouteComponent,
  loader: async () =>{
    const res = await fetch("")
    const data = await res.json

    return data;
  }
})

function RouteComponent() {
  
  return <div>Hello "/books/"!</div>
}
