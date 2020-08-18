// the <style jsx> valid on the current block now
// use Router.push to reload itself after delete
import axios from "axios";
import Router from "next/router";

// input must be an object
const Get = ({ posts }) => {
  async function deleteRow(id) {
    try {
      let res = await axios.delete(process.env.HOST + "/posts/" + id);
      Router.push(process.env.CLIENT_HOST + "/delete");
    } catch (e) {
      console.log("fail to reload");
    }
  }

  let postList = posts.map((item, index) => (
    <div key={index} id={item.id}>
      {item.title} : {item.author}{" "}
      <span className="delete" onClick={() => deleteRow(item.id)}>
        DEL
      </span>
      <style jsx>{`
        .delete {
          border: 1px solid blue;
          cursor: pointer;
          color: blue;
        }
      `}</style>
    </div>
  ));

  return (
    <div className="container">
      <div>DELETE</div>
      <hr />
      {postList}
      <style jsx>{`
        .container {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

Get.getInitialProps = async (ctx) => {
  let posts;
  try {
    let res = await axios.get(process.env.HOST + "/posts");
    posts = res.data;
  } catch (err) {
    posts = [];
  }
  // getInitialProps must retrun an object
  return {
    posts: posts,
  };
};

export default Get;
