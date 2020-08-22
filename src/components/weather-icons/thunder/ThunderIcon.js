import React from "react";
import styles from "./ThunderIcon.module.scss";

export default function ThunderIcon({ delay }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="245"
			height="188.144"
			viewBox="0 0 245 188.144"
			className={styles.wrapper}
			style={{
				"--delay1": `${delay + Math.random()}s`,
				"--delay2": `${delay + Math.random()}s`,
				"--delay3": `${delay + Math.random()}s`,
			}}
		>
			<defs>
				<filter
					id="a"
					x="0"
					y="0"
					width="245"
					height="124.466"
					filterUnits="userSpaceOnUse"
				>
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="b" />
					<feFlood flood-opacity="0.161" />
					<feComposite operator="in" in2="b" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<g transform="translate(9 6)">
				<g className={styles.rain}>
					<path
						d="M191.074,143.424s-22.422,38.079,0,38.2S191.074,143.424,191.074,143.424Z"
						transform="translate(-6 -31.501)"
						fill="#004cff"
					/>
					<path
						d="M191.074,143.424s-22.422,38.079,0,38.2S191.074,143.424,191.074,143.424Z"
						transform="translate(-76 -31.501)"
						fill="#004cff"
					/>
					<path
						d="M191.074,143.424s-22.422,38.079,0,38.2S191.074,143.424,191.074,143.424Z"
						transform="translate(-156 -31.501)"
						fill="#004cff"
					/>
				</g>
				<g className={styles.lightning}>
					<path
						d="M932.039,235.738,823.693,358.248h32.159l-61.638,58.958,107.58-58.958H882.269Z"
						transform="translate(-757 -235.501)"
						fill="#a90"
						stroke="#707070"
						stroke-width="1"
					/>
				</g>
				<g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#a)">
					<path
						d="M106.868-732.65a54.883,54.883,0,0,0-21.752,6.168,42.254,42.254,0,0,0-11.32,8.533,39.838,39.838,0,0,0-8.978,14.607,46.939,46.939,0,0,0-1.774,7.133,3.316,3.316,0,0,1-.2.908c-.035,0-.692-.549-1.455-1.23-9.687-8.722-20.847-11.6-31.262-8.022A32.8,32.8,0,0,0,15.53-694,36.266,36.266,0,0,0,7.475-670.27a19.054,19.054,0,0,1-.071,3.084c-.532.341-3.123,4.825-4.152,7.171-4.808,10.974-3.939,22.894,2.36,32.3l.976,1.476h103.03c97.9,0,103.048-.019,103.3-.34a55.332,55.332,0,0,0,4.276-8.93,39.724,39.724,0,0,0,2.732-13.339l.106-3.027.958-1.778a52.762,52.762,0,0,0,5.766-15.874,37.278,37.278,0,0,0,0-11.239A25.848,25.848,0,0,0,208.639-700.9a30.075,30.075,0,0,0-30.765,8.06,37.738,37.738,0,0,0-2.963,3.387,7.327,7.327,0,0,1-.923,1.154,16.918,16.918,0,0,1-1.277-2.422,85.712,85.712,0,0,0-8.552-14.058c-11.55-15.458-27.749-25.2-45.669-27.51A97.382,97.382,0,0,0,106.868-732.65Z"
						transform="translate(8.82 738.71)"
						fill="#757575"
					/>
				</g>
			</g>
		</svg>
	);
}
