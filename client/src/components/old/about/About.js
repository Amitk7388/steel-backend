import React, { Component } from 'react';


class About extends Component {
	render() {
		return(
			<div>
				<div>
					<img style={{height:"250px", width:"100%"}}src={require('../../assets/image/AboutB.jpg')}/>
				</div>
				<div className="container">
					<div className="card">
					<div className="row">
						<div className="col-md-6">
							<b><h2>Our Design Philosophy</h2></b>
							<h4>“Nature has already blessed us with a marvelous in-built audio system. We’re merely ensuring the precision and quality of the playback; utilizing the attributes of the natural system; and providing versatility for use in many aspects of life. They can be used while working in the studio, performing on stage, listening while relaxing exercising, traveling, and generally moving through everyday life.”</h4>
							<h4>Davwinder Sheena, Co-Founder</h4>
							<center><img style={{height:"150px", width:"150px"}}src={require('../../assets/image/logo.png')}/></center>
							
							<h4>“The sound fundamentals of acoustic engineering and audiology have proven that our process allows your custom IEMS to conform precisely to your inner ear canal. This provides unparalleled isolation (up to 36dB), superior fidelity, minimal acoustic interference and a perfect fit.”</h4>
							<b><h4>Balvinder Singh, Co-Founder</h4></b>
						</div>
						<div className="col-md-6">
							<b><h2>Who We Are</h2></b>
							<h4>We are a group of audiologists, engineers, and musicians dedicated to providing a uniquely personal listening experience for performing artists, studio engineers, audiophiles and anyone who loves hearing all of music’s clarity, nuance, and detail.</h4>
							<b><h2>Why We’re Different</h2></b>
							<h4>We’re approaching in-ear monitors in a whole new way, using science that leverages our innovations in the medical, music, acoustic and aerospace fields to craft in-ear monitors that are as unique as you are—from custom precision-tuned systems to personalized finishes that let your monitors become an extension of your varied lifestyle.</h4>
							<h4>With Stealth Sonics, you’ll enjoy the utmost sonic accuracy and advanced hearing protection, in total style and comfort. We offer a full range of universal and custom-molded options, with versatile accessories for a one-of-a-kind experience. Our systems will take you from the studio to the stage to the street, without missing a beat.</h4>
						</div>
					</div>
					</div>
				</div>
			</div>
		)
	}
}
export default About;