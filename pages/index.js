import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Data from "../components/Data";
import Cloud from "../components/Cloud";
import Sensor from "../components/Sensor";
import Banner from "../components/Banner";
import Water from "../components/Water";

import { Parallax } from "react-scroll-parallax";

export default function Home() {
	return (
		<div className={styles.graph}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className="sticky top-0 z-50 ">
					<Banner />
					<Navbar />
				</header>

				<div id="hero" className="bg-white h-full shadow-t-md">
					<div>
						<div className="flex flex-col items-center justify-between pt-[25rem] pb-[3rem]"></div>
					</div>
				</div>

				<div className="min-h-screen grid grid-cols-1 divide-y-2 gap-y-20 divide-gray-200 py-32 text-black px-2 md:px-20">
					<Data />
					<Sensor />
					<Water />
					<div className="h-80">Our Data</div>
				</div>
			</main>
		</div>
	);
}
