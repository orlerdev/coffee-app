import styles from "./modal.module.scss";
export default function Modal() {
	return (
		<div className={styles.modalBackdrop}>
			<div className={styles.modal}></div>
		</div>
	);
}
