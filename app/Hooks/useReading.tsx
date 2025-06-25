import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import type { Chapter } from "~/Types/book";


export const fetchReading = async (id:any)  => {

    const res = await fetch(`http://localhost:3000/api/chapter/${id}`);
    if (!res.ok) throw new Error("Failed to fetch chapters");

    const data = await res.json();

    const cleanedData = {
        id: data.id || "",
        title: data.title || "",
        content: data.content || "",
        parent_book: {
            id: data.parent_book?.id || "",
            title: data.parent_book?.title || "",
            description: data.parent_book?.description || ""
        },
        createdAt: data.createdAt || "",
        updatedAt: data.updatedAt || ""
    };

    return cleanedData;


};

export const useReadingPage = ( initialData?: Chapter, id?: any) => {
  return useQuery<Chapter>({
    queryKey: ["Reading"],
    queryFn:() => fetchReading(id), // 🛠️ Fix: wrap in function
    initialData,
  });
};