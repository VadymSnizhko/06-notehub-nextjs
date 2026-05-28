import Link from "next/link";

import css from "./NoteList.module.css";

import { Note } from "@/types/note";

type NoteListProps = {
  notes: Note[];
};

const NoteList = ({
  notes,
}: NoteListProps) => {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li
          className={css.listItem}
          key={note.id}
        >
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
  );
};

export default NoteList;
