import { HomePage } from "~/Pages/HomePage/HomePage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader({params}: Route.ClientLoaderArgs) {

  try {
     const res = await fetch(`http://localhost:3000/api/chapter`,{
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     }
   });

    const product = await res.json();
    return product;

  } catch (error) {
    console.error("Error fetching data:", error);
    return null
  }
 
  }

export default function Home({loaderData}: Route.ComponentProps) {
  return <HomePage data={loaderData} />;
}
