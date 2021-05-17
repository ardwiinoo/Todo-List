// Variables
const addBtn = document.getElementById('addBtn');
let input = document.getElementById('userInput');
let arr = [];

function add(){
    const ul = document.getElementById('todo');
    const newLi = `<li class="list"><span class="text"> ${input.value} </span><span class="deleteBtn">×</span></li>`;
    ul.insertAdjacentHTML(`afterbegin`, newLi);
    arr.push(" ");

    input.value = " ";

    const text = document.querySelector(`.text`);
	const deleteBtn = document.querySelector(`.deleteBtn`);

    text.addEventListener(`click`, () => { text.classList.toggle(`toggleClear`); });
	deleteBtn.addEventListener(`click`, () => { deleteBtn.parentElement.remove(); arr.pop(); });
};

setInterval(() => { checkInput(); }, 100);

function checkInput() {
	if(input.value !== "") {
		addBtn.addEventListener(`click`, add);
		addBtn.removeEventListener(`click`, vibrate);
		
	}else{
		addBtn.removeEventListener(`click`, add);
		addBtn.addEventListener(`click`, vibrate);
		function vibrate() { window.navigator.vibrate(150) };
}};

function clearAll() {
	const ul = document.getElementById(`todo`);
	const list = document.querySelectorAll(`.list`);
	list.forEach((i) => { ul.removeChild(i); arr = []; });
};

const num = document.getElementById(`num`);
setInterval(() => { num.innerHTML = arr.length; }, 100);
