import React from "react";
import "../../style/MainBody.css";
import "../../style/Font.css";

const BodyRow = ({ sectionName }) => {
	return (
		<div className="bodyRow divSize bRInnerStyle font-Typewriter">
			{sectionName}
		</div>
	);
};

export default BodyRow;
