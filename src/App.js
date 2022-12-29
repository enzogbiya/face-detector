import React, { useEffect, useState, useRef } from "react";
import "./App.css";

import * as faceapi from "face-api.js";

const App = () => {
	const inputField = useRef(null);

	useEffect(() => {
		Promise.all([
			faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
			faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
			faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
		]).then(start);
	}, []);

	const start = async () => {
		console.log("Loaded");
	};

	return (
		<div className="App">
			<input type="file" ref={inputField}></input>
		</div>
	);
};

export default App;
