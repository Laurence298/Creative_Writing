import { fetchChapters } from '../hooks/useChaptersList'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Mainpage,
  loader: () => fetchChapters(),
})

function Mainpage() {
  const { data } = useLoaderData({from: "/"});
  return (
    <div className="">
      
    </div>
  )
}
