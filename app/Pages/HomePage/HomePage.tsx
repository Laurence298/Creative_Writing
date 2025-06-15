import { Card } from "~/Component/Cards";
import { NavBar } from "./Header";
import { PageSection } from "./PageSection";
import type { ApiResponse } from "~/Types/book";

type HomePageProps = {
  data: ApiResponse | null;
};



export function HomePage({ data }: HomePageProps) {

    {console.log(data)}
return (
<>
     <main>
        <PageSection data={data} />
    </main>
</>

)


}
