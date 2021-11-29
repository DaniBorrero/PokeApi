import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "../../img/poke.png";

export const Test = () => {
	return (
		<>
			<Navbar bg="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img src={icon} width="35" height="30" className="d-inline-block align-top" alt="Pokemon" />
						<Navbar.Brand className="text-white mx-3"> Pokemon</Navbar.Brand>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};
