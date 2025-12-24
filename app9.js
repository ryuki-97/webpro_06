"use trict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let basket2 = [];
let task = [];
let anime = [];

// バスケ選手名簿
// 一覧
app.get("/basket2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('basket2', {data: basket2} );
});

// Create
app.get("/basket2/create", (req, res) => {
  res.redirect('/public/basket2_add.html');
});

// Read
app.get("/basket2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = Number(req.params.number);
  const detail = basket2[ number ];
  res.render('basket2_detail', {id: number, data: detail} );
});

// Delete
app.get("/basket2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  // station2.splice( req.params.number, 1 );
  const index = Number(req.params.number);
  const detail = basket2[index];
  res.render("basket2_delete", { id: index, data: detail });
});

app.post("/basket2/delete/:number", (req, res) => {
  const index = Number(req.params.number);
  basket2.splice(index, 1); // 配列から削除
  res.redirect("/basket2"); // 一覧へ
});

// Create
app.post("/basket2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = basket2.length + 1;
  const team = req.body.team;
  const name = req.body.name;
  const uninum = req.body.uninum;
  const position = req.body.position;
  const birthday = req.body.birthday;
  basket2.push( { id: id, team: team, name: name, uninum: uninum, position: position, birthday: birthday } );
  console.log( basket2 );
  res.render('basket2', {data: basket2} );
});

// Edit
app.get("/basket2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = basket2[ number ];
  res.render('basket2_edit', {id: number, data: detail} );
});

// Update
app.post("/basket2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  basket2[req.params.number].team = req.body.team;
  basket2[req.params.number].name = req.body.name;
  basket2[req.params.number].uninum = req.body.uninum;
  basket2[req.params.number].position = req.body.position;
  basket2[req.params.number].birthday = req.body.birthday;
  console.log( basket2 );
  res.redirect('/basket2' );
});
app.post("/basket2/delete/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  basket2[req.params.number].team = req.body.team;
  basket2[req.params.number].name = req.body.name;
  basket2[req.params.number].uninum = req.body.uninum;
  basket2[req.params.number].position = req.body.position;
  basket2[req.params.number].birthday = req.body.birthday;
  console.log( basket2 );
  res.redirect('/basket2' );
});

// 課題管理
// 一覧
app.get("/task", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('task', {data: task} );
});

// Create
app.get("/task/create", (req, res) => {
  res.redirect('/public/task_add.html');
});

// Read
app.get("/task/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = Number(req.params.number);
  const detail = task[ number ];
  res.render('task_detail', {id: number, data: detail} );
});

// Delete
app.get("/task/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  const index = Number(req.params.number);
  const detail = task[index];
  res.render("task_delete", { id: index, data: detail });
});

app.post("/task/delete/:number", (req, res) => {
  const index = Number(req.params.number);
  task.splice(index, 1); // 配列から削除
  res.redirect("/task"); // 一覧へ
});

// Create
app.post("/task", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = task.length + 1;
  const subject = req.body.subject;
  const name = req.body.name;
  const limit = req.body.limit;
  const method = req.body.method;
  const situation = req.body.situation;
  task.push( { id: id, subject: subject, name: name, limit: limit, method: method, situation: situation } );
  console.log( task );
  res.render('task', {data: task} );
});

// Edit
app.get("/task/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = task[ number ];
  res.render('task_edit', {id: number, data: detail} );
});

// Update
app.post("/task/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  task[req.params.number].subject = req.body.subject;
  task[req.params.number].name = req.body.name;
  task[req.params.number].limit = req.body.limit;
  task[req.params.number].method = req.body.method;
  task[req.params.number].situation = req.body.situation;
  console.log( task );
  res.redirect('/task' );
});
app.post("/task/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  task[req.params.number].subject = req.body.subject;
  task[req.params.number].name = req.body.name;
  task[req.params.number].limit = req.body.limit;
  task[req.params.number].method = req.body.method;
  task[req.params.number].situation = req.body.situation;
  console.log( task );
  res.redirect('/task' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
