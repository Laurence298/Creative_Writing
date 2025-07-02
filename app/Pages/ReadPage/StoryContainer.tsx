import StoryHeader from "./Components/StoryHeader";
import StoryContent from "./Components/StoryContent";
import ReadAloudButton from "./Components/ReadAloudButton";
import { useQueryClient } from "@tanstack/react-query";
import type { Chapter } from "~/Types/book";


export default function StoryContainer() {
  const queryClient = useQueryClient();
  const reading = queryClient.getQueryData<Chapter>(["Reading"]);
  return (
    <div  className=" gap-4 p-4 max-w-3xl mx-auto ">
      {reading  ? (
        <>
          <StoryHeader chapter={reading} />
          <StoryContent chapter={reading}/>
          <ReadAloudButton />  
        </>
   
    
    ) : (
        <h1 className="story-title">Loading...</h1>
      )}
      
    </div>
  );
}
