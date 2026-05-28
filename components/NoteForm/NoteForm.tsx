const NoteForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Title"
      />

      <textarea
        placeholder="Content"
      />

      <button type="submit">
        Create
      </button>
    </form>
  );
};

export default NoteForm;