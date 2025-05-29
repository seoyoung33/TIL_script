// 프로젝트소개 팝업 알고리즘
// 1. 최초 팝업 숨기기
const popupBg = document.querySelector('.popup_bg');
const thumbnailA = document.querySelectorAll('.design a');
console.log(popupBg,thumbnailA);
popupBg.style.display = 'none';
// 2. 썸네일 이미지 클릭 시 팝업 오픈
// 변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할 때는 인덱스를 사용해서 하나씩 개별접근해야 한다.
thumbnailA[0].addEventListener('click',function(){
    //console.log(0); //작동테스트
    console.log(this);//이벤트객체자동인식하는지 확인
    console.log(this.children[0].src);//자식이 많아질 수 있으니 꼭 인덱스(순서)적기!!!
    console.log(popupBg.children[0].children[0].src);//팝업 bg의 자식의 자식의 src확인
    popupOpen(this); //팝업 출력함수 호출
    //(위)대입되는 위치(popup자식의자식의 src에 대입하겠다.) = 대입되는 값(내 자식의 src를)
})
thumbnailA[1].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[2].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
    popupBg.children[0].children[0].src = this.children[0].src
});
thumbnailA[3].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[4].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[5].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[6].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[7].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[8].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[9].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[10].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
thumbnailA[11].addEventListener('click',function(){
    popupOpen(this); //팝업 출력함수 호출
});
function popupOpen(target){
    console.log('-------------------------함수시작 위치 에러체크');
    console.log(popupBg.children[0]); //정상체크
    console.log(popupBg.children[0].children[0]); //정상체크
    //console.log(this.children[0]); //에러체크!!
    popupBg.style.display = 'flex';
    popupBg.children[0].children[0].src = target.children[0].src
    // popupBg.children[0].children[0].src = this.children[0].src //이벤트 내에서 함수로 불러오는 구조로 작성해야 함.
    return; //함수종료
}
// 3. (팝업실행기준) 배경클릭 시 팝업 다시 숨기기
popupBg.addEventListener('click',popupClose);
function popupClose(){
    return popupBg.style.display = 'none';
}
// 4. 다른 이미지 클릭 시 팝업 다시 오픈(프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘)
//1. 클릭한 대상의 이미지 경로 확인
//2. 위 경로를 팝업 이미지의 경로에 대입