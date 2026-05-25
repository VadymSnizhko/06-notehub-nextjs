import css from "./NoteDetails.module.css"
import { getNoteItem } from "@/lib/api"

interface Props{
    params: Promise<{id:string}>
}

const NoteDetails = async ({params}:Props) => {

    const {id} = await params
    
    const noteItem = await getNoteItem(id)

    return (
    <div>
        <p>{noteItem.content }</p>
    </div>
    )
} 

export default NoteDetails