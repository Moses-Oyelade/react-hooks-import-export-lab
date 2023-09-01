import React from "react";


function NavBar() {
  function handleClick(){
    return(console.log("i am clicked"))
  }

  return (
    <nav>
      <a href="#home" onClick={handleClick} >I'm a link!</a>
    </nav>
  );
}



export default NavBar;