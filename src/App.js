import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import MyWork from './Pages/MyWork';
import Blog from './Pages/Blog';
import AboutMe from './Pages/AboutMe';
import PageNotFound from './Pages/PageNotFound';


function App() {
	return (

		<BrowserRouter>
			<Navbar />
			<Routes>
		
			<Route path="/" element={<Home />} />
			<Route path="/MyWork" element={<MyWork />} />
			<Route path="/Blog" element={<Blog />} />
			<Route path="/AboutMe" element={<AboutMe />} />
			 <Route path="/#" element={<PageNotFound />} />
			</Routes>
			  </BrowserRouter>
	
	);
}

export default App;
