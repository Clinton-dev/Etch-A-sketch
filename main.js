 const originalNum = 16;
 var content = document.querySelector('.content');

 content.addEventListener('mouseover', function (event) {
    if (event.target.className.toLowerCase() == "pixel") {
        event.target.style.backgroundColor = 'black'
    }})
 
function makeGrid(num){
 for( var i = 0; i <= num; i++){
     //width
     for (let j = 0; j <= num; j++) {
         //height
         var div = document.createElement("div");
         div.style.width = "24.9px";
         div.style.height = "24.9px";
         div.style.border ="0.1px solid #9e9e9e"; 
         content.appendChild(div);
         div.classList.add('pixel');
     }
 }
}
 makeGrid(originalNum);

 function resetGrid(){
    while(content.firstChild){
    content.removeChild(content.firstChild);
    }
    var askForSq = prompt('how many squares do you want in your grid');
   makeGrid(askForSq);
   //clearGrid();
 } 
 
 var resetBtn = document.querySelector('button');
 resetBtn.addEventListener('click',resetGrid);
 
 /*function clearGrid(){

 }*/
