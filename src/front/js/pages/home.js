import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1>Hola mudnoi</h1>
			{store.pokemon.map((j, i) => {
				return (
					<>
						<h1 key={i}>{j.name}</h1>
					</>
				);
			})}
		</>
	);
};
