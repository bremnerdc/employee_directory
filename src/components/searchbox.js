import React from "react";

function searchBox({handleSearchChange}){
return(
<div className="searchBox">
<form className="form-inline"><input className="form" type="search" placeholder="Search" onChange={e => handleSearchChange(e)}></input></form></div>
);
}

export default searchBox;