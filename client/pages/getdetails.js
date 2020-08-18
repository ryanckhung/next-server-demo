import axios from "axios";

const GetDetails = ({ posts }) => {
  return (
    <div>
      <div>Get Details</div>
      {posts !== null && <div>Title: {posts.title}</div>}
      {posts !== null && <div>Author: {posts.author}</div>}
      {posts === null && <div>Data Not Exists</div>}
    </div>
  );
};

GetDetails.getInitialProps = async (ctx) => {
  console.log(ctx.query.id);
  let posts;
  try {
    let res = await axios.get(process.env.HOST + "/posts/" + ctx.query.id);
    posts = res.data;
  } catch (err) {
    posts = null;
  }
  // getInitialProps must retrun an object
  return {
    posts: posts,
  };
};

export default GetDetails;
