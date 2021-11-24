import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((el,index)=>{
    return <a key={index++} href={"#"+el}>{el}</a>}
  )}</nav>;
}

export default NavBar;
