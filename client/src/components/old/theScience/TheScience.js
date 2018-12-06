import React, { Component } from 'react';


class TheScience extends Component {
	render() {
		return(
			<div>
				<img style={{height:"250px", width:"100%"}}src={require('../../assets/image/ScienceB.jpg')}/>
				<div className="container">
					<div className="row">
					<div>
						<div className='col-md-4'>
							<img style={{height:"180px", width:"180px"}}src={require('../../assets/image/ISO.png')}/>
						<hr style={{marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5"}}/>
						</div>

						<div className='col-md-8'>
							<h1>Iso-Stealth Technology: Audiology in Action</h1><br/>
							<h5>Thanks to our advanced audiology research and testing methodologies and our international network of more than 700 audiology partners, we’re able to go beyond our competitors to engineer ultra-precise, second-bend ear canal impressions to position our IEM within just a couple of millimeters of your eardrum. You can listen at lower, safer SPLs for a cleaner mix, with less ear-cavity interference and a consistent sonic experience every time.</h5>
							<br/>
							<hr style={{marginBottom: "20px", marginTop: "20px;", borderColor: "#67bfe5"}}/>
						</div>
					</div>
					</div>
					<div className="row">
						<div className='col-md-4'>
							<img style={{height:"180px", width:"180px"}}src={require('../../assets/image/flo.png')}/>
						</div>
						<div className='col-md-8'>
							<h1>SonicFlo Acoustics: The Aerospace Advantage</h1>
							<h5>Thanks to our advanced audiology research and testing methodologies and our international network of more than 700 audiology partners, we’re able to go beyond our competitors to engineer ultra-precise, second-bend ear canal impressions to position our IEM within just a couple of millimeters of your eardrum. You can listen at lower, safer SPLs for a cleaner mix, with less ear-cavity interference and a consistent sonic experience every time.</h5>
						</div>
					</div>
					<div className="row">
						<div className='col-md-4'>
							<img style={{height:"180px", width:"180px"}}src={require('../../assets/image/damping.png')}/>
						</div>
						<div className='col-md-8'>
							<h1>Acoustic Optimization: From Drivers to Damping</h1>
							<h5>Acoustic refinements include extra-large bores that preserve airflow and sonic fidelity and advanced venting features to manage resonance. All of our universal in-ear monitors offer Stealth Damping technology, featuring a faceplate that can be removed to extend bass response for deep, rich low end that you can feel.</h5>
						</div>
					</div>
					<div className="row">
						<div className='col-md-4'>
							<img style={{height:"180px", width:"180px"}}src={require('../../assets/image/komposit.png')}/>
						</div>
						<div className='col-md-8'>
							<h1>Space-Age Materials: Comfort and Confidence</h1>
							<h5>Components are built inside an ultra-light enclosure housed in proprietary composite material that ensures a snug, comfortable, slip-free fit, even during long-term use.</h5>
						</div>
					</div>

				</div>
			</div>		
		)
	}
}
export default TheScience