const chip = document.getElementById('chip');
const inputChip = document.getElementById('inputChip');



function handleClick(){
  let nodeLength = chip.getElementsByTagName("p").length;
  if(nodeLength < 5){
  let newChip = document.createElement('p');
newChip.innerHTML = `${inputChip.value}`
chip.appendChild(newChip);}
}

inputChip.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   handleClick()
   document.getElementById("add").click();
   inputChip.value = ''
  }
})

