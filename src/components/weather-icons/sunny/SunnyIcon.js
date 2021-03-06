import React from "react";
import styles from "./SunnyIcon.module.scss";

function SunnyIcon({ delay = 0 }) {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="186"
				height="186"
				viewBox="0 0 186 186"
				style={{ "--delay": `${delay}s` }}
			>
				<defs>
					<filter
						id="a"
						x="36"
						y="46"
						width="110"
						height="110"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dy="3" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="5" result="b" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="b" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="c"
						x="57"
						y="0"
						width="72"
						height="80"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="d" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="d" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="e"
						x="106"
						y="57"
						width="80"
						height="72"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="f" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="f" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="g"
						x="57"
						y="106"
						width="72"
						height="80"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="h" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="h" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="i"
						x="0"
						y="57"
						width="80"
						height="72"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="j" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="j" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="k"
						x="11.686"
						y="88.686"
						width="82.627"
						height="82.627"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="l" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="l" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="m"
						x="91.686"
						y="88.686"
						width="82.627"
						height="82.627"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="n" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="n" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="o"
						x="57"
						y="106"
						width="72"
						height="80"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="p" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="p" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="q"
						x="12.686"
						y="13.686"
						width="82.627"
						height="82.627"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="r" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="r" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="s"
						x="91.686"
						y="13.686"
						width="82.627"
						height="82.627"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="2" dy="-5" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="10" result="t" />
						<feFlood flood-color="#ffbc00" flood-opacity="0.639" />
						<feComposite operator="in" in2="t" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(28 35)">
					<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#a)">
						<circle
							cx="40"
							cy="40"
							r="40"
							transform="translate(51 58)"
							fill="rgba(255,221,0,0.92)"
						/>
					</g>
					<g className={styles["rays"]}>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#c)">
							<g transform="translate(85 35)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#e)">
							<g transform="translate(154 92) rotate(90)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#g)">
							<g transform="translate(97 161) rotate(180)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#i)">
							<g transform="translate(28 104) rotate(-90)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#k)">
							<g
								transform="translate(48.17 146.31) rotate(-135)"
								fill="#fcd702"
							>
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#m)">
							<g
								transform="translate(142.31 137.83) rotate(135)"
								fill="#fcd702"
							>
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#o)">
							<g transform="translate(97 161) rotate(180)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#q)">
							<g transform="translate(40.69 57.17) rotate(-45)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
						<g transform="matrix(1, 0, 0, 1, -28, -35)" filter="url(#s)">
							<g transform="translate(133.83 48.69) rotate(45)" fill="#fcd702">
								<path d="M6,0l6,20H0Z" stroke="none" />
								<path
									d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
									stroke="none"
									fill="rgba(252,144,0,0.34)"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</>
	);
}

export default SunnyIcon;
