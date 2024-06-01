import React from 'react'
import { Editor, useCurrentEditor } from "@tiptap/react"
import Color from "@tiptap/extension-color"
import TextStyle from "@tiptap/extension-text-style"
import ListItem from "@tiptap/extension-list-item";
import { StarterKit } from "@tiptap/starter-kit"
import { Button, Divider } from "@nextui-org/react";
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaBold, FaCode, FaItalic, FaListOl, FaListUl, FaParagraph, FaQuoteLeft, FaRulerHorizontal, FaStrikethrough, FaUnderline } from "react-icons/fa6";
import TipTapButton from "./tiptap-button";
import { RiFormatClear } from "react-icons/ri";
import { AiOutlineClear, AiOutlineEnter } from "react-icons/ai";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from "react-icons/lu";
import { MdFormatListBulleted, MdFormatListNumbered, MdRedo, MdUndo } from "react-icons/md";

export default function TipTapMenuBar({ editor }: { editor: Editor | null }) {


    if (!editor) {
        return null
    }

    return (
        <>
            <div className="h-fit w-full">
                <div className="flex flex-wrap gap-3 lg:gap-5 bg-white h-fit w-full py-3 rounded-md">
                    <div className="flex gap-3 flex-wrap">
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleBold()
                                    .run()
                            }
                            isActive={editor.isActive('bold')}
                        >
                            <FaBold />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleItalic()
                                    .run()
                            }
                            isActive={editor.isActive('italic')}
                        >
                            <FaItalic />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleUnderline()
                                    .run()
                            }
                            isActive={editor.isActive('underline')}
                        >
                            <FaUnderline />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleStrike()
                                    .run()
                            }
                            isActive={editor.isActive('strike')}
                        >
                            <FaStrikethrough />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleCode().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .toggleCode()
                                    .run()
                            }
                            isActive={editor.isActive('code')}
                        >
                            <FaCode />
                        </TipTapButton>
                        <TipTapButton isNotIconOnly onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                            <span>
                                Clear Format
                            </span>
                            <RiFormatClear />
                        </TipTapButton>


                    </div>

                    <div className="flex">
                        <Divider orientation="vertical" />
                    </div>

                    <div className="flex gap-3 flex-wrap">

                        <TipTapButton
                            onClick={() => editor.chain().focus().setTextAlign('left').run()}
                            isActive={editor.isActive({ textAlign: 'left' })}
                        >
                            <FaAlignLeft />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().setTextAlign('center').run()}
                            isActive={editor.isActive({ textAlign: 'center' })}
                        >
                            <FaAlignCenter />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().setTextAlign('right').run()}
                            isActive={editor.isActive({ textAlign: 'right' })}
                        >
                            <FaAlignRight />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                            isActive={editor.isActive({ textAlign: 'justify' })}
                        >
                            <FaAlignJustify />
                        </TipTapButton>
                        <TipTapButton isNotIconOnly onClick={() => editor.chain().focus().unsetTextAlign().run()}>
                            <span>
                                Unset Text Align
                            </span>
                            <FaAlignJustify />
                        </TipTapButton>
                    </div>

                    <div className="flex">
                        <Divider orientation="vertical" />
                    </div>

                    <div className="flex gap-3 flex-wrap">

                        <TipTapButton isNotIconOnly onClick={() => editor.chain().focus().clearNodes().run()}>
                            <span>
                                Clear Nodes
                            </span>
                            <AiOutlineClear />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().setParagraph().run()}
                            isActive={editor.isActive('paragraph')}
                        >
                            <FaParagraph />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            isActive={editor.isActive('heading', { level: 1 })}
                        >
                            <LuHeading1 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            isActive={editor.isActive('heading', { level: 2 })}
                        >
                            <LuHeading2 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            isActive={editor.isActive('heading', { level: 3 })}
                        >
                            <LuHeading3 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                            isActive={editor.isActive('heading', { level: 4 })}
                        >
                            <LuHeading4 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                            isActive={editor.isActive('heading', { level: 5 })}
                        >
                            <LuHeading5 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                            isActive={editor.isActive('heading', { level: 6 })}
                        >
                            <LuHeading6 />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            isActive={editor.isActive('bulletList')}
                        >
                            <FaListUl />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                            isActive={editor.isActive('orderedList')}
                        >
                            <FaListOl />
                        </TipTapButton>
                        <TipTapButton isNotIconOnly
                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                            isActive={editor.isActive('codeBlock')}
                        >
                            <span>Code Block</span>
                            <FaCode />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                            isActive={editor.isActive('blockquote')}
                        >
                            <FaQuoteLeft />

                        </TipTapButton>
                        <TipTapButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                            <FaRulerHorizontal />

                        </TipTapButton>
                        <TipTapButton isNotIconOnly onClick={() => editor.chain().focus().setHardBreak().run()}>
                            <span>hard break</span>
                            <AiOutlineEnter />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .undo()
                                    .run()
                            }
                        >
                            <MdUndo />
                        </TipTapButton>
                        <TipTapButton
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={
                                !editor.can()
                                    .chain()
                                    .focus()
                                    .redo()
                                    .run()
                            }
                        >
                            <MdRedo />

                        </TipTapButton>
                    </div>
                </div>
            </div>
        </>
    )
}

// export const extensions = [
//     Color.configure({ types: [TextStyle.name, ListItem.name] }),
//     TextStyle.configure({}),
//     StarterKit.configure({
//         bulletList: {
//             keepMarks: true,
//             keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//         orderedList: {
//             keepMarks: true,
//             keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
//         },
//     }),
// ] 