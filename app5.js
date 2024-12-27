const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win ) || 0;
  let total = Number( req.query.total ) || 0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  //let judgement = '勝ち';
  //win += 1;
  //total += 1;
  if ((hand === 'グー' && cpu === 'チョキ') ||
      (hand === 'チョキ' && cpu === 'パー') ||
      (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1; // 勝った場合は勝ち数を増やす
  } else if (hand === cpu) {
    judgement = 'あいこ'; // あいこの場合
  } else {
    judgement = '負け'; // 負けの場合
  }
  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/639", (req, res) => {
  const number = req.query.number;
  const resurt = number * 639;
  const display = {
    number : number,
    resurt : resurt,
  }

  res.render( '639',display )

});

app.get("/reservation", (req, res) => {
  const a = req.query.date;
  const display = {
    a : a,
  }
  res.render( 'reservation',display )

});

app.get("/reservation2", (req, res) => {
  const sei_ka = req.query.text;
  const mei_ka = req.query.text1;
  const sei_na = req.query.text2;
  const mei_na = req.query.text3;
  const menyu = req.query.radio;
  const seinen = req.query.date1;
  const yoyakubi = req.query.date2;
  

  const display = {
    sei_ka : sei_ka,
    mei_ka : mei_ka,
    sei_na : sei_na,
    mei_na : mei_na,
    menyu : menyu,
    seinen : seinen,
    yoyakubi : yoyakubi,
  }
  res.render( 'reservation2',display )

});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
