 var content = document.querySelector('.content');

 content.addEventListener('mouseover', function (event) {
    if (event.target.className.toLowerCase() == "pixel") {
        event.target.style.backgroundColor = 'black'
    }})

 for( var i = 0; i <= 14; i++){
     //width
     for (let j = 0; j <= 16; j++) {
         //height
         var div = document.createElement("div");
         div.style.width = "24.9px";
         div.style.height = "24.9px";
         div.style.border ="0.1px solid #9e9e9e"; 
         content.appendChild(div);
         div.classList.add('pixel');
     }
 }

 
 


