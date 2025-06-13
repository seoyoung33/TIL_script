//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다' 메세지 출력되고
const join = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
joinMsg.classList.add('hide'); //초기상태 숨기기
join.addEventListener('click',()=>{
    joinMsg.classList.remove('hide'); //요소 자체를 필요할때만 보이기 위해 클래스를 추가/삭제함
    joinMsg.textContent = '가입축하합니다'
    //3초 후 메세지 자동 사라지기
    const removeMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000);
})

//결제하기 버튼 클릭 후 '결제완료되었습니다' 메세지 출력
//메세지 출력 후 5초 뒤 timer3.html로 이동
const payBtn = document.querySelector('#pay');
const payMsg = document.querySelector('.pay_msg');
const payResetBtn = document.querySelector('#pay_reset');
let GoTimer3;
console.log(payBtn, payMsg,);
payMsg.classList.add('hide');
payResetBtn.classList.add('hide');
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide');
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되었습니다. 5초 후 광고사이트로 이동합니다.';
    GoTimer3 = setTimeout(()=>{
        window.location.href = './timer3.html'; //광고사이트
    },5000);
})

payResetBtn.addEventListener('click',()=>{
    clearTimeout(GoTimer3);
    console.log('setTimeout 이동삭제완료')
})