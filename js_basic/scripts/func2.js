/* func2.js */
let b = 20; // {}안에 들어가지 않았으니 전역변수!
let c = 30; // (위) = 전역변수 (블록{}밖)
function test(){ //블록선언 (여기부터 지역스코프 시작 선언)
    let a = 10; // = 지역변수 (블록{}안) (= 블록{} 안에 있으니 지역변수)
    console.log(a+b); //함수만 만드는 것만으로는 값이 실행되지 않는다. (-> 사람이 작동을 안하면 키오스크가 작동안한다.)
} // 블록 종료 (=지역 종료)
test(); // 함수 밖에서 함수호출을 해줘야 확인할 수 있다. (-> 사람이 밖에서 와서 버튼을 눌렀을 때 작동한다.)
// console.log(a); // 지역변수는 전역에서 호출하면 에러난다. 반드시 함수 호출을 해줘야 확인이 가능하다!
// console.log(a+b); // 위와 동일 에러
console.log(b+c); //순차적으로 위에서 이미 에러가 나면 아래부분이 정상(=전역변수)이더라도 에러가 뜬다! (자주 확인하기!!!)
console.log('-----------------------------------------');
let d = 5; //전역변수
let e = 15; //전역변수
let f; // 전역변수로 우선 변수를 생성하고 함수안에서 값을 만들게되면 console.log로 확인이 가능하다!
let g; // (위 동일) 전역변수 생성 (값 선언 안된 상태 undefined)
console.log(f); //결과값:undefined. 함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다.
function scopeTest() { // 함수 호출 전 대기상태의 함수 생성 구조
    f = 25; //지역변수
    g = 35; //지역변수
    console.log(d+f); //정상이지만 터미널에서 x 결과값:5+25=30
    console.log(e+g); //정상이지만 터미널에서 x 결과값:15+35=50
}
scopeTest(); //호출값은 함수의 위, 아래 위치 상관없이 불러낼 수 있다! 만약 함수값 위에서 먼저 호출되었다면 그 값을 먼저 확인할 수도 있다.
console.log(f); // 결과값:25
console.log(g+d); // 결과값:35+5=40
console.log(d+e); //위 에러가 있다면 x, 위 에러가 없다면 o 결과값:5+15=20
console.log('-------------------------------------');
let x = 1; // 전역변수
let y; //전역변수
func1() // 1+5=6
// 헨젤과 그레텔에서 생각해보기
//func1은 돌멩이, func2는 집으로 돌아온다는 목표!
function func1(){ // 함수 대기 상태 func1
    y = 5; // 전역변수에서 y의 값을 먼저 선언했으니 함수에서는 값만 적어줘야 한다!
    console.log(x+y);
}
function func2(){ // 함수 대기 상태 func2
    let z = 10; // 지역변수 생성과 값 대입
    func1(); // 결과값:6 , func2함수대기 안 func1 함수 호출 (func2대기상태로 실행되지 않음)
    console.log(x+y+z);
}
func2();// 결과값:16 , func2 함수 호출 (func2 안 func1도 함께 절차에 맞게 실행)
console.log('-----------------------------헨젤과 그레텔 알고리즘');
function storyFunc1(){
    let person = ['헨젤','그레텔'];
    let src = '조약돌';
    // 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
}
function storyFunc2(){
    let person = ['헨젤','그레텔'];
    let src = '빵부스러기';
    // 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다.`)
}
storyFunc1();
storyFunc2();
console.log('-----------------------------헨젤과 그레텔 알고리즘-매개변수');
function storyFunc(src){ //매개변수 src 생성 (var,let 등으로 다시 묶을 필요가 없다.)
    let person = ['헨젤','그레텔'];
    // let src = '빵부스러기';
    // 헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    // 헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다.`) //src 출력.실행
}
storyFunc('조약돌'); //매개변수에 데이터(대입값)를 넣으면 자동으로 처리된다! src 대입
storyFunc('빵부스러기');
console.log('-----------------------------커피 레시피(기본값 포함)');
// 1. function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
// 2. function coffeeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
// 3. function coffeeFunc1(data1, data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
// ex)
// function coffeeFunc1(data1){}
// coffeeFunc1(10);
// (위)프로그래밍해석 : 함수를 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성 완료. 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
// ex)
// function coffeeFunc1(data1){실행함수+매개변수data1활용}
// coffeeFunc1(10);
// 4. 매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다.
// 5. 매개변수 사용 시 호출할 때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 한다. => function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1, data2=0.5){ //기본값을 적을거면 '=값'을 적어주면 된다.
    let water = `${data1}컵 물을 채운다`; //1안
    let espresso = data2+'샷 에스프레소를 넣는다'; //2안
    console.log(water,espresso); // 문장을 합쳐서 만들수도 있지만 보기 좋게 데이터를 나눠서 만드는 것이 유지보수적으로 좋다!
}
coffeeFunc1(); //값을 따로 안적으면 기본값 설정한대로 뜬다. but,기본값을 설정하지 않고 그냥 적으면 에러가 뜨니 주의하기!
coffeeFunc1(4, 2);
coffeeFunc1(3, 0.5);
//====================커피주문 알고리즘(고객입장)
console.log('-----------------------------커피주문 알고리즘-실습');
function coffeeMenu(data1,data2=1){
    let menu = data1
    let cup = data2+'잔 주문완료되었습니다.'
    console.log(menu,cup);
}
coffeeMenu('카페라떼',);
coffeeMenu('아메리카노',2);
coffeeMenu('녹차라떼',);
coffeeMenu('아메리카노',4);
console.log('-----------------------커피주문 알고리즘-선생님답안');
function coffeeMenu2(menu,cup=1){
    const msg = '잔 주문완료되었습니다.'
    console.log(menu,cup,msg);
}
coffeeMenu2('카페라떼'); // 기본값이라 두번째 매개변수 생략
coffeeMenu2('아메리카노',2); //기본값이 아리나 매개변수 모두 작성
coffeeMenu2('녹차라떼');
coffeeMenu2('아메리카노',4);
console.log('-----------------------커피주문 알고리즘 활용');
function coffeekiosk(tmp,menu,num=1){
    const msg = '잔 주문완료되었습니다.';
    const type = ['따뜻한','차가운'];
    console.log(type[tmp],menu,num,msg);
}
coffeekiosk(0,'카페라떼');
coffeekiosk(1,'아메리카노',2);
coffeekiosk(0,'녹차라떼',2);
coffeekiosk(1,'아메리카노');
console.log('-----------------------함수의 리턴(return)');
// 더하기 알고리즘
// 함수 내부 {}는 대기장소로 호출하지 않는 한 절대 실행되지 않는다.
// 함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행할 수 있는 위치다.
// 함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다. 
function plusFunc(num){
    let total = num+1;
    return total; //리턴이 있어서 밖에서 함수를 통해 값을 보여줄 수 있다. 리턴으로 실행함수가 아닌 값만 보냈다면?
    // console.log(total);//실행되기 위해서는 함수가 실행되어야 한다!
}
// plusFunc(110);
// 호출할 때 리턴이 보낸 반환값을 묶어주는 실행함수를 별도로 작성한다.
console.log(plusFunc(2));
console.log('----------------------구구단 알고리즘(리턴과 매개변수 활용- 실습');
/* let dan99 = 5;
function dan99Func(num){
    let dan1 = `${dan99}x${num}=${dan99*num}`
    return dan1;
}
console.log(dan99Func(1),dan99Func(2),dan99Func(3),dan99Func(4),dan99Func(5),dan99Func(6),dan99Func(7),dan99Func(8),dan99Func(9)); */
console.log('----------------------구구단 알고리즘(리턴과 매개변수 활용- 선생님 답안)');
let dan99 = ''; // 전역변수(초기값) 앞으로 문자데이터가 들어올 에정으로 빈문자 초기값
function dan99Func(num){
    dan99 = `${num}x1=${num*1} / `
    // dan99 = dan99 + `${num}x2=${num*2} / `
    // 기존 dan99에 우측 데이터를 더해서 대입해라. 문자라서 추가추가 가능!
    dan99 += `${num}x2=${num*2} / `
    dan99 += `${num}x3=${num*3} / `
    dan99 += `${num}x4=${num*4} / `
    dan99 += `${num}x5=${num*5} / `
    dan99 += `${num}x6=${num*6} / `
    dan99 += `${num}x7=${num*7} / `
    dan99 += `${num}x8=${num*8} / `
    dan99 += `${num}x9=${num*9} / `
    return dan99;
}
//dan99Func(2); // 구구단 2단
console.log(dan99Func(2));
console.log('----------------------구구단 알고리즘(할인율 계산기- 실습)');
// 27900원을 입력했을 때(가격은 달라질 수 있음)
// 입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율 동시출력
// 10% 할인율 계산법 : 가격 * 0.9
// 4% 할인율 계산법 : 100-4=96 -> 가격 * 0.96
let discountResult = '';
function discount(price){
    discountResult = `${price}원의 5% 할인가 ${price*0.95}원 / `
    discountResult += `${price}원의 10% 할인가 ${price*0.90}원 / `
    discountResult += `${price}원의 20% 할인가 ${price*0.80}원 / `
    discountResult += `${price}원의 30% 할인가 ${price*0.70}원 / `
    discountResult += `${price}원의 40% 할인가 ${price*0.60}원 / `
    discountResult += `${price}원의 50% 할인가 ${price*0.50}원`
    return discountResult;
}
console.log(discount(27900));