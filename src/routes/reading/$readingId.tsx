import StoryHeader from '../../component/Reading/StoryHeader';
import { fetchReading } from '../../hooks/useReading'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import StoryContent from '../../component/Reading/StoryContent';
import ReadAloudButton from '../../component/Reading/ReadAloudButton';
import type { Chapter } from '@/Types/book';

export const Route = createFileRoute('/reading/$readingId')({
  component: ReadingLayout,
  loader:({params:{readingId}}) => fetchReading(readingId),
})

function ReadingLayout() {
  const cleanedData = useLoaderData({ from: "/reading/$readingId" }) as Chapter;
  console.log("Reading Layout Data:", cleanedData);
  return (
    <div  className=" gap-4 p-4 max-w-3xl mx-auto ">
      {cleanedData  ? (
        <>
          <StoryHeader chapter={cleanedData} />
          <StoryContent chapter={cleanedData}/>
          <ReadAloudButton />  
        </>
   
    
    ) : (
        <h1 className="story-title">Loading...</h1>
      )}
      
    </div>
  );
}
