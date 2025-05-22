// 인스타그램 알고리즘
// 1. 프로필 클릭 시 개인프로필 페이지로 이동기능 (o)-페이지제작필요

const profileDOM = document.querySelector('.profile');
console.log(profileDOM);
profileDOM.addEventListener('click',profileGo);
function profileGo(){
    /* return window.open('insta_profile.html','_blank'); */     //페이지 추가 생성
    return window.location.href = 'insta_profile.html';          //상대경로로 추가생성x
}

// 2. 우측 메뉴 클릭 시 저장, 즐겨찾기, 신고 등의 기능 실행 (o)-저장~신고기능제작필요
// 3. 이미지 한번 터치 시 반응 없음 (x-js 없음)
// 4. 이미지 두번 터치 시 좋아요 자동등록 (o)

const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img')
console.log(photo);
console.log(likeImg.src);
// 객체.속성 // 속성읽기
// 객체.속성=값 // 속성 값 변경
photo.addEventListener('dblclick',likeOn)
function likeOn(){
    /* console.log('test'); */
    return likeImg.src = 'images/icons/like_on.png'
}

// 5. 좋아요 버튼 한번 터치 시 하트 색상이 변경(o), 다시 터치 시 좋아요 해제 (x)-조건문공부필요
// 이미지 더블클릭 하기 전 기준

// likeImg.addEventListener('click',likeOn); // 위에 다 있으니까 굳이 더 안만들고 이벤트만 만들면 된다!
// (위) likeImg 클릭 시 실행되는 콜백함수
// (아래) likeImg 객체가 a태그로 클릭 시 새로고침되어서 스크롤이 위로 올라가는 문제 해결을 위한 방법
// 콜백함수 호출이 아닌 익명함수 또는 화살표함수 이용 필수
// 익명함수 또는 화살표함수로 작성 시 이벤트 앞 객체정보가 함수의 매개변수로 자동으로 대입된다.
// 위 매개변수가 받은 정보를 확인하려면 매개변수에 변수명(e)을 작성하고 console.log()로 확인할 수 있다.
likeImg.addEventListener('click',function(e){
    // console.log(e);
    e.preventDefault(); //태그의 동적기능 취소 (a태그 새로고침)
    likeOn(); // 클릭되었을 때 명령내리는 자리에 함수가 익명으로 생성되었기 때문에 따로 안만들고 바로 안에다가 ()를 붙여서 넣어주면 된다!
}); //익명함수

// 6. 댓글 버튼 클릭 시 댓글 작성 입력창이 실행(o)-제작필요, 실행화면에서 바깥쪽 영역 터치 시 댓글 입력창 닫힘(o)
// 7. 공유 버튼 클릭 시 공유할 대상 목록이 하단에서 올라옴(o)-제작필요, 바깥쪽 영역 터치 시 댓글 입력창 닫힘(o)
// 8. 저장버튼 클릭 시 저장됨과 동시에 컬렉션 선택 화면(x)-DB필요, 바깥쪽 영역 터치 시 댓글 입력창 닫힘(o)
// 9. 글 1줄, 날짜만 미리 표시, 글 터치 시 전체 내용(나머지 글 줄과 해시태그 포함) 펼치기(o)

const storyDOM = document.querySelector('.story');
const dateDOM = document.querySelector('.date');
const tagDOM = document.querySelector('.tag'); // 태그 순서 중요!
console.log(storyDOM,dateDOM);
// 함수를 생성하지 않고 바로 작성한 이유? 반복이 아니고 즉시 실행되기 때문!
tagDOM.style.display = 'none'; //스타일!!!!!!!!! 기존에 숨겨져있음! 
// 글 클릭 시 태그 표시
storyDOM.addEventListener('click',openTag);
function openTag(){
    tagDOM.style.display = 'block';
}

// 10. 각 태그 클릭 시 해당 태그 관련 게시물 검색 페이지로 이동 (o)

console.log(tagDOM);
tagDOM.addEventListener('click',tagPageGo);
function tagPageGo(){
    return window.location.href = 'insta_tag.html'
}
// 별도의 동적 기능 없이 단순한 링크만 있는 경우는 js 없이 a태그에 링크걸기
// 동적기능 예) 해외IP접속차단, 동일IP접속차단, 성인사이트접속인증, 로그인에 따른 접속가능 페이지일 경우 로그인 유무 확인 등

// 11. 날짜 기능 없음 (x js없음)
// 추가페이지 목록
// 개인프로필페이지(insta_profile.html), 저장~신고기능, 댓글입력창, 공유할 대상목록, 컬렉션 선택 화면, 태그관련 게시물 페이지(insta_tag.html)