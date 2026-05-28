"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import { fetchNotes } from "@/lib/api";

import css from "@/components/NoteList/NoteList.module.css";
import cssSearch from "@/components/SearchBox/SearchBox.module.css";
import cssPage from "@/app/notes/NotesPage.module.css";

const NotesClient = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", 1, ""],
    queryFn: () =>
      fetchNotes({
        page: 1,
        search: "",
      }),
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error...</p>;

  return (
    <div>
      <div className={cssPage.toolbar}>
        <input
          className={cssSearch.input}
          type="text"
          placeholder="Search notes"
        />

        <button className={cssPage.button}>
          Create note +
        </button>
      </div>

      <ul className={css.list}>
        {data?.notes.map((note) => (
          <li className={css.listItem} key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <h2 className={css.title}>
                {note.title}
              </h2>
            </Link>

            <p className={css.content}>
              {note.content}
            </p>

            <div className={css.footer}>
              <span className={css.tag}>
                {note.tag}
              </span>

              <button className={css.button}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesClient;