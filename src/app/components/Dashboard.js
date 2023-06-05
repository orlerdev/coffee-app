"use client"
import s from "@/dashboard/dashboard.module.scss"
import styled from "styled-components"

export default function Dashboard() {
	return (
		<div className={s.dashWrap}>
			<div className={s.statsWrap}>
				<h2 className={s.statsTitle}>Stats</h2>
				<ul className={s.statsUL}>
					<div className={s.dataWrap}>
						<li className={s.statsLI}>Member Since</li>
						<p className={s.stats}>March 25, 2023</p>
					</div>
					<div className={s.dataWrap}>
						<li className={s.statsLI}>Rewards Points</li>
						<p className={s.stats}>2,350</p>
					</div>
					<div className={s.dataWrap}>
						<li className={s.statsLI}># of Favorites</li>
						<p className={s.stats}>7</p>
					</div>
					<div className={s.dataWrap}>
						<li className={s.statsLI}># of Reviews</li>
						<p className={s.stats}>18</p>
					</div>
					<div className={s.dataWrap}>
						<li className={s.statsLI}># of Followers</li>
						<p className={s.stats}>362</p>
					</div>
				</ul>
			</div>
			<div className={s.faveWrap}>
				<h2 className={s.faveTitle}>Favorites</h2>
			</div>
		</div>
	)
}
