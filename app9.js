"use trict";

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let basket2 = [];

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
  basket2[req.params.number].params = req.body.position;
  basket2[req.params.number].birthday = req.body.birthday;
  console.log( basket2 );
  res.redirect('/basket2' );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
