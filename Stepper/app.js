const prev=document.getElementById('prev');
const nxt=document.getElementById('nxt');
const finish=document.getElementById('finish');
const content=document.getElementById('content');
const bullets=document.querySelectorAll('.bullet');
const frm=document.querySelectorAll('form');

const max_step=4;
let curr_step=1;

nxt.addEventListener('click',()=>{
const curr_bullet=bullets[curr_step-1];

curr_bullet.classList.add('completed');
curr_step++;
prev.disabled=false;
if(curr_step===max_step){
	nxt.disabled=true;
	finish.disabled=false;
}
content.innerText=`Step Number ${curr_step}`;
});

prev.addEventListener('click',()=>{
	const prev_bullet=bullets[curr_step-2];
	prev_bullet.classList.remove('completed');
	curr_step--;
	nxt.disabled=false;
	finish.disabled=true;
	if(curr_step===1){
		prev.disabled=true;
	}
content.innerText=`Step Number ${curr_step}`;
});

finish.addEventListener('click',()=>{
location.reload();
});