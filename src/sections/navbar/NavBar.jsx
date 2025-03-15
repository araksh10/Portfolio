import React from "react";
import "../../style/NavBar.css";
import "../../style/Font.css";

function NavBar({ name }) {
	return (
		<div className="navbar font-minecraft">
			<h1>{name}</h1>
			<hr />
		</div>
	);
}

export default NavBar;
