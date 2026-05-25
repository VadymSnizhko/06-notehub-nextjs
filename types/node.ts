export type NoteTag =
  | 'Todo'
  | 'Work'
  | 'Personal'
  | 'Meeting'
  | 'Shopping';

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;

  createdAt: string;
  updatedAt: string;
}

export interface CreateNote {
  title: string;
  content: string;
  tag: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  page: number;
  search: string;
}

export interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}