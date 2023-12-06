'use client'

import Color from "@tiptap/extension-color"
import { useEditor, EditorContent, EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TipTapMenuBar from "./tiptap-menubar"
import { TextStyle } from "@tiptap/extension-text-style"
import { TextAlign } from "@tiptap/extension-text-align";
import ListItem from "@tiptap/extension-list-item"
import { Underline } from "@tiptap/extension-underline"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        code: {
          HTMLAttributes: {
            class: "bg-aztec-100"
          }
        },
        blockquote: {
          HTMLAttributes: {
            class: "ml-8"
          }
        }
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],

    editorProps: {
      attributes: {
        class: "w-full h-fit p-3 max-w-none overflow-y-auto rounded-md border-2 prose"
      }
    },

  })

  return (
    <>
      <TipTapMenuBar editor={editor} ></TipTapMenuBar>
      <EditorContent className="w-full h-fit max-h-full overflow-y-auto" editor={editor}></EditorContent>
    </>

  )
}

export default Tiptap