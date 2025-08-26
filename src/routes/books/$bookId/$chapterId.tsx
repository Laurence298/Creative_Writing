import type { Chapter } from '@/Types/book';
import { createFileRoute,useLoaderData } from '@tanstack/react-router'
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const Route = createFileRoute('/books/$bookId/$chapterId')({
  component: RouteComponent,
   loader: async ({params:{bookId, chapterId}}) =>{
      const res = await fetch(`http://127.0.0.1:3000/api/books/${bookId}/chapters/${chapterId}`)
      const data: Chapter = await res.json()
  
      
      return data;
    }
})

function RouteComponent() {
    const chapter = useLoaderData({from: "/books/$bookId/$chapterId"}) as Chapter

     
  if (!chapter) return <p>Loading chapter...</p>;

  const editor = useEditor({
    extensions: [StarterKit], // Make sure to include StarterKit
    editable: false,           // read-only mode
    content: chapter.content,  // JSON or HTML from API
  });

  if (!editor) return null; // Editor not ready yet

  return (
  <>
    <h1>{chapter.chapter_name}</h1>
    <section>
      <EditorContent editor={editor}/>
    </section>
  </>
  
  )
}
