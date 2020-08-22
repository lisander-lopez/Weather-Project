import React from "react";
import SunnyIcon from "./sunny/SunnyIcon";
import LightCloudIcon from "./light-cloud/LightCloudIcon";
import HeavyCloudIcon from "./heavy-cloud/HeavyCloudIcon";
import SnowIcon from "./snow/SnowIcon";
import ThunderIcon from "./thunder/ThunderIcon";

const CLEAR_CODES = [800];
const RAINING_CODES = [
	300,
	301,
	302,
	500,
	501,
	502,
	511,
	520,
	521,
	522,
	700,
	711,
	721,
	731,
	741,
	751,
];

const SNOWING_CODES = [600, 601, 602, 610, 611, 612, 621, 622, 623];

const HEAVY_CLOUD_CODE = [803, 804];

const LIGHT_CLOUD_CODE = [801, 802];

const THUNDER_CODE = [200, 201, 202, 230, 231, 232, 233];

function WeatherIcon({ code, delay }) {
	return (
		<>
			<ThunderIcon delay={delay} />
		</>
	);
}

export default WeatherIcon;
