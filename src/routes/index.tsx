import type { ChapterList } from '@/Types/book';
import { fetchChapters } from '../hooks/useChaptersList'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { Card } from '../component/Global/card';

export const Route = createFileRoute('/')({
  component: Mainpage,
  loader: async () => fetchChapters(),
})

function Mainpage() {
  const { docs } = useLoaderData({from: "/"}) as ChapterList;
  return (
    <>
 <section className="mx-auto justify-center py-8">
                <h2 className="text-center text-2xl font-grotesk ">Latest</h2>
                <div className=" flex flex-col gap-4 mt-4 justify-center items-center">
                    {docs && docs.length > 0 ? (
                        docs.map((chapter) => (
                            <Card key={chapter.id} chapter={chapter} />
                        ))
                    ) : (
                        <p>No chapters found.</p>
                    )}
                </div>
 </section>
</>
  )
}
