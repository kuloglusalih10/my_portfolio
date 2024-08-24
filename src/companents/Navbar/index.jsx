import React, { useEffect } from "react";
import "../../assets/styles/Navbar.css";
import logo_w from "../../assets/images/logo_w.png"
import logo_b from "../../assets/images/logo_b.png"
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { initializeDrawerButton } from "../../assets/js/drawer";
import { motion } from "framer-motion";


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

const Navbar = () => {

	useEffect(initializeDrawerButton, []);
	return (
		<>
		<header  id="header" class="fixed top-0 w-full h-16 z-50 " data-astro-cid-3ef6ksr2="">
			<div class="w-full h-full mx-auto px-5 max-w-screen-md">
				<div class="relative h-full w-full" data-astro-cid-3ef6ksr2="">
					<div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold" data-astro-cid-3ef6ksr2="">
						<a href="/" class="flex gap-2 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out" data-astro-cid-3ef6ksr2="">
							<img src={logo_b} alt="Salih Kuloğlu" class=" w-20  dark:hidden" data-astro-cid-3ef6ksr2=""/>
							<img src={logo_w} alt="Salih Kuloğlu" class="w-20 hidden dark:block" data-astro-cid-3ef6ksr2=""/>
						</a>
					</div>
					<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2="">
						<nav class="hidden md:flex items-center justify-center text-sm gap-1" data-astro-cid-3ef6ksr2="">
							<a href="/" class="h-8 rounded-full px-3 flex items-center justify-center transition-colors duration-300 ease-in-out bg-black dark:bg-white text-white dark:text-black" data-astro-cid-3ef6ksr2=""> Home </a>
							<a href="/work" class="h-8 rounded-full px-3 text-current flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white" data-astro-cid-3ef6ksr2=""> Experience </a>
							<a href="/blog" class="h-8 rounded-full px-3 text-current flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white" data-astro-cid-3ef6ksr2=""> Blog </a>
							<a href="/projects" class="h-8 rounded-full px-3 text-current flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white" data-astro-cid-3ef6ksr2=""> Projects </a>
						</nav>
					</div>
					<div class="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1" >
						
						<button id="header-theme-button"  class="hidden  md:flex size-9 rounded-full p-2 items-center justify-center bg-transparent  hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" >
							<div class="size-full flex items-center justify-center dark:hidden " >
								<div className="dark:hidden block">
									<IoSunnyOutline />
								</div>
							</div>
							<div class="size-full hidden dark:flex items-center justify-center" >
								<IoMoonOutline />
							</div>
						</button>
						<button id="header-drawer-button"  class=" md:hidden size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" >
							<div id="drawer-open" class="size-full flex items-center justify-center" >
								<IoMenuOutline />
							</div>
							<div id="drawer-close" class="size-full hidden  items-center justify-center" >
								<IoCloseOutline />
							</div>
						</button>
					</div>
				</div>
			</div>
		</header>

		<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s="">
			<nav class="flex flex-col items-center space-y-2" >
				<a href="/" class="flex items-center justify-center px-3 py-1 rounded-full hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-colors duration-300 ease-in-out pointer-events-none bg-black dark:bg-white text-white dark:text-black" data-astro-cid-hxtyo74s=""> Home </a>
				<a href="/work" class="flex items-center justify-center px-3 py-1 rounded-full text-current hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s=""> Experience </a>
				<a href="/blog" class="flex items-center justify-center px-3 py-1 rounded-full text-current hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s=""> Blog </a>
				<a href="/projects" class="flex items-center justify-center px-3 py-1 rounded-full text-current hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/20 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s=""> Projects </a>
			</nav>
			<div class="flex gap-1 mt-5" >
				
				<button id="drawer-theme-button" aria-label="Toggle light and dark theme" class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s="">
					<div class="size-full flex items-center justify-center dark:hidden " >
						<div className="dark:hidden block">
							<IoSunnyOutline />
						</div>
					</div>
					<div class="size-full hidden dark:flex items-center justify-center" >
						<IoMoonOutline />
					</div>
				</button>
			</div>
		</div>
		
		</>
	);
};

export default Navbar;


