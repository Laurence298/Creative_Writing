import { Card } from "~/Component/Cards";
import type { ApiResponse } from "~/Types/book";

type HomePageProps = {
  data: ApiResponse | null;
};


export function PageSection({ data }: HomePageProps) {

    {console.log(data)}
return (
<>

 <section className="featured" id="stories">
            <div className="container">
                <h2 className="section-title">Latest</h2>
                <div className="stories-grid">
                    {data && data.docs.length > 0 ? (
                        data.docs.map((chapter) => (
                            <Card key={chapter.id} chapter={chapter} />
                        ))
                    ) : (
                        <p>No chapters found.</p>
                    )}
                </div>
            </div>
        </section>
</>
)
}