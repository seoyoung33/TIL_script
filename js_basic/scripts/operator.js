// 연산자 25/05/16
// 증감 연산자 (단항)
let a = 1;
let b = 10;
// console.log(a,b); //1,10 (초기값)
// b = ++a; //2,2 ('a를 1 증가해라', '증가된 a를 b에 대입해라')
b = a++; //'a를 먼저 b에 대입하고, a에 1을 증가해라'
// console.log(a,b); 
a = --b;
// console.log(a,b); // b가 a의 대입을 받아서 1로 변경되었었는데, --b를 통해 1을 빼게 되서 0이 됨. 그 값을 a에 대입한 것이기 때문에 a도 동일하게 0이 됨.
// ======================= 단항연산자 예제 2
let x = 5;
let y = x+1; // ++x는 1증가된 x값을 대입받는 y변수. 근데 consol.log로 값을 보면 x값도 바뀐 6,6이 나오기 때문에 'x+1'로 적어주면 5,6이 된다.
// 증감연산은 x변수 자체에 영향을 주기 때문에 일회성 더하기 연산으로 +1을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다.
console.log(x,y); // 결과 : 5 6
y = x++;
console.log(x,y); // 결과 : 6 5
x = ++y;
console.log(x,y); // 결과 : 6 6
x++;
console.log(x,y); // 결과 : 7 6
--y; // 증감 연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x,y); // 결과 : 7 5
x+1; // 더하기, 빼기, 곱하기, 나누기 등 일반 산술연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다.
console.log(x,y); // 결과 : 7 5
//  ======================= 증감연산자 연습문제
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
console.log(num1, num2, num3, num4);
//(위) num1, num2, num3, num4의 값은? 10 20 30 40
num1++;
num2--;
num3++;
num4--;
console.log(num1, num2, num3, num4);
//(위) num1, num2, num3, num4의 값은? 11 19 31 39
num1 = ++num2; // 20 20
num2 = num1++; // 20 21 => 결과 : 21 20 오답풀이 : num1이랑 num2 위치를 잘못 적었다!!!!!으악ㅠ
console.log(num1, num2, num3, num4);
//(위) num1, num2, num3, num4의 값은? 21 20 31 39
num3 = num1+num2; // ? = 20+21 => ? = 41
num4 = ++num3; // ? = 41+1 => 42
console.log(num1, num2, num3, num4);
//(위) num1, num2, num3, num4의 값은? 21 20 42 42
num1 = ++num3 + 10; // ? = 42+1+10 => num1은 53, num3은 42+1=43
num2 = --num4 + 1; // ? = 42-1+1 => num2는 42, num4는 42-1=41
console.log(num1, num2, num3, num4);
//(위) num1, num2, num3, num4의 값은? 53 42 43 41
//  ======================= 복합대입연산자
console.log('==============');
let number = 10;
//number = 15; //기존값을 제거하고 단순 새로운 값 삽입 X !!
//number = 5; // 위와 동일
// number = number + 5; // 기존값을 유지하고 원하는 계산 추가 O (이게 맞음!)
// console.log(number); // 15
number += 5; // 더하기복합 대입활용(위와 결과 동일)
console.log(number); // 15
number -= 5; // 빼기복합 number = number-5;
console.log(number); // 10
number *= 5; //곱하기복합 number = number*5;
console.log(number); //50
number /= 5; //나누기복합 number = number/5;
console.log(number); //10
number %= 5; //나머지복합 number = number%5;
console.log(number); //0