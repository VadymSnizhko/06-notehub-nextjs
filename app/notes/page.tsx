//import { ChangeEvent, useState } from "react";
import css from "../../components/NoteList/NoteList.module.css"
import cssSearch from "../../components/SearchBox/SearchBox.module.css"
import cssPage from "./NotesPage.module.css"
import { fetchNotes, getNote } from "@/lib/api"
import Link from "next/link"
//import type {DebouncedState } from "use-debounce";
//import {type SearchBoxProps} from "../../types/node"

/*
interface SearchBoxProps {
  //value: string;
  //onChange: (value: string) => void;
  onChangeSearch: DebouncedState<(newSearchValue: string) => void>
}

//function SearchBox ({onChangeSearch}: SearchBoxProps)
//{
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setInputValue(e.target.value)
        //onChangeSearch(e.target.value)
    }  
//}
*/

const NoteList = async () => {

    const res = await getNote()
    console.log(res);

    return  (
    <div>
        <div className={cssPage.toolbar}>
        <input 
        className={cssSearch.input} 
        type="text"
        placeholder="Search notes"
        //value={inputValue} 
        //onChange={handleChange}
         />
         <button className={cssPage.button}>Create note +</button>            
        </div>

        <ul className={css.list}>
         {res?.notes.map(note => (
            <li className={css.listItem} key={note.id}>
                <Link href={`/notes/${note.id}`}>
                    <h2 className={css.title}>{note.title}</h2>
                </Link>
                <p className={css.content}>{note.content}</p>
                <div className={css.footer}>
                    <span className={css.tag}>{note.tag}</span>
                    <button className={css.button}>Delete</button>
                </div>
            </li>
        ))}           
        </ul>

         
    </div>)
}

export default NoteList