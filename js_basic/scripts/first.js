// 변수
// var 변수명 = 대입값;
// var 변수선언키워드
// = 대입연산자(오른쪽에서 왼쪽으로 값 대입)
var num; // num 변수생성
num = 1; // 1을 num에 대입한다(변수에 값 대입)
var num2 = 2; // num2라는 변수 추가생성하여 2를 대입한다. (생성과 대입)
// 콘솔 실행 함수
// console.log(num); // console에 log라는 함수를 사용하여 ()안에 들어가는 값 num을 실행하고 싶다.
// 객체.함수(실행하는값);
// 콘솔창(객체)에 num2변수값을(실행걊) 로그로 출력(실행함수)하겠다
// console.log(num2);
// =================================================================================== 2일차 25/5/13
var bowl;
bowl = '쌀';
// console.log(bowl); /* 변수라는 그릇 안에는 하나의 값만 들어갈 수 있다. 기존 데이터는 삭제된다. */
bowl = '콩'; /* 콘솔 로그로 먼저 확인한다면, 순차적으로 확인하기 때문에 최종결과와 다르게 절차 순서대로 '쌀'을 인식해서 보여주게된다. */
// console.log(bowl);
// 자바스크립트는 절차적 언어이기 때문에 CSS처럼 우선순위에 따라 최종 결과값만 인식하는 것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식할 수 있다.
var a = 1;
var b = 5;
var c = 10;
// a = b; // 문자 b가 아닌 변수 b를 a에 대입한다. == 변수값을 대입한다.(a의 값이 b와 같아짐.)
c = a;
console.log(a); // b의 값을 받기 전에 a의 기존값이 출력
a = b; // (위)a의 값이 먼저 출력되었기 때문에 a는 a의 값을 보존하고 b의 값으로 변하지 않는다.
console.log(b);
b = c;
console.log(c); // 먼저 출력된 값을 확인하기!
// ============ 자료형 구분 내장함수 typeof
// console.log(typeof a) // a의 데이터가 뭔지 알려주는 것. a에 들어간 값이 숫자이기 때문에 number로 들어가게 된다.
// console.log(typeof (b));
console.log('============데이터공부') // console로 구분을 만들어줄수도 있다.
var d;
console.log(typeof d); //값이 할당되지 않는 상태 undefined (오류점검용)
d = a;
console.log('d의 값은 = ' + d); //'d의 값은', d (따옴표 붙으면 문자, 안붙으면 변수임. ','또는 '+'가 꼭 있어야 함)
console.log('a의 값은 => '+a);
console.log('a의 값은 : '+a);
console.log('b의 값은'+b);
console.log('c의 값은',c);
console.log('---------------');
console.log(1+1); // 숫자+숫자 = 더하기결과 2
console.log('1'+1); // 문자+숫자 = 연결결과 11
console.log('---------------');
var box1 = 10;
var box2 = 'hello';
var box3 = 'javascript';
var box4;
console.log('box1='+box1+', box1은 '+typeof box1+'타입이다.'); //box=10, box1은 number 타입이다.
console.log(box2 + ' ' + box3 + '는 '+ typeof(box2+box3) + '입니다!'); //hello javascript는 String입니다!
console.log(box4); //undefined 정의안된상태(오류)
box4 = box2+box3;
console.log(box4); // hellojavascript (순차적으로 읽기 때문에 위에은 undefined, 아래는 hellojavascript)
// box4 = null; //값 제거(데이터 삭제)
// box4 = 0; //숫자 초기화(데이터 타입 유지)
box4 = ''; //문자 초기화(데이터 타입 유지)
console.log(box4);
console.log(box4.length); //hello의 문자 개수는? 쇼핑몰에서 리뷰 글자수 확인할때 사용함.
//객체.속성;
//객체.함수();
console.log('---------------');
var num1 = 10;
var num2 = 20;
var num3 = 0;
var total; // 결과 변수(위 데이터 변수들이 최종 대입될 대상)
console.log(num1, num2, num3); //10 20 0
console.log(num1 + num2 + num3); // 30 (유지보수 ↓)
total = num1 + num2;
console.log(total); // 30 (유지보수가 좋음)
console.log("she's gone") //she's gone
console.log('---------------');
console.log('1+1은 '+(1+1)+'입니다.') //1+1은 2입니다.
//일반 문자와 프로그래밍식을 쉽게 작성할 수 있게 하는 템플릿문자열 활용
console.log(`1+1은 ${1+1}입니다.`);
var num4 = 1;
var num5 = 2;
// 변수 num4의 값은 1입니다
// num4와 num5의 더한 결과값은 3입니다.
console.log(`변수 num4의 값은 ${num4}입니다`);
console.log(`num4와 num5의 더한 결과값은 ${num4+num5}입니다.`);
console.log('---------------');
var subway = 2500;
var coffee = 3000;
var result = subway + coffee;
console.log(result);
// 오늘 총 지출액은 ?원입니다.
console.log(`오늘 총 지출액은 ${result}원입니다.`);
console.log('---------------구구단');
var dan99 = 2;
// 2x1=2
// ...
// 2x9=18
console.log(`${dan99}x1=${dan99*1}`);
console.log(`${dan99}x2=${dan99*2}`);
console.log(`${dan99}x3=${dan99*3}`);
console.log(`${dan99}x4=${dan99*4}`);
console.log(`${dan99}x5=${dan99*5}`);
console.log(`${dan99}x6=${dan99*6}`);
console.log(`${dan99}x7=${dan99*7}`);
console.log(`${dan99}x8=${dan99*8}`);
console.log(`${dan99}x9=${dan99*9}`);