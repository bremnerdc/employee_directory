import React from "react";
import searchBox from './searchbox';

function nav({handleSearchChange}){
    return(
    <nav className="navbar navbar-expand navbar-primary"><div className="navbar-collapse"><searchBox handleSearchChange={handleSearchChange} /></div></nav>
    );
    }
    
    export default searchBox;