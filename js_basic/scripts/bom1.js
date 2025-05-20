/* BOM(browser Object model)내장함수 */
/* const msg1 = window.alert('잠시 기다려 주세요'); //(변수값 필요없음)
const msg2 = window.alert('잘못된 접근입니다'); //순서대로 쌓인다.
console.log(msg1); // 1회성 실행. 개발자도구의 콘솔에서 확인 불가 */ // (변수값 필요없음)
/* const userAge = window.prompt('나이를 입력하세요'); // 입력정보가 변수에 들어간다. //(변수값 필요) 사용자가 입력한 값을 반복사용.
console.log(userAge); // 개발자도구의 콘솔에서 답변 확인 가능 */
/* const userPrint = window.confirm('인쇄하시겠습니까?'); // (변수값 필요) 참,거짓으로 구분을 함
console.log(userPrint); //개발자도구의 콘솔에서 확인true, 취소false로 바뀐다. */
/* const userInfo = window.open('https://google.com','_blank'); //a함수와 동일! target 적듯이 적으면 된다.(변수값 필요없음)
// 결제시스템 주소가 들어간다거나 하면 좋다! */
/* const userWrite = window.document.write('hello js'); //(변수값 필요없음)
window.document.write('안녕하세요 자바스크립트'); */
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장함수 : prompt(), confirm() -> 사용자한테 결과값(입력,확인,취소)을 받는 내장함수이기 때문!
// window.print(); //등본 출력할 때 1부만 출력 가능 => 변수값 필요!, 인쇄 횟수 제한없으면 => 변수값 필요없음 (사이트마다 다름)
//사용자에 따른 인쇄제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야 한다.
// ========================================= DOM - HTML Node
const pTag = document.getElementsByTagName('p'); //객체.내장함수() => p태그들을 선택하겠다.
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group'); //이미 앞에 class라고 선언이 되어있어서 .group으로 쓸 필요가 없다.
const liCls = document.getElementsByClassName('list');
const acCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');
const defineCls = document.getElementsByClassName('define');
const titleId = document.getElementById('title');
const dtTag = document.getElementsByTagName('dt'); //하나만 잡을거라면 맨 뒤에 인덱스[1] 쓰기. 그러면 아래 스타일 넣을 때는 인덱스[1] 쓰지말기!
const ctsCls = document.getElementsByClassName('contents');
/* const liCls = document.getElementsByClassName('active'); */
console.log(pTag);
console.log(h1Tag); // 앞으로 또 등장할 수 있으니까 콘솔에서 배열로 확인된다.
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(acCls);
console.log(wrapId);
console.log(defineCls);
console.log(titleId);
console.log(dtTag);
console.log(ctsCls);
//================================ DOM 객체 속성
// 객체.style = 'css속성:값';
pTag[0].style = 'background-color:yellow';
pTag[1].style = 'background-color:lime';
ulCls[0].style = 'border:5px solid orange';
liCls[0].style = 'border-bottom:3px solid red';
liCls[1].style = 'border-bottom:3px solid green';
liCls[2].style = 'border-bottom:3px solid blue';
liCls[3].style = 'border-bottom:3px solid purple';
acCls[0].style = 'color:aqua';
acCls[1].style = 'color:pink';
wrapId.style = 'padding:50px';
func.style = 'color:red'; //변수선언을 안해도 괜찮으나, 변수선언을 별도로 하는 것이 좋다!
//위와 같이 style속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가 높은 개념으로 적용된다. 적용 후 모습은 웹브라우저 F12개발자도구에서만 확인 가능하다
//CSS 우선순위 : 자바스크립트 style속성 > ID > Class > Tag
defineCls[0].style = 'background-color:purple';
titleId.style = 'background-color:pink';
dtTag[1].style = 'background-color:skyblue';
ctsCls[0].style = 'background-color:coral';
ctsCls[1].style = 'background-color:olive';
console.log('==========================');
//ES6 querySelector 이용 DOM선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li');
const orderLi4 = document.querySelector('.order li:nth-child(4)');
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item'); //이름이 추가로 들어올 가능성이 있다면 부모 꼭 적어주기!
console.log(orderOl);
console.log(orderLi);
console.log(orderLi4);
console.log(orderToday);
console.log(orderItem);
orderLi[0].style = 'font-size:2rem';
orderToday.style = 'font-weight:700';
orderItem.style = 'color:red';
orderLi4.style = 'border-bottom:2px dotted orange';
console.log('==========================실습하기');
//모든 a의 글자색 검정 ok
//nav배경색 
//gnb의 자식 li는 테두리 두께 1, lnb의 자식 li테두리 두께 2 ok
//gnb,lnb 각각 다른 배경색 ok -> ul로 한꺼번에 묶어도 된다!
const navTag = document.querySelector('nav');
const navGnb = document.querySelector('nav .gnb');
const gnbLi = document.querySelectorAll('.gnb > li');
const LnbLi = document.querySelectorAll('.lnb > li');
const navATag = document.querySelectorAll('nav a');
const navLnb = document.querySelector('nav .lnb');
//console.log(navTag, navGnb, gnbLi, navLnbLi, navATag, navLnb)로 다같이 묶어도 된다!!!
console.log(navTag);
console.log(navGnb);
console.log(gnbLi);
console.log(LnbLi);
console.log(navATag);
console.log(navLnb);
navTag.style = 'background-color:pink';
navGnb.style = 'background-color:lime';
gnbLi[0].style = 'border:1px solid red';
gnbLi[1].style = 'border:1px solid blue';
LnbLi[0].style = 'border:2px dotted green';
LnbLi[1].style = 'border:2px dotted purple';
navATag[0].style = 'color:#000';
navATag[1].style = 'color:#000';
navATag[2].style = 'color:#000';
navATag[3].style = 'color:#000';
/* navLnb.style = 'background-color:coral'; */
// 객체.속성 = '값';
// 객체.속성.속성 = '값'; 가능!! 캐멀표기법으로 작성!!
navLnb.style.backgroundColor = 'skyblue';
navLnb.style.padding = '30px';
navLnb.style.borderTop = '2px solid yellow';
//자바스크립트에서 css속성들을 쓸수는 있지만 오류가 안보이기 때문에 오타를 꼭 주의하기!!
console.log('=================================');
let a = 10;
let b = "10";
console.log(a, typeof a); //결과값 10 , 데이터타입 number
console.log(b, typeof b); //결과값 10 , 데이터타입 string
// let age = prompt('당신의 나이는?');
// alert(typeof age); //위 내용에 입력한 답을 볼 수 있다.
//prompt로 사용자가 입력하는 값은 무조건 문자(string)으로 처리된다.(암시적형변환)
// 자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고싶다면 명시적형변환 중 숫자로 변환해주는 Number() 내장함수를 사용한다.
// Number(숫자로 변환하고 싶은 데이터 또는 함수)
// 형변환 프로그래밍 동작 순서
// 1.prompt('당신의 나이는?') : 사용자가 입력한 값을 문자로 자동변환
// 2.Number() : prompt가 문자로 변환한 값을 숫자로 명시적변환
// 3.age = : 변수age에 숫자로 변환한 값을 대입
//const age = Number(prompt('당신의 나이는?'));
//const age = prompt('당신의 나이는?');
//console.log(`올해 당신의 나이는 ${age}살입니다.`);
//console.log(`내년 당신의 나이는 ${Number(age)+1}살입니다.`); //1회성으로 가능!
console.log('=====================쇼핑몰 구입 알고리즘');
// 상품 1개 가격 기준 15700원
// 현재 이벤트중 1+1
// 1. 사용자가 구입할 물건 개수 정하기
// 2. 개수에 따라 최종 가격 구하기
// 결과예) 구입할 물건은 ?개이고 이벤트상품 ?개가 추가됩니다. 총 결제 금액은 ?원입니다.
/* let price = 15700;
const productQa = prompt('구입할 개수를 입력하세요');
console.log(`구입할 물건은 ${Number(productQa)}개이고 이벤트상품 ${Number(productQa)}개가 추가됩니다. 총 결제 금액은 ${Number(productQa)*price}원입니다.`); */
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요'));
let eventNum = productQa; // 이벤트증정개수
let totalPrice = price*productQa; // 총 결제가격
console.log(totalPrice);
console.log(`구입할 물건은 ${productQa}개이고 이벤트상품 ${eventNum}개가 추가됩니다. 총 결제 금액은 ${totalPrice}원입니다.`);
// 변수를 더 많이! 결과는 깔끔하게! 하는 게 좋은 프로그래밍이다!!!!