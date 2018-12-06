// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './utils/setAuthToken';

// import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';
// import Landing from './components/layout/Landing';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import { Provider } from 'react-redux';
// import store from './store';
// import './App.css';
// import { setCurrentUser, logoutUser } from './actions/authAction';
// import { clearCurrentProfile } from './actions/profileActions';
// import Dashboard from './components/dashboard/Dashboard';
// import CustomOrder from "././components/customOrder/CustomOrder";

// import About from  "././components/about/About";
// import Custom from  "././components/custom/Custom";
// import Thesciencce from  "././components/theScience/TheScience";
// import News from  "././components/news/News";
// import MediaKit from  "././components/media/MediaKit";
// import Contact from  "././components/contact/Contact";
// import C2series from  "././components/products/c2series/C2series";
// // import InitialFont from "./components/customOrder/artwork/initialsfont/InitialsFont";
// import Review from "./components/customOrder/checkout/Review";
// import Shipping from "./components/customOrder/checkout/shipping/Shipping";

// if(localStorage.jwtToken) {

//   setAuthToken(localStorage.jwtToken);

//   const decoded = jwt_decode(localStorage.jwtToken);

//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now()/1000;
//   if(decoded.exp < currentTime) {
//     //Logout user
//     store.dispatch(logoutUser());
//     //Clear current Profile
//     store.dispatch(clearCurrentProfile());
//     //Redirect to login
//     window.location.href = '/login';
//   }
//   store.dispatch(clearCurrentProfile());
// }

// class App extends Component {

//   render() {
//    return (
//     <div>
// <Provider store={store}>
//   <Router>
//           <div className="App">
//           <Navbar />

//             <Route exact path="/" component={Landing}/>
//             <div className="">
//               <Route exact path="/register" component={Register}/> 
//               <Route exact path="/login" component={Login}/>  
//               <Route exact path="/dashboard" component={Dashboard}/> 
//               <Route exact path="/customorder" component={CustomOrder}/>    

//               <Route path="/about" component={About}/> 
//               <Route path="/custom" component={Custom}/>
//               <Route path="/thesciencce" component={Thesciencce}/> 
//               <Route path="/news" component={News}/> 
//               <Route path="/mediakit" component={MediaKit}/>
//               <Route path="/contact" component={Contact}/>
//               <Route path="/c2series" component={C2series}/>  
//               <Route path="/review" component={Review}/> 
//               <Route path="/shipping" component={Shipping}/>                   
//             </div>
//             {/* <InitialFont /> */}
//             {/* <Review /> */}
//             <Footer />
//           </div>
//         </Router>
//       </Provider>
//     </div>        
//     );
//   }
// }

// export default App;

// // initialName ={this.props.initialNames}
import React, { Component } from 'react';
//import { Router, Route } from 'react-router-dom';

 import Navbars from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import About from  "././components/about/About";
import { setCurrentUser, logoutUser } from './actions/authAction';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';


import { clearCurrentProfile } from './actions/profileActions';


import { Provider } from 'react-redux';
import store from './store';



import Dashboard from './components/dashboard/Dashboard';

// import Navbar from "././components/navbar/Navbar";
import CustomOrder from "././components/customOrder/CustomOrder";
// import Canvas from "././components/customOrder/facePlate/Canvas";
// import Canvass from "././components/customOrder/facePlate/Canvass";
// import ConnectionChart from "././components/customOrder/facePlate/ConnetChart";
// import DemoCanvas from "././components/customOrder/facePlate/DemoCanvas";
// import DemoFun from "././components/customOrder/facePlate/DemofFun";
// import Slider from "././components/slider/Slider";
// import About from  "././components/customOrder/about/About";
import Art from "./components/artist/Artist";
import Custom from "././components/custom/Custom";
import Thesciencce from "././components/theScience/TheScience";
//import MainArea from  "././components/news/MainArea";
import MainArea from "././components/news/News";
import MediaKit from "././components/media/MediaKit";
import Contact from "././components/contact/Contact";
import C2series from "././components/products/c2series/C2series";
import C4series from "././components/products/c4series/C4series";
import C9series from "././components/products/c9series/C9series";
import U2series from "././components/products/u2series/U2series";
import U4series from "././components/products/u4series/U4series";
import U9series from "././components/products/u9series/U9series";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterPage from "././components/footer/FooterPage";
import Canjam from "././components/news/canjam-london/Canjam";
import Music from "././components/news/musicin/Music";
import MixMagazine from "././components/news/mix-magazine-covers-stealth-sonics/MixMagazine";
import DaveRat1 from "././components/news/dave-rat-of-rat-sound-gets-custom-stealth-sonics/DaveRat";
import LaniseHuges from "././components/news/drummer-lanise-hughes-namm/LaniseHuges";
import Drummer from "././components/news/drummer-mauricio-claveria-soundcheck-xpo/Drummer";
import SummerNamm from "././components/news/going-to-summer-namm/SummerNamm";
import KennyMoran from "././components/news/kenny-moran-namm-2018/KennyMoran";
import MajorHifi from "././components/news/major-hifi-covers-stealth-sonics-launch/MajorHifi";
import SoundGirl from "././components/news/soundgirls-org-raves-about-stealth-sonics/SoundGirl";
import PalmExpo from "././components/news/palm-expo-in-mumbai/PalmExpo";
import CanjamSingapr from "././components/news/stealth-sonics-canjam-singapore/CanjamSingapr";
import DebutAtCanjam from "././components/news/stealth-sonics-debuts-at-canjam-global/DebutAtCanjam";
import Entech2018 from "././components/news/stealth-sonics-entech-2018-in-australia/Entech2018";
import BombayIndia from "././components/news/stealth-sonics-is-a-bollywood-hit-at-palm-expo-bombay-india/BombayIndia";
import FaceBookInsta from "././components/news/stealth-sonics-is-now-on-facebook-and-instagram/FaceBookInsta";
import SoundCheck from "././components/news/stealth-sonics-soundcheck-xpo-in-mexico-city/SoundCheck";
import TonyVincent from "././components/news/tony-vincent-takes-stealth-sonics-on-the-road/TonyVincent";


