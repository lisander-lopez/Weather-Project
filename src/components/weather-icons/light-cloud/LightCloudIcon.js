import React from "react";
import styles from "./LightCloudIcon.module.scss";

function LightCloudIcon({ delay = 0 }) {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="213"
				height="186"
				viewBox="0 0 213 186"
				className={styles["svg-tag"]}
				style={{ "--delay": `${delay}s` }}
			>
				<defs>
					<filter
						id="a"
						x="63"
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
						x="84"
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
						x="133"
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
						x="84"
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
						x="27"
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
						x="38.686"
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
						x="118.686"
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
						x="84"
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
						x="39.686"
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
						x="118.686"
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
					<filter
						id="u"
						x="0"
						y="102.501"
						width="161"
						height="76.466"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dy="3" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="3" result="v" />
						<feFlood flood-opacity="0.161" />
						<feComposite operator="in" in2="v" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g transform="translate(-73 -22)">
					<g transform="translate(128 57)">
						<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#a)">
							<circle
								cx="40"
								cy="40"
								r="40"
								transform="translate(78 58)"
								fill="rgba(255,221,0,0.92)"
							/>
						</g>
						<g className={styles["rays"]}>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#c)">
								<g transform="translate(112 35)" fill="#fcd702">
									<g className={styles["ray"]} data-delay={delay}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#e)">
								<g transform="translate(181 92) rotate(90)" fill="#fcd702">
									<g className={styles["ray"]} data-delay={delay}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#g)">
								<g transform="translate(124 161) rotate(180)" fill="#fcd702">
									<g className={styles["ray"]}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#i)">
								<g transform="translate(55 104) rotate(-90)" fill="#fcd702">
									<g className={styles["ray"]}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#k)">
								<g
									transform="translate(75.17 146.31) rotate(-135)"
									fill="#fcd702"
								>
									<g className={styles["ray"]}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#m)">
								<g
									transform="translate(169.31 137.83) rotate(135)"
									fill="#fcd702"
								>
									<g className={styles["ray"]}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#q)">
								<g
									transform="translate(67.69 57.17) rotate(-45)"
									fill="#fcd702"
								>
									<g className={styles["ray"]}>
										<path d="M6,0l6,20H0Z" stroke="none" />
										<path
											d="M 6 3.48011589050293 L 1.344035148620605 19 L 10.65596485137939 19 L 6 3.48011589050293 M 6 0 L 12 20 L 0 20 L 6 0 Z"
											stroke="none"
											fill="rgba(252,144,0,0.34)"
										/>
									</g>
								</g>
							</g>
							<g transform="matrix(1, 0, 0, 1, -55, -35)" filter="url(#s)">
								<g
									transform="translate(160.83 48.69) rotate(45)"
									fill="#fcd702"
								>
									<g className={styles["ray"]}>
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
						<g className={styles["cloud"]} transform="translate(-50px, 80px)">
							<g transform="matrix(1, 0, 0, 1, -9, -40)" filter="url(#u)">
								<path
									d="M67.389-732.677a38.5,38.5,0,0,0-13.7,3.387,26.611,26.611,0,0,0-7.131,4.686,21.623,21.623,0,0,0-5.656,8.021,23.1,23.1,0,0,0-1.118,3.917,1.629,1.629,0,0,1-.123.5c-.022,0-.436-.3-.917-.675-6.1-4.79-13.133-6.369-19.694-4.405a20.8,20.8,0,0,0-9.2,5.8,18.338,18.338,0,0,0-5.074,13.029,9.132,9.132,0,0,1-.045,1.694,20.8,20.8,0,0,0-2.615,3.938A16.309,16.309,0,0,0,3.6-675.053l.615.81h64.9c61.674,0,64.916-.01,65.072-.187a28.916,28.916,0,0,0,2.694-4.9,19.416,19.416,0,0,0,1.721-7.325l.067-1.662.6-.977a26.685,26.685,0,0,0,3.633-8.717,17.877,17.877,0,0,0,0-6.172c-1.2-5.351-5.4-9.424-11.412-11.055a20.885,20.885,0,0,0-19.381,4.426,21.872,21.872,0,0,0-1.867,1.86,4.2,4.2,0,0,1-.581.634,8.987,8.987,0,0,1-.8-1.33,46.4,46.4,0,0,0-5.387-7.72A44.166,44.166,0,0,0,74.71-732.479,70.333,70.333,0,0,0,67.389-732.677Z"
									transform="translate(8.82 841.21)"
									fill="#757575"
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</>
	);
}

export default LightCloudIcon;
