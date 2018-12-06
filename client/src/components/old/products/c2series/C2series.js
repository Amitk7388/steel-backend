import React, { Component } from 'react'

class C2series extends Component {
	render() {
		return(
			<div>
				<img style={{height:"450px", width:"1350px"}} src={require('../../../assets/image/rocker_18538390.jpg')}/>
			<div className="row" style={{width:"100%", height:"500px", backgroundColor:"black"}}>
				<h1>Professional musicians love the warm, full-bodied bass
						and silky midrange and highs.</h1>
				<div className="col-md-6">
					<img style={{height:"400px", width:"400px", marginLeft:"120px"}} src={require('../../../assets/image/U2_homeC.png')}/>
				</div>
				<div className="col-md-6">
					<img style={{height:"420px", width:"500px", marginLeft:"120px"}} src={require('../../../assets/image/u2_rider.png')}/>
				</div>

			</div>
			</div>
		)
	}
}
export default C2series;