import React from 'react';
import './style.css';
import camright from '../../assets/right_cam.png';
import camleft from '../../assets/left_cam.png';
function Consulta() {
	return (
		<section>
			<div className="w50">
				<h1 className="title_shearch">Consulta</h1>
				<div className="">
					<img src={camright} alt="Camera" />
					<img src={camleft} alt="Camera" />
				</div>

				<select name="cameras" id="" className="inputs_syle">
					<option value="cameras">Cameras</option>
					<option value="cameras">Cam1</option>
					<option value="cameras">Cam2</option>
					<option value="cameras">Cam3</option>
				</select>
				<input className="inputs_syle" type="datetime-local" />

				<video controls>
					<source src="..Videos/video1.mp4" type="video/mp4" />
				</video>
			</div>
		</section>
	);
}

export default Consulta;
