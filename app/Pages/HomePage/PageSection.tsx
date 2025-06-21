import { useQueryClient } from "@tanstack/react-query";
import { Card } from "~/Component/Cards";
import type { ChapterList } from "~/Types/book";




export function PageSection({  }) {
const queryClient = useQueryClient();
const chapters = queryClient.getQueryData<ChapterList>(["Chapters"]);

return (
<>

 <section className="featured" id="stories">
            <div className="container">
                <h2 className="section-title">Latest</h2>
                <div className="stories-grid">
                    {chapters && chapters.docs.length > 0 ? (
                        chapters.docs.map((chapter) => (
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