import React, { Component } from 'react';


class MediaKit extends Component {
	render() {
		return(
			<div>
				<div>
					<img style={{height:"250px", width:"1350px"}} src={require('../../assets/image/media_b.jpg')}/>
					<br/><br/>
				<div className="container">	
					<div className="row">		
						
							<div className="col-md-4">
								<center><button style={{width:"300px", height:"90px"}} className="btn btn-info"><i className="glyphicon glyphicon-volume-down"></i> DOWNLOAD THE STEALTH <br/>SONICS MEDIA KIT</button></center>						
								<br/>
							</div>
						
						<div className="col-md-4">
							<div>							
								<div>
									<img style={{height:"150px", width:"250px", marginLeft: "30px"}}src={require('../../assets/image/Screen-Shot-2018-08-09-at-5.50.07-PM.png')}/>
								</div><br/>
								<h2>Music Inc. Features Stealth Sonics</h2>
							<h4>Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being part of this awesome article! Look out for it on www.musicincmag.com.</h4>
							<center><button className="btn btn-info">Read More</button></center>						
							<br/>
							</div>
						</div>
						<div className="col-md-3">
						<div>
							
							<div>
								<img style={{height:"150px", width:"250px", marginLeft: "10px"}}src={require('../../assets/image/canjam.png.jpg')}/>
							</div><br/>
							<h2>Stealth Sonics Takes Global Stage at CanJam London</h2>

						<h4>Singapore-based music technology manufacturer to debut groundbreaking precision-tuned in-ear monitor systems.</h4>
						<center><button className="btn btn-info">Read More</button></center>						
						<br/>

						</div>
					</div>
					</div>
				</div>
			</div>
		</div>			
		)
	}
}
export default MediaKit