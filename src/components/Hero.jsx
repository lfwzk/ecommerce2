import React from 'react'
import img1  from '../images/banner1.jpg'
import img2 from '../images/banner2.jpg'

export const Hero = () => {
  return (
    <>
 <section id="billboard" className="overflow-hidden">

<button className="button-prev">
  <i className="icon icon-chevron-left"></i>
</button>
<button className="button-next">
  <i className="icon icon-chevron-right"></i>
</button>
<div className="swiper main-swiper">
  <div className="swiper-wrapper">
  <div className="swiper-slide" style={{backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>

      <div className="banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Summer Collection</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <div className="btn-wrap">
                <a href="shop.html" className="btn btn-light btn-medium d-flex align-items-center" tabIndex="0">Shop it now <i className="icon icon-arrow-io"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-slide" style={{backgroundImage: `url(${img2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>

      <div className="banner-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Casual Collection</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <div className="btn-wrap">
                <a href="shop.html" className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabIndex="0">Shop it now <i className="icon icon-arrow-io"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</>
  )
}
