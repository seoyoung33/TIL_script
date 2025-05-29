/* thum4에 마우스를 올렸다 -> bic이미지의 src 속성값이 big4 변경 */
const thumNails = document.querySelectorAll('.small a');
const bigThum = document.querySelector('.big img');
console.log(thumNails, bigThum);
//콘솔 확인 시 1개의 DOM요소가 아닌 [index]표시된 여러개 DOM요소로 출력될 때는 실제 사용 시 요소[index]를 붙여서 사용해야 한다.
//thum2에 마우스 올렸을 시 big 이미지가 big2로 변경
//순서별로 할거같으면 익명함수로 넣어주기!
/* thumNails[0].addEventListener('mouseover',function(){bigThumSrc(1)}); 
thumNails[1].addEventListener('mouseover',function(){bigThumSrc(2)});
thumNails[2].addEventListener('mouseover',function(){bigThumSrc(3)});
thumNails[3].addEventListener('mouseover',function(){bigThumSrc(4)});
thumNails[4].addEventListener('mouseover',function(){bigThumSrc(5)});
function bigThumSrc(num){
    // return bigThum.src = './images/big'+num+'.jpg'
    return bigThum.src = `./images/big${num}.jpg`
} */

//테두리 활성화 추가 ver
//첫번째 썸네일 활성화 디자인 css
thumNails[0].style.border = '3px solid #0aa5ff';
thumNails[0].addEventListener('mouseover',function(){bigThumSrcBoder(1, this);})
thumNails[1].addEventListener('mouseover',function(){bigThumSrcBoder(2, this);})
thumNails[2].addEventListener('mouseover',function(){bigThumSrcBoder(3, this);})
thumNails[3].addEventListener('mouseover',function(){bigThumSrcBoder(4, this);})
thumNails[4].addEventListener('mouseover',function(){bigThumSrcBoder(5, this);})
function bigThumSrcBoder(num, target){
    // 사용자가 마우스 올리는 순서를 정의할 수 없기 때문에 전부 초기화 기준으로 설정
    thumNails[0].style.border = '0'
    thumNails[1].style.border = '0'
    thumNails[2].style.border = '0'
    thumNails[3].style.border = '0'
    thumNails[4].style.border = '0'
    //현재 마우스 올린 작은썸변수에 테두리 생성(this(현재이벤트대상)활용)
    target.style.border = '3px solid #0aa5ff';
    return bigThum.src = `./images/big${num}.jpg`
}