in this example we have server and client folder\
the server use the json-server to serve the frontend\
the client use next.js to implement\
set the server to port 3000 and try to set client to 3001


React Hook and Next.js\
import { useState, useEffect } from "react";\
Refer to file hooks.js inside pages folder

Environment Variable\
create a file next.config.js in the root file\
and then can access anywhere by process.env.VAR_NAME

Act as an API\
goto \pages\api\hello.js\
then curl "http://localhost:3001/api/hello"

Get data list from server\
(To test it, plase make sure the server port is correct)\
create a file get.js under the pages folder\
install the module npm install --save axios\
reference: https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
http://localhost:3001/get
for link with query => http://localhost:3001/get?abc=10
you can get the abc=10 by the ctx inside "Get.getInitialProps = async (ctx)"\
that's ctx.query.abc\
Add <Link> tag and switch to the details page, use <a> tag will be poor UX

Get data details from server\
goto pages\ folder and create getdetails.js\
http://localhost:3001/getdetails?id=1

Post data to the server\
goto pages folder and create the post.js file\
http://localhost:3001/post

Delete item and reload the list from server\
goto pages folder and create the delete.js file\
use Router.push to reload itself after delete

You can use the Next.js directly connected to the DB by\
https://vercel.com/guides/deploying-next-and-mysql-with-vercel => const mysql = require('serverless-mysql')
(not show in this example)\
create the \lib\db.js => 
then create the api under \pages\api\xxx.js => 
then goto the page and use getInitialProps to fetch the data through \page\api\xxx

