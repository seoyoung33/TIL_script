//setIntercal(콜백함수, 시간)
let num = 0; //0, 400, 800 출력을 위한 숫자변수
const slideC = document.querySelector('.slide_container');
slideC.style.transition = 'transform 1.5s'
const slideTimer = setInterval(()=>{
    num--;
    if(num<0){num=2}
    slideC.style.transform = `translateX(-${400*num}px)`;
    console.log(`현재 num:${num}, x축값:${400*num}`);
},1500);

/* setInterval(numTimer,2000);
function numTimer(){
    console.log(num);
    num++;
} */

//이벤트의 다양한 함수호출 방법(콜백, 화살표함수, 익명함수 순서)
//DOM.addEventListener('event', 콜백함수)
//DOM.addEventListener('event', ()=>{})
//DOM.addEventListener('event', function(){})

//타이머의 다양한 함수 작성방법
//setInterval(콜백함수, 밀리초);
//(위) 특징 : 콜백함수를 재사용할 수 있다.
//const 변수명 = setInterval(익명함수, 밀리초);
//(위) 특징 : 타이머를 담은 변수명으로 타이머 정지, 다시재생 등의 제어를 할 수 있다.

//const numTimer = setInterval(function(){console.log(num); num++;}, 1000);
//const numTimer = setInterval(()=>{console.log(num); num++;}, 2000);