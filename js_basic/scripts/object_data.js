/* 25/05/15 배열공부 */
/* const yoil = ['월','화','수']; */
const yoil = new Array('월','화','수','목','금','토','일'); /* 자바스크립트의 함수를 부름.. */
/* console.log(yoil[0]);
console.log(yoil[1]);
console.log(yoil[2]); */
// ============================== 색상배열
const colorArray = ['빨강', '주황', '노랑','파랑','보라','검정','초록'];
// 콘솔 결과 예시 : 빨강 노랑 보라 초록
// 콘솔 결과 예시2 : 제가 좋아하는 색상은 주황, 파랑, 보라색입니다.
console.log(colorArray[0],colorArray[2],colorArray[4],colorArray[6]);
console.log(`제가 좋아하는 색상은 ${colorArray[1]}, ${colorArray[3]}, ${colorArray[4]}색입니다.`);
// 과일 역순으로 출력하기
const fruitArray = ['바나나','딸기','망고','사과','귤'];
console.log(fruitArray[4],fruitArray[3],fruitArray[2],fruitArray[1],fruitArray[0]);
// (위)요일배열와 새로운 날씨카드배열 활용 문자출력하기
const weatherCard = ['비','눈','맑음','흐림'];
// 목요일 날씨 : 비
// 금요일 날씨 : 맑음
console.log(`${yoil[3]}요일 날씨 : ${weatherCard[0]}`);
console.log(`${yoil[4]}요일 날씨 : ${weatherCard[2]}`);
// ============================== 객체와 배열
const movieInfo = {
    name:'미션임파서블',
    director:'크리스토퍼 맥쿼리',
    genre:'액션',
    rating:169,
    actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
    releaseDate:'2025.05.17',
    age:15,
    story:'전 세계 국가와 조직의 기능이 마비되고...',
}
const movieInfo_v2 = {
    name:'릴로 & 스티치',
    director:'딘 플레이셔-캠프',
    genre:'애니메이션',
    rating:107,
    actor:['크리스 샌더스','마이아 케알로하','시드니 엘리자베스 아구동'],
    releaseDate:'2025.05.21',
    age:'전체관람가',
    story:'2025년 웃음과 감동 가득한 귀염 폭발 어드벤처로 돌아오다!',
}
// 동일한 분류의 객체가 많을 경우 묶는 방법
const movieAll = [ /* DB공간 (데이터베이스) */
    {
        name:'미션임파서블',
        director:'크리스토퍼 맥쿼리',
        genre:'액션',
        rating:169,
        actor:['톰 크루즈','헤일리 앳웰','빙 라메스'],
        releaseDate:'2025.05.17',
        age:15,
        story:'전 세계 국가와 조직의 기능이 마비되고...',
    }, {
        name:'릴로 & 스티치',
        director:'딘 플레이셔-캠프',
        genre:'애니메이션',
        rating:107,
        actor:['크리스 샌더스','마이아 케알로하','시드니 엘리자베스 아구동'],
        releaseDate:'2025.05.21',
        age:'전체관람가',
        story:'2025년 웃음과 감동 가득한 귀염 폭발 어드벤처로 돌아오다!',
    },
]
console.log('=================');
/* console.log(movieAll); */
console.log(movieAll[0].name);
console.log(movieAll[0].releaseDate);
console.log(movieAll[0].story);
console.log('=================');
console.log(movieAll[1].name);
console.log(movieAll[1].releaseDate);
console.log(movieAll[1].story);
console.log('=================');
//감독 : 크리스토퍼 맥쿼리
//장르 : 액션 / 169분
//등급 : 15세 이상 관람가
console.log(`감독 : ${movieAll[0].director}`);
console.log(`장르 : ${movieAll[0].genre} / ${movieAll[0].rating}분`);
console.log(`등급 : ${movieAll[0].age}세 이상 관람가`);
// ============================== 산술 연산자
const greeting = 'hello';
const lang = ['figma','html','css'];
// hello figma
console.log(greeting+' '+lang[0]); /* 데이터를 가진 변수를 만들고 그 데이터를 가진 변수를 출력해야 한다. */
console.log(greeting+' '+lang[1]); 
console.log(greeting+' '+lang[2]); 
const num1 = 1;
const num7 = 7;
const global = 'world';
console.log(num1+num7);
console.log((num1+num7)+global);
// ============================== 빼기, 곱하기, 나누기 등 연산은 숫자가 문자로 따옴표가 묶여있을 시 자동으로 숫자로 형변환시킨다.
const data1 = 1;
const data7 = "7";
console.log(data1+data7); /* 결과 : 17. 더하기 연산자는 숫자+문자=문자로 인식! */
console.log(data1-data7); /* 결과 : -6. 빼기, 곱하기, 나누기 등 연산은 문자가 자동으로 숫자로 형변환! */
console.log(data1/data7); /* 결과 : 0.14... */
console.log(data7*data1-data1); /* 결과 : 6 */
console.log(data1**data7); /* 결과 : 1 */
console.log(data7**data1); /* 결과 : 7 */
console.log(data1**data7);/* 결과 : 1 */
console.log(data7%data7); /* 결과 : 0 */
console.log(typeof data7);
console.log(typeof data1);
console.log(typeof (data1+data7));
console.log(typeof (data1-data7));
console.log(typeof ((data1-data7)+data7));
console.log(typeof (data1/data7));