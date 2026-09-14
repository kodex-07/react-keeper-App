import { useState } from "react";

function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const postData = {
      title: title.trim(),
      content: content.trim(),
    };

    onSubmit(postData);
    setTitle("");
    setContent("");
  }
  return (
    <form>
      <input
        name="Title"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        name="Content"
        placeholder="Take a Note"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      >
        {" "}
      </textarea>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
export default Form;
