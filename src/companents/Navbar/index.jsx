import React from "react";
import "../../assets/styles/Navbar.css";
import { FaHome, FaLaptop } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-scroll";
import ProfileImg from "../../assets/images/profile.png";
import NavLinks from "./Navlink";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const navVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const Navbar = ({ nav, handleNav }) => {
	return (
		<AnimatePresence>
			<motion.nav
				initial={{ width: "0" }}
				animate={
					nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
				}
				className={nav ? "navbar active" : "navbar"}>
				<motion.div
					initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className='navbar-container '>
					<div className='top-details'>
						<div className='img__cover'>
							<img src={ProfileImg} alt='Main' className='profile-pic-small object-contain' />
						</div>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to='home'
							className='profile-name sans-font'>
							Salih Kuloğlu
						</Link>
						<NavLinks handleNav={handleNav} />
					</div>
					<ul className='mid-details'>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className='mid-links'>
							<FaHome className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								AnaSayfa
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className='mid-links'>
							<FiUser className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								Hakkında
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className='mid-links'>
							<FaLaptop className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								Yetenekler
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='services'
							className='mid-links'>
							<BiServer className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								Deneyim
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='works'
							className='mid-links'>
							<BiBookContent className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								Projeler
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className='mid-links'>
							<BiEnvelope className='mid-icon' />
							<li className='mid-link sans-font' onClick={handleNav}>
								İletişim
							</li>
						</Link>
					</ul>
					<div className='copy'>
						<small className='copyright'>
							© Copyright ©2024 <br /> All rights reserved |
						</small>
					</div>
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
