//시험으로 낼거니까 잘 봐!!!!

//오늘의 할일 JS 알고리즘
// =========== 등록 ===========
//1.input에 할 일을 입력
//2.등록 버튼을 누르면 (클릭 이벤트 내에서 1번 입력값 인식)
//3.span에 할일이 아래에 형제관계로 쌓이게 됨 (ul의 마지막 자식)
//★위 알고리즘 3번 작업 시 주의사항
//ul태그의 마지막 자식 위치로(appendChild) li 추가 (문자열생성'<li>'x, createElement()가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toInput, toBtn, ul);
toBtn.addEventListener('click',()=>{
    if(toInput.value == ''){//input의 값이 입력되지 않았을 경우
        //경고창으로 "입력 후 등록해야 합니다" 메세지 출력하기
        alert('입력 후 등록해야 합니다');
    }else{
        //console.log(toInput.value);
        //ul.appendChild('<li>123</li>') //node요소로 넣어야 한다!
        let li = document.createElement('li');//요소를 생성한다 = createElement
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`; //li의 내용에 toInput의 값을 대입한다
        console.log(li); //<li></li>
        ul.appendChild(li); //자식을 추가한다 = appendChild
        //입력값 초기화
        toInput.value = '';

        //등록된 할일 옆 x클릭 시 내 부모 li 제거하기
        const close = document.querySelectorAll('.del_btn'); //버튼이 여러개가 되었으니까!
        for(let i of close){
            console.log(i); //배열 형태가 아닌 객체형태로 출력되어서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove(); //내 부모노드를 제거하겠다!
            })
        }
        const spanDel = document.querySelectorAll('li span');
        /* for(let i of spanDel){
            console.log(i);
            i.addEventListener('click',()=>{
                i.style.textDecoration = 'line-through';
            })
        } */
            for(let i of spanDel){
                console.log(i);
                i.addEventListener('click',()=>{
                    i.parentNode.style.textDecoration = 'line-through';
                })
            }
    }//조건문 else(거짓) 사용자가 값을 입력했을 때 블록 위치
})//toBtn 이벤트 종료(블록)위치