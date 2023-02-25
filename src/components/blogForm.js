import React, { useState } from "react";
import axios from "axios";

function BlogForm() {
  const [title, setTitle] = useState("New Blog Title");
  const [blog, setBlog] = useState("Max 255 char");
  const [catagory, setCatagory] = useState("What Catagory");

  const url = "http://127.0.0.1:3001/addBlog";

//   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const user = {
// //       title,
// //       blog,
// //       catagory,
// //     };
// //     console.log(user);
// //     axios
// //       .post(url, {
// //         user,
// //       })
// //       .then((response) => {
// //         console.log(response);
// //       })
// //       .catch((error) => console.error(error));


//   };

const handleSubmit = async (event) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           title: title,
           blog: blog,
           catagory: catagory
        }),
    })
    .then((response) => response.json()) 
    .then((data) => {
        console.log('Success:', data);
        // dispatch(addPost(data));
        // setTitle("");
        // setPosts("");
    })
    .catch((error) =>
    console.log("Unable to add post", error)
    )
}

  return (
    <>
      <form>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Post:
          <textarea
            type="text"
            value={blog}
            onChange={(e) => setBlog(e.target.value)}
          ></textarea>
        </label>
        <br></br>
        <label>
          Catagory:
          <input
            type="text"
            value={catagory}
            onChange={(e) => setCatagory(e.target.value)}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
}

export default BlogForm;
