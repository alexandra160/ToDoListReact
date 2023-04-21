import React from 'react';
import './index.css';

function Hide(x) {
    return () => {
    if(x === 1){
        document.getElementById("dummyContent").style.display = "block";
        document.getElementById("impContent").style.display = "none"; 
    }
    else {
        document.getElementById("dummyContent").style.display = "none";
        document.getElementById("impContent").style.display = "block";
    }
    };
  }

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
const Menu = () => {
   return (
           <div>
             
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

             <div id="smallScreenMenu">
             <div class="topnav">
                <a href="#" class="name">Menu</a>
                <div id="myLinks">
                <ul id="menuList">
                <li onClick={Hide(2)}>Create a new list</li>
                <li>Lists in progress
                <ul className="listOptions">
                    <li onClick={Hide(1)} >Grocery list</li>
                    <li onClick={Hide(1)} >House chores</li>
                    <li onClick={Hide(1)} >Lemon cake</li>
                 </ul>
               </li>
              <li onClick={Hide(1)} > Account</li>
              <li onClick={Hide(1)} >Settings</li>
           </ul>
            </div>

            <a href="javascript:void(0);" class="icon" onClick={myFunction}>
            <i class="fa fa-bars"></i>
            </a>
</div>


             </div>

           <div id="bigScreenMenu">
           <h2 id="menu">Menu</h2>
           <ul id="menuList">
                <li onClick={Hide(2)}>Create a new list</li>
                <li>Lists in progress
                <ul className="listOptions">
                    <li onClick={Hide(1)} >Grocery list</li>
                    <li onClick={Hide(1)} >House chores</li>
                    <li onClick={Hide(1)} >Lemon cake</li>
                 </ul>
               </li>
              <li onClick={Hide(1)} > Account</li>
              <li onClick={Hide(1)} >Settings</li>
           </ul>
           </div>

           </div>


   );
};
 
export default Menu;