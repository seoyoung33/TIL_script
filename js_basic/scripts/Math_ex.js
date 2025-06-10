//날짜 디데이 계산기
const dDay = document.querySelector('#d_day');
const dDayBtn = document.querySelector('#d_day_btn');
const dDateResult = document.querySelector('.d_date span');
console.log(dDay,dDayBtn,dDateResult);
dDayBtn.addEventListener('click', dDayFunc)
function dDayFunc(){
    const theday = new Date(dDay.value);
    const today = new Date();
    console.log(theday,today);
    const dDayCalc = today.getTime() - theday.getTime();
    console.log(dDayCalc);
    const dDayFlow = Math.floor(dDayCalc / (1000*60*60*24));
    dDateResult.textContent = dDayFlow;
}