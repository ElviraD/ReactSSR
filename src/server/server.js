/*
 * @Description: 
 * @Autor: dengwenyuan001
 * @Date: 2020-11-08 14:49:24
 * @LastEditors: dengwenyuan001
 * @LastEditTime: 2020-11-08 17:32:53
 */
const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path')

// import { renderToString } from 'react-dom/server';
// import AppDom from '../client/App.js';
// const AppString = renderToString(<AppDom />);

const { renderToString } = require('react-dom/server')
const AppDom = require("../../dist/server/App.js").default;

const AppString = renderToString(AppDom);
// console.log("server==>", AppDom, AppString);
const htmlTemplate = fs.readFileSync(path.join(__dirname,'../../dist/client/index.html'), 'utf-8')
// console.log("htmlTemplate===>", htmlTemplate);
const newHtml = htmlTemplate.replace("<!-- app -->", AppString);
// console.log("newHtml===>", newHtml);

app.use("/public", express.static(path.join(__dirname, "../../dist/client")));
app.get('/', (req,res) => {
  res.send(newHtml);
})

const port  = process.env.PORT || '4000';
app.listen(port, () => console.log(`server on port ${port}`));
