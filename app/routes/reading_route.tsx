
import StoryContainer from "~/Pages/ReadPage/StoryContainer";
import type { Route } from "./+types/reading_route";
import { fetchReading, useReadingPage } from "~/Hooks/useReading";
import type { Chapter } from "~/Types/book";


export async function clientLoader({params}: Route.ClientLoaderArgs) {
  
  try {
     const reading = await fetchReading(params.chapterId);
    return {Chapter: reading, chapterid: params.chapterId};

  } catch (error) {
    return null
  }
  }
export default function Reading({loaderData }: Route.ComponentProps) {
    const { data  } = useReadingPage(loaderData?.Chapter, loaderData?.chapterid);

    
  return(<>

  {    data ? (
    <StoryContainer />
  ) : (
    <h1>Loading...</h1>
  )}
    
  </>) ;
}
