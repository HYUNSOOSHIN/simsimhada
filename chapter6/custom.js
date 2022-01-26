const title = document.getElementById("title");
console.log(title);

const frame = document.querySelector("#wrap");
console.log(frame)

const box1Element = document.querySelector("#wrap .box1");
console.log(box1Element)

const items = document.querySelectorAll('#wrap article')
for(let item of items) {
    console.log(item)
}

const parent = document.querySelector('#wrap')
const child = parent.children;
console.log(child, child[0], child[1], child[2])

const child2 = document.querySelector('.box1')
const parent2 = child2.parentElement
console.log(parent2)


// .box1 기준에서 가장 가까운 최상위 body 찾기 
const closestTest = document.querySelector('.box1')
const closestBody = closestTest.closest('body')
console.log(closestBody)

// 형제 요소 찾기
const box2 = document.querySelector('.box2')
const box1 = box2.previousElementSibling
const box3 = box2.nextElementSibling
console.log(box1,box3)



// 스타일 변경
const box = document.querySelector("#box")
box.style.height= '100px';
box.style.transform = "rotate(45deg)";

// 클릭 이벤트
const link = document.querySelector('a')
link.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log('click했음')
})

const div = document.querySelector('div')
let num = 0;

div.addEventListener('mouseenter', ()=> {
    div.style.backgroundColor = 'pink';
})
div.addEventListener('mouseleave', () => {
    div.style.backgroundColor = 'blue'
})
document.querySelector('#minus').addEventListener('click', () => {
    num--
    div.style.transform = `rotate(${num * 45}deg)`
})
document.querySelector('#plus').addEventListener('click', () => {
    num++
    div.style.transform = `rotate(${num * 45}deg)`
})


const ver = navigator.userAgent
console.log(ver)

const isIE = /trident/i.test(ver)
console.log('인터넥 익스플로어: ',isIE)