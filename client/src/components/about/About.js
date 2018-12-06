import React, { Component } from 'react';
import './about.css'


class About extends Component {
	render() {
		return(
			<div>
				<div>
					<img style={{height:"300px", width:"100%"}}src={require('../../assets/image/AboutB.jpg')}/>
				</div>
				<br/>
                 <div className="container">

                  <div className="row marge-bot2">
				    <div className="col-md-6 col-12 card1">
					<h3 className="mb-10">Our Design Philosophy</h3>
					     <div className="col-12 mb-10">
						 <p className="mb-10 italic">“The sound fundamentals of acoustic engineering and audiology have proven that our process allows your custom IEMS to conform precisely to your inner ear canal. This provides unparalleled isolation (up to 36dB), superior fidelity, minimal acoustic interference and a perfect fit.”</p>
						 <h5>Balwinder Singh</h5>
						 <h5>Managing Director</h5>
						 </div>
						 <div className="col-12 mb-10">
						 <center><img style={{height:"120px", width:"120px"}}src={require('../../assets/image/logo.png')}/></center>
						 <p className="mb-10 italic"> “
Nature has already blessed us with a marvelous in-built audio system. We’re merely ensuring the precision and quality of the playback; utilizing the attributes of the natural system; and providing versatility for use in many aspects of life. They can be used while working in the studio, performing on stage, listening while relaxing exercising, traveling, and generally moving through everyday life.”</p>
						 <h5>Davwinder Sheena</h5>
						 </div>
					</div>
					<div className="col-md-6 col-12">
				     <div className="col-12 mb-10">
					 <h4>Who We Are</h4>
					 <p className="content-1">We are a group of audiologists, engineers, and musicians dedicated to providing a uniquely personal listening experience for performing artists, studio engineers, audiophiles and anyone who loves hearing all of music’s clarity, nuance, and detail</p>
					 </div>
					 <div className="col-12 mb-10">
					 <h4>Why We’re Different</h4>
					 <p className="content-1">We’re approaching in-ear monitors in a whole new way, using science that leverages our innovations in the medical, music, acoustic and aerospace fields to craft in-ear monitors that are as unique as you are—from custom precision-tuned systems to personalized finishes that let your monitors become an extension of your varied lifestyle.</p>
					 <p className="content-1">With Stealth Sonics, you’ll enjoy the utmost sonic accuracy and advanced hearing protection, in total style and comfort. We offer a full range of universal and custom-molded options, with versatile accessories for a one-of-a-kind experience. Our systems will take you from the studio to the stage to the street, without missing a beat.</p>
					 </div>
					</div>
				  </div>

				 </div>



			</div>
		)
	}
}
export default About;