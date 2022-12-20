import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const listOfLinks = links.map((link) => {
    return  <a key={link} href={"#" + link}>{link}</a>
  })

  return <nav> {listOfLinks} </nav>;
}

export default NavBar;
