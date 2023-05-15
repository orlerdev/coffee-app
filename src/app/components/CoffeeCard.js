import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/pro-light-svg-icons";
import s from "./coffeeCard.module.scss";

export default function CoffeeCard() {
	return (
		<div className={s.cardContainer}>
			<div className={s.cardHeart}>
				<FontAwesomeIcon icon={faHeart} />
				<FontAwesomeIcon icon={faHeartCrack} />
			</div>
			<div className={s.cardWrap}></div>
			<div className={s.cardWrap}></div>
			<div className={s.cardWrap}></div>
		</div>
	);
}
