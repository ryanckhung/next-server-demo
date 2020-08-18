import { useState } from "react";
import axios from "axios";

const Post = () => {
  const [content, setContent] = useState({ title: null, author: null });

  async function post2Server(data) {
    let res = await axios.post(process.env.HOST + "/posts", data);
    console.log(res.data);
  }

  function submit(e) {
    try {
      const data = { title: document.getElementById("title").value, author: document.getElementById("author").value };
      console.log(data);
      post2Server(data);
      document.getElementById("message").innerHTML = "Data Created successfully";
      setTimeout(() => {
        document.getElementById("message").innerHTML = null;
      }, 2000);
    } catch (e) {
      console.log(e);
    } finally {
      document.getElementById("title").value = null;
      document.getElementById("author").value = null;
    }
  }

  return (
    <div>
      <div>Post</div>
      <div>
        <input type="text" placeholder="title" id="title" />
      </div>
      <div>
        <input type="text" placeholder="author" id="author" />
      </div>
      <button onClick={submit}>Submit</button>
      <div id="message"></div>

      <style jsx>{`
        div,
        button {
          margin: 12px;
        }
      `}</style>
    </div>
  );
};

export default Post;
