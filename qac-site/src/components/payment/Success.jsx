import React from "react";
import {Link} from "react-router-dom";

const Success = () => {
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{"Your booking was successful."}
			<Link to={"/"} style={{padding: 10, marginTop: 20}}>Go to Homepage</Link>
		</div>
	);
};

export default Success;