import Review from "./components/customOrder/checkout/Review";
import Shipping from "./components/customOrder/checkout/shipping/Shipping";


import Home from "././components/home/Home";
import PrivateRoute from '././components/common/PrivateRoute'

if(localStorage.jwtToken) {

  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Clear current Profile
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = '/login';
  }
  store.dispatch(clearCurrentProfile());
}

class App extends React.Component {
  
  render() {
    return (
      <div>
        
        <Provider store={store}>
        
          <BrowserRouter>
            <div>
           
            <Navbars/>
            <Route exact path="/" component={Home} />
                <Route  path="/register" component={Register}/>
                <Route exact path="/login" component={Login} />
                
                <Route exact path="/customorder" component={CustomOrder} />

                <Route path="/shipping" component={Shipping} />

                <Route path="/about" component={About}/>
                <Route path="/artist" component={Art} />
                <Route path="/custom" component={Custom} /> 
                <Route path="/thesciencce" component={Thesciencce} />
                <Route path="/news" component={MainArea} />

                <Route path="/mediakit" component={MediaKit} />
                <Route path="/contact" component={Contact} />
                <Route path="/c2series" component={C2series} />
                <Route path="/c4series" component={C4series} />
                <Route path="/c9series" component={C9series} />
                <Route path="/u2series" component={U2series} />
                <Route path="/u4series" component={U4series} />
                <Route path="/u9series" component={U9series} />
                <Route path="/canjam-london" component={Canjam} />

                <Route path="/dave-rat-of-rat-sound-gets-custom-stealth-sonics" component={DaveRat1} />
                <Route path="/drummer-lanise-hughes-namm" component={LaniseHuges} />

                <Route path="/drummer-mauricio-claveria-soundcheck-xpo" component={Drummer} />
                <Route path="/going-to-summer-namm" component={SummerNamm} />
                <Route path="/kenny-moran-namm-2018" component={KennyMoran} />
                <Route path="/major-hifi-covers-stealth-sonics-launch" component={MajorHifi} />
                <Route path="/soundgirls-org-raves-about-stealth-sonics" component={SoundGirl} />
                <Route path="/palm-expo-in-mumbai" component={PalmExpo} />
                <Route path="/stealth-sonics-canjam-singapore" component={CanjamSingapr} />
                <Route path="/stealth-sonics-debuts-at-canjam-global" component={DebutAtCanjam} />
                <Route path="/stealth-sonics-entech-2018-in-australia" component={Entech2018} />
                <Route path="/stealth-sonics-is-a-bollywood-hit-at-palm-expo-bombay-india" component={BombayIndia} />
                <Route path="/stealth-sonics-is-now-on-facebook-and-instagram" component={FaceBookInsta} />
                <Route path="/stealth-sonics-soundcheck-xpo-in-mexico-city" component={SoundCheck} />
                <Route path="/tony-vincent-takes-stealth-sonics-on-the-road" component={TonyVincent} />

                <Route path="/mix-magazine-covers-stealth-sonics" component={MixMagazine} />
                <Route path="/musicin" component={Music} />
                <Route path="/customOrder/facePlate" component={CustomOrder} />
                <Route path="/review" component={Review} />
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  
               </Switch>
              
            </div>

          </BrowserRouter>
          
        </Provider>
        <FooterPage />
      </div>

    )
  }
}


export default App;
