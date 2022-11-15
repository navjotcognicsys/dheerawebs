import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function DisplayChart(props) {
	

	const options = {
		animationEnabled: true,
		theme: "light2",
		title:{
			text: props.title
		},
		subtitles: [{
			text: "(Values displayed here are in percentage)",
			fontFamily: "helvetica"
		}],
		axisY: {
			includeZero : true,
		},
		axisX:{
			interval: 1
	 	},
		toolTip: {
			shared: true,
		},
		data: props.dataForChart
	}

	useEffect(() => {
		console.log(props.dataForChart)
	
		return () => {
			
		}
	}, [props])
	

	return(
			<>
				<CanvasJSChart options = {options} 
				// onRef={ref => chart = ref}
			/>
			</>
			
	)
}
