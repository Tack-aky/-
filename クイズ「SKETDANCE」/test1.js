const quiz = [
  {
    question: '漫画「SKETDANCE」からの問題です。主人公　藤崎佑助の愛称は？',
    answers: [ 'ボス男', 'ユースケ', 'ボス', 'ボッスン'],
    correct: 'ボッスン'
  }, {
    question: '漫画「SKETDANCE］主人公　藤崎佑助の特技で間違っているものは？',
    answers: [ '集中モード', 'モノマネ', '剣道', 'パチンコ'],
    correct: '剣道'
  }, {
    question: ' 漫画「SKETDANCE」学園生活支援部　通称スケット団のメンバーじゃない人物は？',
    answers: [ 'ヒメコ', '中馬鉄治', 'スイッチ', 'キャプテン'],
    correct: 'キャプテン'
  }, {
    question: ' 漫画「SKETDANCE」の連載開始の年は？',
    answers: [ '２００７', '２０００', '２００３', '２０１０'],
    correct: '２００７'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
} 
