import { HomePage } from "~/Pages/HomePage/HomePage";
import type { Route } from "./+types/home";

import { fetchChapters, useChapters } from "~/Hooks/useChaptersList";

export async function clientLoader({params}: Route.ClientLoaderArgs) {
   
  try {
     const chapters = await fetchChapters();
    return chapters;

  } catch (error) {
    return null
  }
  }

export default function Home({loaderData }: Route.ComponentProps) {
    const { data: apiResponse } = useChapters(loaderData);
  return(
  <>
 
      <HomePage />
  </>
  ) ;
}
