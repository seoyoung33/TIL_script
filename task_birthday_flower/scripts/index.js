// 알고리즘 파악하기
// 1. input[name*=month].value에 1월 ~ 12월까지의 내용을 입력
// 2. #lang_flower_btn을 누르면 '12월의 탄생화는 포인세티아이고 꽃말은 축하, 감사입니다.'의 값이 #result의 위치에 출력
// 3. 버튼 아래에서 내용 확인 가능
// 변수는 input, btn, result 3개
// 배열 1월부터 12월까지 12개
const birthdayFlower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
];
const birthMonth = document.querySelector('input[name*=month]');
const langFlowerBtn = document.querySelector('.result_btn');
const resultMsg = document.querySelector('#result_text');
const bgFlower = document.querySelector('.wrap'); //할 수 있으려나...
let flowerKind;
let langFlowerContents;
let monthMsg;
console.log(birthdayFlower,birthMonth,langFlowerBtn,resultMsg,bgFlower);
resultMsg.style.display = 'none';
//=======테스트 으악...=============
/* langFlowerBtn.addEventListener('click',function(){resultMsgOpen(1);})
function resultMsgOpen(birth){
    monthMsg = `birthdayFlower[birth].month`;
    flowerKind = `birthdayFlower[birth].flower`;
    langFlowerContents = `birthdayFlower[birth].content`
    console.log(monthMsg,flowerKind,langFlowerContents);
    if(birthdayFlower[birth].month == birthMonth.value){
        resultMsg.style.display = 'block';
    }
    console.log(`${birthMonth.value}월의 탄생화는 ${flowerKind}이고 꽃말은 ${langFlowerContents}입니다.`)
    // return resultMsg.innerHTML = `${birthMonth.value}월</em>의 탄생화는 <em>${flowerKind}</em>이고<br>꽃말은 <em>${langFlowerContents}</em>입니다.`
} */
//=========테스트 end===========
langFlowerBtn.addEventListener('click',MsgOpen);
function MsgOpen(){
    const msgContent1 = ``;
    console.log(birthdayFlower[0].month);
    console.log(birthMonth.value);
    if(birthdayFlower[0].month == birthMonth.value){
        resultMsg.style.display = 'block';
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[0].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[0].content}</em>입니다.`
    }
    if(birthdayFlower[1].month == birthMonth.value){
        resultMsg.style.display = 'block';
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[1].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[1].content}</em>입니다.`
    }
    if(birthdayFlower[2].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[2].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[2].content}</em>입니다.`
    }
    if(birthdayFlower[3].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[3].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[3].content}</em>입니다.`
    }
    if(birthdayFlower[4].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[4].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[4].content}</em>입니다.`
    }
    if(birthdayFlower[5].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[5].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[5].content}</em>입니다.`
    }
    if(birthdayFlower[6].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[6].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[6].content}</em>입니다.`
    }
    if(birthdayFlower[7].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[7].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[7].content}</em>입니다.`
    }
    if(birthdayFlower[8].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[8].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[8].content}</em>입니다.`
    }
    if(birthdayFlower[9].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[9].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[9].content}</em>입니다.`
    }
    if(birthdayFlower[10].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[10].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[10].content}</em>입니다.`
    }
    if(birthdayFlower[11].month == birthMonth.value){
        return resultMsg.innerHTML =`<em>${birthMonth.value}월</em>의 탄생화는 <em>${birthdayFlower[11].flower}</em>이고<br>꽃말은 <em>${birthdayFlower[11].content}</em>입니다.`
    }
};