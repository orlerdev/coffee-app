import s from "./coffeeContainer.module.scss";
import CoffeeCard from "../components/CoffeeCard";
export default function CoffeeContainer() {
	return (
		<div className={s.containerWrap}>
			<CoffeeCard />
			<CoffeeCard />
			<CoffeeCard />
			<CoffeeCard />
		</div>
	);
}
