import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Info } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="hero container">
				<h1 className="texto">POKEMON</h1>
			</div>
			{store.pokemon.map((j, i) => {
				return (
					<>
						<Info key={i} name={j.name} />
					</>
				);
			})}
		</>
	);
};
