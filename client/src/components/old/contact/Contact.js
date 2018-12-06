import React, { Component } from 'react';


class Contact extends Component {
	render() {
		return(
			<div>
				<img style={{height:"300px", width:"1400px", marginLeft: "0px"}} src={require('../../assets/image/supportknobs.jpg')}/>
				<br/><br/><br/>				
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1>Drop us a Beat!</h1>
							<h4>Below is a list of all of our dealers in the United States and International Distributors.
							If there is an issue with any of the StealthSonics products that you purchased and it is within warranty, please reach out to the partner that you purchased it from. If you have any further questions, please fill out this contact form to the right and we will get back to you shortly.
							<br/> Thank you!</h4><br/><br/>
							<div className="row">
								<div className="col-md-6">
									<b><span>NORTH AMERICA & CANADA</span></b>
										<p>Chandra Lynn<br/>
										   Owner<br/>
										   Glow Marketing LLC<br/>
										   Chandra@glowmarketing.com
										</p>
								</div>
								<div className="col-md-6">
									<b><span>LATIN AMERICA</span></b>
										<p>Chris Adams<br/>
										   Studio Sound International, LLC<br/>
										   Mission Viejo, CA 92692<br/>
										   chris@studiosoundintl.com<br/>
										   Cell: +1 (949)690-8388<br/>
										   Work: +1 (949) 460-9069
										</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
								<b><span>CHINA, HONG KONG & MACAU</span></b>
									<p>Labkable<br/>
									   Rm 916-917, Hollywood Plaza,<br/>
									   610 Nathan Road,<br/>
									   Mongkok, Hong Kong<br/>
									   Hong Kong:<br/>
									   +852 6428 3188 (Novelle Au)<br/>
									   novelleau@labkable.com
									</p>
							</div>
							<div className="col-md-6">
								<b><span>REST OF THE WORLD</span></b>
									<p>Stealth Sonics Pte. Ltd.<br/>
									   140 Paya Lebar Road<br/>
									   #01-14, AZ@Paya Lebar, Singapore<br/>
									   409015<br/>
									   sales@stealthsonics.com<br/>
									</p>
							</div>
							</div>
						</div>
						<div className="col-md-6">
							<h2>Need support? We’ve got you covered.</h2>
							<form>
							  <div className="form-group">
							    <label for="name">Your Name (required).</label>
							    <input type="text" className="form-control" />
							  </div>
							  <div className="form-group">
							    <label for="email">Your Email (required)</label>
							    <input type="email" className="form-control" />
							  </div>
							  <div className="form-group">
							    <label for="sub">Subject:</label>
							    <input type="text" className="form-control" />
							  </div>
							  <div className="form-group">
							    <label for="sub">Describe Your Issue:</label>
							    <textarea type="text" className="form-control" />
							  </div>
							  <button type="submit" className="btn btn-lg">Send</button>
							</form>
						</div>
					</div>
				</div>
								
    		<div id="google_translate_element"/>
			</div>
		)
	}
}
export default Contact;