import React, { Component } from 'react';
import './MediaKit.css';



class MediaKit extends Component {
  render() {
    return (


      <div class="container nopad nomaj2">
        <div class="jumbooo">
          <h3 class="newshead"> Press Coverage and Media Kit</h3>
        </div>

        <div class="row kit-margetop">

          <div class="col-md-4 col-12">
            <a href="https://drive.google.com/drive/folders/1Bz-yS9lkpafHkpxuHibyCIK4txjMs0dq">
              <button class="btn mediakit-btn btn-primary"><i class="fas fa-volume-up"></i>&nbsp;DOWNLOAD THE<br></br> STEALTH SONICS MEDIA KIT</button></a>
          </div>
          <div class="col-md-4 col-12">
            <div class="card cardboxes-kit">
              <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/08/Screen-Shot-2018-08-09-at-5.50.07-PM.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Music Inc. Features Stealth Sonics</h5>
                <p class="card-text stretch">Music Inc Magazine Editor Kasia Fejklowicz interviewed Stealth Sonics’ Co-Founder Dindae Sheena for their August issue. Thanks to Kasia and also to Dave Rat of Rat Sound and SoundTools for being part of this awesome article! Look out for it on www.musicincmag.com</p>
                <a href="https://stealthsonics.com/musicinc/" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="card cardboxes-kit">
              <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/07/canjam.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Stealth Sonics Takes Global Stage at CanJam London</h5>
                <p class="card-text stretch">Singapore-based music technology manufacturer to debut groundbreaking precision-tuned in-ear monitor systems.</p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-md-4 col-12">
          </div>
          <div class="col-md-4 col-12">
            <div class="card cardboxes-kit">
              <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/05/bolg1.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Mix Magazine Covers Stealth Sonics</h5>
                <p class="card-text stretch">Read article here: https://www.mixonline.com/technology/review-three-for-listening</p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="card cardboxes-kit">
              <img class="card-img-top card-img-home" src="https://stealthsonics.com/wp-content/uploads//2018/05/major_hifi.png" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Major Hifi Covers Stealth Sonics Launch</h5>
                <p class="card-text stretch">See article here: http://majorhifi.com/stealth-sonics-iems/</p>
                <a href="https://stealthsonics.com/major-hifi-covers-stealth-sonics-launch/" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
export default MediaKit