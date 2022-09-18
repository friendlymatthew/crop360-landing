import styles from "../styles/Water.module.css";

export default function Water() {
	return (
		<section className=" py-20 px-8 bg-white shadow-md">
			<div>Intelligently water your crops</div>
			<div className={styles.wave.wave1}></div>
			<div className={styles.wave.wave2}></div>
			<div className={styles.wave.wave3}></div>
			<div className={styles.wave.wave4}></div>
		</section>
	);
}
