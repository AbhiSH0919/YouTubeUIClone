import React, { useState } from "react";

// ==============================COMPONENTS====================================
import Header from "./Components/headerComp/Header";
import Menubar from "./Components/menubarComp/Menubar";
import Home from "./Components/contentComps/home/Home";

// ==============================REACT-ROUTER-DOM==============================
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
	return (
		<Router>
			<Header />

			<main className="bg-warning bg-opacity-75 w-100 h-100 d-flex align-items-star ">
				<Menubar />
				<section className="contentSection bg-success-subtle">
					<Routes>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</section>
			</main>
		</Router>
	);
}

export default App;
