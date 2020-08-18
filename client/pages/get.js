//https://nextjs.org/docs/api-reference/data-fetching/getInitialProps

/*======================================================================================================
getInitialProps receives a single argument called context, it's an object with the following properties:

pathname - Current route. That is the path of the page in /pages
query - Query string section of URL parsed as an object
asPath - String of the actual path (including the query) shown in the browser
req - HTTP request object (server only)
res - HTTP response object (server only)
err - Error object if any error is encountered during the rendering
======================================================================================================*/

// if you don't use <Link> from next/link but juse use <a> tag
// the UX response will be super worst

import Link from "next/link";
import axios from "axios";

// input must be an object
const Get = ({ posts, comments }) => {
  let postList = posts.map((item, index) => (
    <div key={index} id={item.id}>
      {item.title} :{" "}
      <Link href={`http://localhost:3001/getdetails?id=${item.id}`}>
        <a>{item.author}</a>
      </Link>
    </div>
  ));

  let commentList = comments.map((item, index) => (
    <div key={index} id={item.postId}>
      {item.body}
    </div>
  ));

  return (
    <div>
      <div>GET</div>
      <hr />
      {postList}
      <hr />
      {commentList}
    </div>
  );
};

Get.getInitialProps = async (ctx) => {
  console.log(`pathname: ${ctx.pathname}`);
  console.log(`query: ${ctx.query}`);
  console.log(ctx.query);
  console.log(`asPath: ${ctx.asPath}`);
  let posts, comments;
  try {
    let res = await axios.get(process.env.HOST + "/posts");
    posts = res.data;

    res = await axios.get(process.env.HOST + "/comments");
    comments = res.data;
  } catch (err) {
    posts = [];
    comments = [];
  }
  // getInitialProps must retrun an object
  return {
    posts: posts,
    comments: comments,
  };
};

export default Get;
