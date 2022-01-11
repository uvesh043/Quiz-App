import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header=()=>{
    return(
        <div className="header">
        <Link className="title" to="/">
        Intutiive Quiz Hub
        </Link>
        <hr className="divider"/>
        
        </div>
    )
}
export default Header