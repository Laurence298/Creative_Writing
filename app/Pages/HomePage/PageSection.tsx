import { useQueryClient } from "@tanstack/react-query";
import { Card } from "~/Component/Cards";
import type { ChapterList } from "~/Types/book";


export function PageSection({  }) {
const queryClient = useQueryClient();
const chapters = queryClient.getQueryData<ChapterList>(["Chapters"]);

return (
<>

 <section className="mx-auto justify-center py-8">
                <h2 className="text-center text-2xl font-grotesk ">Latest</h2>
                <div className=" flex flex-col gap-4 mt-4 justify-center items-center">
                    {chapters && chapters.docs.length > 0 ? (
                        chapters.docs.map((chapter) => (
                            <Card key={chapter.id} chapter={chapter} />
                        ))
                    ) : (
                        <p>No chapters found.</p>
                    )}
                </div>
 </section>
</>
)
}