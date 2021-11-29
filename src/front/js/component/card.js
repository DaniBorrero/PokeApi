import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Info = props => {
	return (
		<>
			<Card className="border border-primary m-3" style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title className="text-dark">{props.name}</Card.Title>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</>
	);
};
