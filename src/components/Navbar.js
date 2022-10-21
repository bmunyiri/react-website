import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/main.css";
import logo from '../Kenyawebprofessionals.png';
import { Link } from 'react-router-dom'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>

			<h3>
				<img src={logo} width="100px"/>
			</h3>

			<nav ref={navRef}>
				<Link to='/' >Home</Link>
				<Link to='/AboutMe' >About Me</Link>
				<Link to='/Blog' >Blog</Link>
				<Link to='/MyWork' >My Work</Link>
				<Link to='/PageNotFound' >Page Not Found</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;