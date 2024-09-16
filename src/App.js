import React, { useState } from "react";

// ==============================COMPONENTS====================================
import Header from "./Components/headerComp/Header";
import Menubar from "./Components/menubarComp/Menubar";
import Home from "./Components/contentComps/home/Home";
import Shorts from "./Components/contentComps/shorts/Shorts";
import Watch from "./Components/contentComps/watch/Watch";

// ==============================REACT-ROUTER-DOM==============================
import {
	Route,
	BrowserRouter as Router,
	Routes,
	RouterProvider,
} from "react-router-dom";
// import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
	return (
		<Router>
			<Header />

			<main className="bg-warning bg-opacity-75 w-100 h-100 d-flex align-items-star ">
				<Menubar />
				<section className="contentSection bg-success-subtle w-100">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/watch" element={<Watch />}></Route>
						<Route path="/Shorts" element={<Shorts />}></Route>
					</Routes>
				</section>
			</main>
		</Router>
	);
}

export default App;
