import React from "react";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer(){
    return(
        
        <p className="Footer">copyright@{year}</p>
    );
}

export default Footer;