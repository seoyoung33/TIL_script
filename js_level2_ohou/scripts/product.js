/* 자바스크립트 동적인 알고리즘
1. 반려동물, 강아지, 강아지패션, 패딩·아우터를 누르면 각 카테고리에 해당되는 페이지로 이동
2. 썸네일의 작은 이미지에 마우스를 올리면 큰 이미지가 마우스를 올린 썸네일이미지로 변경
3. 제목 옆의 북마크를 클릭하면 로그인페이지가 뜸
4. 공유버튼을 누르면 카톡 또는 링크복사 아이콘이 뜸
5. 별점&리뷰를 클릭하면 리뷰페이지로 이동
6. 할인가격 옆에 아이콘을 클릭하면 할인안내에 대한 내용이 뜸
7. 배송 내용 중 내일출발 옆 아이콘을 클릭하면 출발 안내에 대한 내용이 뜸
8. 날짜 및 도착예정 내용을 클릭하면 도착예정일정과 퍼센트가 뜸
9. 브랜드 프로필 내용을 클릭하면 '울리' 브랜드의 판매 페이지가 뜸
10. 브랜드 프로필 옆의 북마크를 클릭하면 로그인창이 뜸
11. 색상 버튼을 눌러서 원하는 상품을 클릭하면 선택한 내용이 뜸
12. 사이즈 버튼을 눌러서 원하는 사이즈를 클릭하면 선택한 내용이 뜸
13. 장바구니, 바로구매 버튼을 클릭하면 '옵션 선택 후에 버튼을 클릭해주세요.' 경고창이 뜸
14. 옵션이 선택되었을 때 장바구니를 눌렀을 시 장바구니에 담았다는 팝업창이 뜸
15. 옵션이 선택되었을 때 바로구매를 눌렀을 시 로그인창이 뜸
*/

// ## 11. 상품 옵션 선택 시 색상 선택 후(클릭(x), 변경(o)) 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
// 색상, 사이즈 select태그 변수 선언
const colorSelect = document.querySelector('select[name=color]')
const sizeSelect = document.querySelector('select[name=size]')
const orderColor = document.querySelector('.order_select .color')
const orderSize = document.querySelector('.order_select .size')
console.log(colorSelect,sizeSelect,orderColor,orderSize);
sizeSelect.disabled = true; // 사이즈 비활성화 초기값 설정

//색상 select를 변경했을 때 이벤트 생성
/* colorSelect.addEventListener('change',changeFunc);
function changeFunc(){ //색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false; // 변경 시 사이즈 재활성화
} */

console.log('=====12번=====')
// ## 12. 색상 ->  사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// ### 12-1. 위 (12)번 진행 전 새로운 요소(.order_select) 숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none';
// ### 12-2. 위 (12)번 색상->사이즈 선택 시 새로운 요소(.order_select) 보이기
// 색상 -> 사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc);
sizeSelect.addEventListener('change',orderFunc);
function orderFunc(){
    // console.log(0); //정상확인
    console.log(colorSelect.value); // 선택한 색상 값 확인
    console.log(sizeSelect.value); // 선택한 사이즈 값 확인
    sizeSelect.disabled = false; // 사이즈 활성화
    //특정 상황에서 아래 orderSelect 출력되고 싶다면? 상황을 조건문으로 작성해야 한다.
    //orderSelect 출력 조건 -> color의 value값이 존재하는 option 선택 후 size의 value 값이 존재하는 option을 추가로 선택했을 경우
    // orderSelect.style.display = 'block'
    //조건문 연습
    //if(조건식){조건식이 참일 경우 실행되는 명령}
    //if(true){console.log('조건실행테스트')}
    console.log(Boolean(colorSelect.value));
    //사용자가 선택한 color, size의 값(value)이 모두 참일 때 조건 실행(value="" 빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block'; //주문영역 보이기
        //order_select의 color안에 선택한 colorSelect 값 대입하기
        orderColor.textContent = colorSelect.value;
        //order_select의 size안에 선택한 sizeSelect 값 대입하기
        orderSize.textContent = sizeSelect.value;
    }
}
// ## 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// ### 13-1. `-`클릭 시 수량값이 1보다 작으면 '1~9999개까지 선택 가능합니다' 메세지 출력
// ### 13-2. `+`클릭 시 수량값이 9999보다 크면 '1~9999개까지 선택 가능합니다' 메세지 출력
// ### 13-3. `-`,`+` 클릭 시 수량 범위값 안에서 1씩 감소 또는 증가
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num');
const totalPrice = document.querySelector('.order_select .price em');
let num = 1; //초기수량
let price = 39900; //초기가격
let total = 0; //수량에 따라 가격 계산하는 최종 변수
console.log(minusBtn,plusBtn,orderNum,totalPrice);

//초기 설정
//orderNum.value = num;
//증가 +버튼 클릭 시 수량이 1씩 증가되서 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++; // 증가
    if(num > 9999){alert('1~9999개까지 선택 가능합니다');}
    if(num >= 1 && num <= 9999){
        total = num * price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
minusBtn.addEventListener('click',()=>{
    num--;
    if(num < 1){
        alert('1~9999개까지 선택 가능합니다');
    }
    if(num >= 1){
        total = num * price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})

// ## 15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.close');
console.log(closeBtn);
closeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    return orderSelect.style.display = 'none';
});

const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');
console.log(cartBtn, buyBtn);
//장바구니 클릭 시 '장바구니 담겼습니다' 메세지 출력 alert()
cartBtn.addEventListener('click',cartGo) // 함수호출(함수반복)
function cartGo(){
    alert('장바구니 담겼습니다');
}
//바로구매 클릭 시 '로그인이 필요합니다' 메세지 출력
/* buyBtn.addEventListener('click',()=>{ // 화살표함수
    alert('로그인이 필요합니다');
}); */
buyBtn.addEventListener('click',function(){ //익명함수(this)
    alert('로그인이 필요합니다');
});