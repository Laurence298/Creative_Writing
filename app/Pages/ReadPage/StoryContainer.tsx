import React from "react";
import StoryHeader from "./Components/StoryHeader";
import StoryContent from "./Components/StoryContent";
import ReadAloudButton from "./Components/ReadAloudButton";
import { useQueryClient } from "@tanstack/react-query";
import type { Chapter } from "~/Types/book";


export default function StoryContainer() {
  const queryClient = useQueryClient();
  const reading = queryClient.getQueryData<Chapter>(["Reading"]);
  return (
    <div  >
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
