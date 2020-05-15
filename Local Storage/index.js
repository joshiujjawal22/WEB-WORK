
document.getElementById("count").innerHTML = "You have clicked the button " + localStorage.clicke + " time(s).";
function countTheClick() {
  	
    if (localStorage.clicke) {
      localStorage.clicke = Number(localStorage.clicke)+1;
    } else {
      localStorage.clicke = 1;
    }
    document.getElementById("count").innerHTML = "You have clicked the button " + localStorage.clicke + " time(s).";
   
}