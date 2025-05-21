// DOM EVENT
// HTML태그에서 JS로 동적제어하고 싶은 대상만 변수로 만든다.
// 회원만 주문되는 주문하기 버튼 알고리즘
// (비회원인 경우) 주문하기 버튼을 클릭했을 때 '회원만 주문할 수 있습니다.' 메세지 출력
// 주문하기 버튼 == DOM객체변수
// 클릭했을 때 == 이벤트(HTML, Javascript 둘다 쓸 수 있다.)
// 회원만 메세지 출력 == 함수
// 이벤트리스너 -> 리스너(listener)란? 특정 이벤트가 발생했을 때 실행할 함수를 의미한다. (ex.prompt,alert...)
const buyBtn = document.querySelector('#buyBtn'); //#buyBtn을 문서에서 찾아서 buyBtn이라는 상수에 대입해라. (변수생성)
console.log(buyBtn); //인식 못하면 html에서 스크립트에서 defer 꼭 기입해주기!!! 아니면 null뜸!! (변수정상확인)

// 버튼 onclick이벤트리스너로 호출할 함수 생성
function userOrderMsg(){ //일반함수
    return console.log('회원만 주문가능합니다. 로그인해주세요');
}

// 결제하기 클릭 시 '결제 완료되었습니다' 출력 알고리즘
const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function payDoneMsg(){
    return console.log('결제 완료되었습니다')
}
// 아이디중복확인 클릭 시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다' 출력 알고리즘
const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function idChkMsg(){
    return console.log('아이디가 중복되지 않습니다. 사용하셔도 좋습니다');
}
// 키보드 이벤트
// 리뷰입력창에 키보드를 눌렀을 때 '50자 이상 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]');
console.log(userReview);
function enterReview(){
    return console.log('50자 이상 입력하세요');
}
// id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영어로 시작해야 합니다' 출력 알고리즘
// pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고리즘
const userId = document.querySelector('input[name*=id]');
console.log(userId);
function enIdEnter(){
    return console.log('아이디는 영어로 시작해야 합니다');
}
const userPw = document.querySelector('input[name*=pw]');
console.log(userPw);
function enter12Pw(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요');
}
// 기타 이벤트
// focus 특정 요소에 포커스(커서 활성화)되었을 경우
// userId.style.border = '3px solid green'; //즉시 실행 테스트
userId.style.outline = 'none';
function focusGreen(){
    return userId.style.border = '3px solid green'; //포커스가 들어가야 초록테두리가 들어간다.
}
function blurGray(){
    return userId.style.border = '2px solid gray';
}
// 쇼핑몰 상품 수량 입력 알고리즘
// 기본 수량 1
// 사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑 변경
// 커서를 빼면 배경색 흰색
const productNum = document.querySelector('input[name*=product]');
console.log(productNum);
function focusYellow(){
    return productNum.style = 'background-color:yellow';
}
function blurWhite(){
    return productNum.style.backgroundColor = '#fff';
}
// 문서가 로딩되었을 때 실행함수
function loadMsg(){
    return alert('문서 로딩 완료'); //문서가 새로 로딩될 때마다 실행되기 때문에 body에 보통 쓰인다.
}
console.log('==================이벤트와 콜백함수')
// 객체 -> 이벤트 -> 함수
const googleJoin = document.querySelector('.google_join');
console.log(googleJoin);
// 자바스크립트에 작성하는 객체 이벤트 문법
// 객체.addEventListener('이벤트', 콜백함수);
// addEventListener이벤트 작성 시 'on' 없이 이벤트만 작성한다.
googleJoin.addEventListener('click',googleGo); //오류 안나게 하려면 콜백을 미리 적어놓으면 좋다!! 이벤트의 on, 콜백함수의 ()는 빼고 적는다!!!
function googleGo(){
    return window.open('https://accounts.google.com','_blank')
} // a의 #에 링크를 넣으면 되는데 왜 안하냐? 다양한 페이지로 이동할 수 있게 하기 위해서
const naverJoin = document.querySelector('.naver_join');
console.log(naverJoin);
naverJoin.addEventListener('click',naverGo);
function naverGo(){
    return window.open('https://nid.naver.com/','_blank');
}
const kakaoJoin = document.querySelector('.kakao_join');
console.log(kakaoJoin);
kakaoJoin.addEventListener('click',kakaoGo);
function kakaoGo(){
    return window.open('https://accounts.kakao.com/','_blank');
} //인터넷 창 띄우기 위한 window.open기억하고 blank기억하기!!
//현재 페이지 변경방법
// 1. 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
// 2. 이벤트
fileLink.addEventListener('click',link0520);
// 3. 함수
// JS에서 상대경로 연결 시 js파일 기준이 아닌 js가 연결된 html 파일이 저장된 위치를 기준으로 상대경로를 작성한다.
// JS에서는 자동완성이 되지 않으니 잘 확인해야한다!
function link0520(){
    return window.location.href = 'bom1.html'; //상대경로
    //경로를 쓸때 파일 기준이 아니고 연결된 html을 기준으로 경로를 쓴다.
}
const indexLink = document.querySelector('.index_link');
const readmeLink = document.querySelector('.readme_link');
console.log(indexLink);
console.log(readmeLink);
indexLink.addEventListener('click',linkIndex);
readmeLink.addEventListener('click',linkReadme);
function linkIndex(){
    return window.location.href = 'index.html';
}
function linkReadme(){
    return window.location.href = '../README.md'
}
/* 상품 수량 증가 알고리즘 */
//1. 수량 초기값 1
//2. +버튼 클릭 시 수량이 1씩 증가해야 한다.
const numInput = document.querySelector('input[name=num]');
const numBtn = document.querySelector('#num_btn');
const numBtnMin = document.querySelector('#num_btn_minus');
console.log(numInput,numBtn);
console.log(numBtnMin);
//1. 수량 초기값 1
numInput.value = 1; // 객체.속성
//2. +버튼 클릭 시
numBtn.addEventListener('mouseup',plus1)
numBtnMin.addEventListener('mouseup',minus1);
//3. 수량이 1씩 증가
function plus1(){
    // 1. 더하기 연산자와 형변환메서드 활용법
    /* console.log(typeof numInput.value); */
    return numInput.value = Number(numInput.value)+1;
    // 2. 증감연산자 활용법
    /* return numInput.value = ++numInput.value; */
}
/* numBtn.style = 'border-radius:10px'; */ //걍 해본거 ㅋㅋ
function minus1(){
    return numInput.value = --numInput.value;
    /* return numInput.value = Number(numInput.value)-1; */
}