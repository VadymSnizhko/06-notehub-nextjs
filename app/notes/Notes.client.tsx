'use client'

import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { fetchNotes } from "@/lib/api"

import SearchBox from "@/components/SearchBox/SearchBox"
import Pagination from "@/components/Pagination/Pagination"
import Modal from "@/components/Modal/Modal"
import NoteForm from "@/components/NoteForm/NoteForm"
import NoteList from "@/components/NoteList/NoteList"

const NotesClient = () => {
  const [page, setPage] = useState<number>(1)

  const [search, setSearch] = useState<string>("")

  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);
/*** */

const useDebounce = (
  value: string,
  delay: number,
) => {
  const [debouncedValue, setDebouncedValue] =
    useState<string>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => clearTimeout(id)
  }, [value, delay])

  return debouncedValue;
};
/*** */

  const debouncedSearch =
    useDebounce(search, 500)

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      "notes",
      page,
      debouncedSearch,
    ],

    queryFn: () =>
      fetchNotes({
        page,
        search: debouncedSearch,
      }),

    placeholderData: (prev) => prev,
  });

  if (isLoading) return <p>Loading...</p>

  if (isError) return <p>Error...</p>



  return (
    <>
      <div>
        <SearchBox
          value={search}
          onChange={setSearch}
        />

        <button
          onClick={() => setIsModalOpen(true)}
        >
          Create note +
        </button>
      </div>

      <NoteList notes={data?.notes ?? []} />

      <Pagination
        currentPage={page}
        totalPages={data?.totalPages ?? 1}
        onPageChange={setPage}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
      >
        <NoteForm />
      </Modal>
    </>
  )
}

export default NotesClient