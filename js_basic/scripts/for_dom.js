//fot(변수초기값; 조건식; 증감식){조건이 참일 때 반복구문} 반복종료(조건거짓)
for(let i=0; i<5; i++){console.log(i+1)}
const li = document.querySelectorAll('ul li');
console.log(li);
for(let i=1; i<=2; i++){
    li[i].classList.add('list_active');
    //li[i].style.backgroundColor = 'yellow';
}
//태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll 선언 후 사용 시 변수[index] 활용하기 (주로 for 반복문과 함께 사용)
//========JS DOM 복제붙여넣기(데스크탑 내비와 모바일 내비에 주로 활용)
//붙여넣기 위치 DOM, 복제 DOM 변수 만들기!
const section = document.querySelector('section');
const ul = document.querySelector('ul'); //ul DOM 선택(원본)
const ulClone = ul.cloneNode(true); //()안에 true적으면 ul의 자식, 자손까지 복제(== Ctrl + C)
console.log(section, ul, ulClone);

//복제한 요소 붙여넣기(대상요소의 마지막자식 위치로 붙여넣기)
section.appendChild(ulClone); //section의 마지막 자식 위치에 복제대상 붙여넣기(== Ctrl + V)

//=====================================
//while 반복문 - 조건이 참일 경우 무한 반복
//while(조건){괄호 안 조건이 참일 경우 실행문} 조건거짓실행
/* let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
console.log(htmlQ); */ //확인(true) 취소(false)
//위 문제를 푸는 학생이 문제를 틀리면 무한반복질문
//문제를 맞추면 -> alert('정답입니다!')
/* while(htmlQ != false){
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
} alert('정답입니다!')

let cssQ = confirm('flex를 설정할 때 justify-contents:space-between은 양 옆에 여백이 적용된다. 맞으면 확인, 틀리면 취소를 누르세요');

while(cssQ != false){
    cssQ = confirm('flex를 설정할 때 space-between은 양 옆에 여백이 적용된다. 맞으면 확인, 틀리면 취소를 누르세요');
} alert('정답입니다!');
let jsQ = confirm('지역변수는 함수 안에서만 쓸 수 있다. 맞으면 확인, 틀리면 취소를 누르세요')
console.log(cssQ,jsQ);
while(jsQ != true){
    jsQ = confirm('지역변수는 함수 안에서만 쓸 수 있다. 맞으면 확인, 틀리면 취소를 누르세요')
} alert('정답입니다!'); */

let num = 1;
while(num <= 10){
    if(num == 5) break; // 위치에 따라서 출력값이 달라지니 주의!!
    console.log(num);
    num++;
}

console.log('=========================continue');

for(var i=1; i<=10; i++){ //var을 넣으면 전역변수로 사용 가능
    continue;
    console.log(i);
}
console.log(i); //10까지 막히니까 10+1이 되는 숫자는 밖에서 출력이 가능하다!

console.log('--------다중반복문');
//for문 안 for문이 추가로 있는 구조(2단, 3단 반복 가능)
//첫번째 for문이 한번 실행될 때 두번째(안쪽) for문은 조건이 거짓이 될 때까지 모두 반복 실행된다.
for(let i=1; i<3; i++){ //첫번째 for문
    for(let j=0; j<2; j++){ //두번째 for문
        console.log('첫번째 i값:',i,'두번째 j값',j);
    }
}

//구구단 붙여넣기
const dan99 = document.querySelector('.dan99');
console.log(dan99);
console.log('======다중반복문 활용 구구단');
for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
        dan99.innerHTML += `${i} x ${j} = ${i*j}<br>`;
        //=만 쓰면 대입 때문에 하나만 나오게 됨. 복합대입연산자로 하기!
    }
    dan99.innerHTML += '<hr>';
    //console.log('----') //2단 for가 종료되면 구분선 표시
}
console.log('ES^ for~in');

const study = ['html','css','js'];
const abc = 'abcdefghijklmnopqrstuvwxyz';
const user = {name:'여름', age:20, area:'서울'};
console.log(study);

for(let i of study){
    //console.log(study[i]); //in으로 했을 때
    console.log(i); //of로 했을 때
}
for(let i of abc){
    console.log(i);
}
for(let i in user){
    console.log(i);
    console.log(user[i]);
}

for(let i of li){ //querySelectorAll로 생성한 다수 li 변수 접근
    console.log(i);
}