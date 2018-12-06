import React, { Component } from 'react';


class Custom extends Component {
	render() {
		const style = {
			color: "white",
			textAlgin:"center",
			marginLeft: "39%",
			paddingTop:"55px"
		}
		const h = {
			textAlign: "center",
		    fontsize: "50px",
		    borderBottom: "1px solid #e8e6e6",
		    width: "80%",
		    margin: "auto",
		    color: "#96deee",
		    marginBottom:"20px"
		}
		const card = {
			border: '1px solid',
		}
	
		return(
			<div>				
				<div style={{backgroundColor:"black", height:"150px", width:"100%"}}>					
					<h2 style={style}>CHOOSE YOUR MODEL</h2>
				</div>	
			<div className="container">			
				<div className="row">
					<div className="col-md-4">
						<div style={card}>
							<h2 style={h}>C2</h2>
						<div>
								<img style={{height:"150px", width:"250px", marginLeft: "60px"}}src={require('../../assets/image/1.png')}/>
							</div><br/><br/>
						<h4>The C2 two-driver in-ear monitor features a finley-tuned, crossover-free hybrid driver design for a smooth sonic experience that’s ideal for musicians and music lovers. Our in-ears are optimized for use for both on and off stage. Housed in acoustically-optimized composite material, the Stealh Sonics C2 Custom IEM offers solid details and covers ar frequency range of 20Hz to 20 kHz.</h4>
						<center><button className="btn btn-info">Know More</button></center>						
						<br/>
						</div>
					</div>
					<div className="col-md-4">
						<div style={card}>
							<h2 style={h}>C4</h2>
							<div>
								<img style={{height:"150px", width:"250px", marginLeft: "60px"}}src={require('../../assets/image/2.png')}/>
							</div><br/><br/>
						<h4>The four-driver C4 in-ear monitor features an all-balanced armature design favoured by music producers, music lovers and anyone seeking the flattest response possible. Housed in acoustically-optimized composite material, the Stealth Sonics C4 Custom IEMs offers advanced detail and crisp transients, and covers a frequency range of 18 Hz to 23 kHz</h4>
						<center><button className="btn btn-info">Know More</button></center>						
						<br/>
						</div>
					</div>
					<div className="col-md-4">
						<div style={card}>
							<h2 style={h}>C9</h2>
							<div>
								<img style={{height:"150px", width:"250px", marginLeft: "60px"}}src={require('../../assets/image/3.png')}/>
							</div><br/><br/>
						<h4>Our flagship nine-driver system is a hybrid driver model used by professional musicians, mastering engineers, audiophiles and anyone who wants Custom IEMs that offer the most accurate response possible. Housed in acoustically-optimized composite material, the Stealth Sonics C9 Custom IEM reproduces extreme detail and covers our widest frequency range of 18 Hz to 40 kHz</h4>
						<center><button className="btn btn-info">Know More</button></center>						
						<br/>
						</div>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
export default Custom;