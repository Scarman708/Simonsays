
let start =false;
let level = 0;
let button=["red","yellow","green","blue"]
let gameSeq=[];
let userSeq=[];
let h2= document.querySelector("#content");

document.addEventListener("keypress", function(){
if(start == false){
	console.log("key pressed");
	start = true;
	levelup();
	}
});


function flashbtn(btn){
btn.classList.add("flash");
setTimeout(function(){
	btn.classList.remove("flash");
}, 500)
}

function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
	btn.classList.remove("userflash");
}, 500)
}

function levelup(){
	userSeq= [] ;
	level++;
	h2.innerText = `level ${level}`;
	let rand= Math.floor(Math.random() * button.length);
	let randomColor=button[rand];
	let randomBtn= document.querySelector(`.${randomColor}`);
	// console.log(randomBtn);
	// console.log(rand);
	// console.log(randomColor);
	gameSeq.push(randomColor);
	console.log(gameSeq);
	flashbtn(randomBtn);
}
function btnPress(){
	let btn= this;
	userflash(btn);
	userColor= this.getAttribute("id");
	// console.log(userColor);
	userSeq.push(userColor);
	checkseq(userSeq.length-1);
}

function checkseq(index){
	// let index= level-1;
	if (userSeq[index] === gameSeq[index] ) {
		if (userSeq.length === gameSeq.length) {
			setTimeout(levelup,1000);
		}
	}else{
		// h2.innerHTML=`Game Over!!! Your Score was <mark><b>${level}</b></mark> <br> Press any key to restart`;
		showModal(`Game Over!!! Your Score was <b><mark>${level}</mark></b>`);
		// reset();

	}
}

function showModal(message) {
  const modal = document.getElementById("gameOverModal");
  const modalHeader = document.getElementById("modalHeader");
  modalHeader.innerHTML = message;
  modal.style.display = "block";
}


let btns= document.querySelectorAll(".boxbtn");
for (btn of btns){
	btn.addEventListener("click", btnPress);
}


let resetbtn= document.getElementById("restartButton");
resetbtn.addEventListener("click", function() {
  reset();
	console.log("reset run");    
  closeModal();  
});

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("gameOverModal");
  modal.style.display = "none";  // Hide the modal
}

function reset (){
	console.log("reset");
	start= false;
	gameSeq=[];
	userSeq=[];
	level = 0;
	 h2.innerText = `Press any key to start the game`; 
}



const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
});