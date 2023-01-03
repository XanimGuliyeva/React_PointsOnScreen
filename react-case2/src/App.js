import React, {useState } from 'react'

export default function App() {

	const [points, setPoints] = useState([]);
	const [data, setData] = useState([]);

	const clickHandle = (e) =>{
		setPoints(points=>[...points, {
			x: e.clientX,
			y: e.clientY
		}])
		setData([])
	}

	const redoHandle = (e) =>{
		e.stopPropagation();
		const data = [...points]
		//redo edilen point
		const item = data.pop();
		setData(data=>[...data,item])
		setPoints(data);
	}

	const undoHandle = (e) =>{
		e.stopPropagation();
		const d = [...data]
		//redo edilen point
		const item = d.pop();
		setPoints(points=>[...points,item]);
		setData(d)
	}

	return (
		<div className='screen' onClick={clickHandle}>
			<header className='header'>
				<button disabled={points.length===0} onClick={redoHandle}>Redo</button>
				<button disabled={data.length===0} onClick={undoHandle}>Undo</button>
			</header>
			{points.map((point,key)=>(
				<div className='point' key={key} style={{left: point.x, top:point.y}}/>
			))}
		</div>
	);
}
