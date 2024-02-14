import React from "react";

function Nav(props){
    return( <div>
        <ul className="nav-links">
          <li><a href= {props.link}>{props.name}</a></li>
        </ul>
      </div>);
}


export default Nav;