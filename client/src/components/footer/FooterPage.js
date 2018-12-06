import React, {Component} from 'react';
import './footer.css';

class  FooterPage extends Component{
    render(){

        var my={
            color:'gray'
        }
        var sp = {
            color:'#bfbfbf',
            icon:""
        }
        var textAl={
            textAlign: "center"
        }
        var myStyle={
            left: 0,
            bottom: 0,
            width: 1400,
            backgroundColor: '#000000',
            color: '#ffffff',
            textAlign: 'center',
            height:"150px"
        }


        var sStyle = {
            color: '#ffffff',
            textAlign: 'center'
        }
        return(
            <body>



            <div>

             <div class="container-fluid black-footer margetop">
             
             <div class="row margebottom">

             <div class="col-md-3 col-12">

             <div class="col-12">
             <a href="https://stealthsonics.com/privacy/">
             <button class="btn blackbtn round"><i class="fas fa-lock"></i>&nbsp;&nbsp;&nbsp;&nbsp;Privacy</button>
             </a>
             </div>
             <div class="col-12">
             <a href="/contact">
             <button class="btn blackbtn round "><i class="fas fa-headset"></i>&nbsp;&nbsp;&nbsp;&nbsp;
Support</button>
             </a>
             </div>
             <div class="col-12">
             <a href="https://stealthsonics.com/terms/">
             <button class="btn blackbtn"><i class="fab fa-wpforms"></i>&nbsp;&nbsp;&nbsp;&nbsp;Terms</button>
             </a>
             </div>

             </div>
             <div class="col-md-3 col-12">
              
              <div class="col-12 margetop">
              <p class="fontPop">Stealth Sonics Facebook</p>
              </div>

              <div class="col-12">
              <a href="https://www.facebook.com/stealthsonics/">
              <img class="imgbox" src="https://stealthsonics.com/wp-content/uploads//2018/11/fb-widget.jpg"></img>
              </a>
              </div>

             </div>
             <div class="col-md-3 col-12">

             <div class="col-12 margetop">
              <p class="fontPop">Stealth Sonics Instagram</p>
              </div>

              <div class="col-12">
              <a href="https://www.instagram.com/stealthsonics/">
              <img class="imgbox" src="https://stealthsonics.com/wp-content/uploads//2018/11/insta-feed.jpg"></img>
              </a>
              </div>

             </div>
             <div class="col-md-3 col-12">

              <div class="col-12 margetop">
              <p class="fontPop">Recent Posts</p>
              </div>

              <div class="col-12">
              <img class="imgbox" src="https://stealthsonics.com/wp-content/uploads//2018/11/fb-widget.jpg"></img>
              </div>

             </div>


             </div>
             <br/>
<hr class="tip" />
             <div class="row margebottom">
             
             <br>
             </br>
             <h5 class="textcento">© 2018 Stealthsonics</h5>

             </div>
             
             
             </div>




            </div>

            </body>

        );
    }
}



export default FooterPage;