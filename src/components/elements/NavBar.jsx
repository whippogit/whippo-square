import React from "react";
import LogoAguara from "../logos/LogoAguara";
import LogoWhippoBlanco from "../logos/LogoWhippoBlanco";

function NavBar() {
  return (
    <div className="bg-acent">
      <div className="d-flex justify-content-between">
        <div className="w-25">
          <LogoWhippoBlanco />
        </div>
        <div className="w-config-aguara">
          <LogoAguara />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
