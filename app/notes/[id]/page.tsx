import css from "./NoteDetails.module.css"
import { getNoteItem } from "@/lib/api"
import { QueryClient, HydrationBoundary, dehydrate, } from "@tanstack/react-query"
import NoteDetailsClient from "./NoteDetails.client"

interface Props{
    params: Promise<{id:string}>
}

const NoteDetails = async ({params}:Props) => {

    const {id} = await params

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["note", id],
        queryFn: () => getNoteItem(id),
    });

    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  )

    /*
    const noteItem = await getNoteItem(id)

    return (
    <div className={css.container}>
	    <div className={css.item}>
	        <div className={css.header}>
	            <h2>{noteItem.title}</h2>
	        </div>
            <p className={css.tag}>{noteItem.tag}</p>
            <p className={css.content}>{noteItem.content }</p>
            <p className={css.date}>{noteItem.createdAt}</p>
	    </div>
    </div>
    )*/
} 

export default NoteDetails