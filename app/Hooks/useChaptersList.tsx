import { useQuery } from "@tanstack/react-query";
import type { ChapterList } from "~/Types/book";

export const fetchChapters = async ()  => {
  const res = await fetch(`http://localhost:3000/api/chapter`);
  if (!res.ok) throw new Error("Failed to fetch chapters");
   
  const data = await res.json();
  const cleanedData: ChapterList = {
    docs: data.docs || [],
  };
  console.log("Fetched Chapters:", cleanedData);

  return cleanedData;


};

export const useChapters = (initialData?: ChapterList | null) => {
  return useQuery<ChapterList>({
    queryKey: ["Chapters"],
    queryFn: fetchChapters,
    initialData: initialData || { docs: [] },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
