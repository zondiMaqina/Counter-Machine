let count = 0;

const element1 = document.getElementById("count")

function decrement(){
	count --;

	element1.textContent = count
}

function increment(){
	count ++;

	element1.textContent = count
}

function reset(){
	count = 0;

	element1.textContent = count;
}
