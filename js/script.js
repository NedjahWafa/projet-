// $(document).ready(function() {
//     $("#menuButton").click(function() {
//         // You can add code here to handle the menu button click event.
//         alert("Menu button clicked!");
//     });
// });

const btn = document.getElementById("menuButton");
const liste = document.getElementById("list");

btn.addEventListener('click', function(){

    const elmnt =document.createElement("button");
    const text = document.createTextNode('pizza');
    const lien = document.createElement('a');

    elmnt.appendChild(text);
    liste.appendChild(elmnt);
    elmnt.appendChild(lien);
     const a =lien.setAttribute('href','file:///C:/Users/fifi/Desktop/paw%20projet/html/aboutus.htm');
    
    elmnt.addEventListener('click',function(){
        lien.appendChild(a);
        elmnt.appendChild(lien);
        alert("clicked");
    })

    elmnt.appendChild(text);
    liste.appendChild(elmnt);

    
    
    elmnt


});
