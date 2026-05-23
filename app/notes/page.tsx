import css from "./NoteLisr.module.css"
import { fetchNotes, getNote } from "@/lib/api"


const NoteList = async () => {

    const res = await getNote()
    console.log(res);

    return  (
    <div>
        <h2>Note list:</h2>
        <ul className={css.list}>
         {res?.notes.map(note => (
            <li className={css.listItem} key={note.id}>
                <h2 className={css.title}>{note.title}</h2>
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