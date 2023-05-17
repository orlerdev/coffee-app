import s from "./coffeeCard.module.scss";

export default function CoffeeCard() {
	return (
		<div className={s.cardContainer}>
			<div className={s.cardHeart}></div>
			<div className={s.cardWrap}></div>
			<div className={s.cardWrap}></div>
			<div className={s.cardWrap}></div>
		</div>
	);
}
