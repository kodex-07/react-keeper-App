function Note({ note, onDelete }) {
  const { title, content } = note;
  function Delete() {
    onDelete(title, content);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={Delete}> Delete</button>
    </div>
  );
}
export default Note;
