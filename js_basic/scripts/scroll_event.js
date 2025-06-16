//스크롤 이벤트 문법
//window.addEventListener('scroll',()=>{실행결과})
const bottom = document.querySelector('.bottom') //이벤트 안에 써도 되지만 if안에는 쓰지말기!!
console.log(bottom);

//검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true); //문서안에 폼을 자식,자손까지 복제하여 대입하겠다!!(선언+복사)
let isSearchClone = false; //안보이면 false, 보이면 true

window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    //1.스크롤 이벤트에 따라 헤더 디자인 변경
    if(window.scrollY > 100){
        bottom.classList.add('active');
        bottom.appendChild(searchClone);
        isSearchClone = true;
    }else{
        if(isSearchClone){//(위)else 100보다 작으면 바로 실행하지 않고 이중검사 후 실행
            bottom.classList.remove('active');
            bottom.removeChild(searchClone);
            isSearchClone = false;
        }
        //bottom.classList.remove('active');
        //bottom.removeChild(searchClone);
        //(오류 뜨는 이유)100보다 작으면 삭제하라고 하긴했지만 새로 생성한 값이기 때문에 일정 값이 되면 지울게 없는데 뭘 지워? 하는거임
    }

    //2.스크롤 이벤트에 따라 맨위로 디자인 변경
    //맨위로 숨기기
    //스크롤 위치가 500보다 크면 맨 위로 보이기 (반대면 숨기기)
    //맨 위로 클릭하면 스크롤 y 0위치로 올리기
    const topBtn = document.querySelector('#top');
    topBtn.addEventListener('click',(e)=>{
        //a태그 특성상 링크로 바로 올라가는 기능이 있기 때문에 특성을 없애줘야한다.
        e.preventDefault(); //태그의 기본이벤트 막기
        window.scrollTo({left:0, top:0, behavior:'smooth'});
    })
    if(window.scrollY > 500){
        //topBtn.style.display = 'block';
        topBtn.style.opacity = '100';
    }else{
        topBtn.style.opacity = '0';
    }
}) //스크롤 이벤트 종료