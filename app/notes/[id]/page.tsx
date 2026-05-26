import css from "./NoteDetails.module.css"
import { getNoteItem } from "@/lib/api"

interface Props{
    params: Promise<{id:string}>
}

const NoteDetails = async ({params}:Props) => {

    const {id} = await params
    
    const noteItem = await getNoteItem(id)

    return (
    <div className={css.main}>
        <div className={css.container}>
            <div className={css.header}>
                <h2>{noteItem.title}</h2>
            </div>
            <div className={css.item}>
                <p className={css.content}>{noteItem.content }</p>
                <p className={css.date}>{noteItem.createdAt}</p>
                <p className={css.tag}>{noteItem.tag}</p>
            </div>
            
        </div>        
    </div>

    )
} 

export default NoteDetails