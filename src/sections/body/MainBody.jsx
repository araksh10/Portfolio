import React from "react";
import "../../style/MainBody.css";
import BodyRow from "./BodyRow";

const MainBody = () => {
	return (
		<div className="mainBody">
			<div className="row-style">
				<BodyRow sectionName={"Profile"} />
				<BodyRow sectionName={"Details"} />
				<BodyRow sectionName={"Contacts"} />
			</div>

			<div className="row-style">
				<BodyRow sectionName={"Projects"} />
				<BodyRow sectionName={"My Blog"} />
				<BodyRow sectionName={"Tutorials"} />
			</div>

			<div className="row-style">
				<BodyRow sectionName={"Hobbies"} />
				<BodyRow sectionName={"Anime Watch-list"} />
				<BodyRow sectionName={"Animations"} />
			</div>
		</div>
	);
};

export default MainBody;
