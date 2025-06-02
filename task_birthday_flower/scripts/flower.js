//
console.log(birthdayFlower[0].month);
console.log(birthdayFlower[0].flower);
console.log(birthdayFlower[0].content);
//변수
const userMonth = document.querySelector('input[name*=month]');
const resultBtn = document.querySelector('#result_btn');
const total = document.querySelector('#result_text');
console.log(userMonth,resultBtn,total);
resultBtn.addEventListener('click',birthdayFunc);
function birthdayFunc(){
    //if(userMonth.value == 1||2||3||4||5||6||7||8||9||10||11|12){
    if(userMonth.value >= 1 && userMonth.value <= 12){
        total.textContent = `${birthdayFlower[userMonth.value-1].month}월의 탄생화는 ${birthdayFlower[userMonth.value-1].flower}, 꽃말은 ${birthdayFlower[userMonth.value-1].content}입니다.`
    }
    /* if(userMonth.value == 1){
        total.textContent = `${birthdayFlower[userMonth.value-1].month}월의 탄생화는 ${birthdayFlower[userMonth.value-1].flower}, 꽃말은 ${birthdayFlower[userMonth.value-1].content}입니다.`
    }
    if(userMonth.value == 2){
        total.textContent = `${birthdayFlower[userMonth.value-1].month}월의 탄생화는 ${birthdayFlower[userMonth.value-1].flower}, 꽃말은 ${birthdayFlower[userMonth.value-1].content}입니다.`
    } */
}