import Head from 'next/head'


export default function Layer13() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Jewelify</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Add your site or application content here */}
      <header className="inner-header">
        <nav className="main-nav">
          <div className="container">
            <div className="nav-wrapper">
              <div className="logo-wrapper">
                <a> <img src="/img/logo.svg" alt="jwelify" /> </a>
              </div>
              <p></p>
              <div className="prof-img">
                <img src="/img/head-prof.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="wrapper ">
        {/* pricing area
      ============================================ */}
        <div id="pricing-area" className="pricing-area custom-border" style={{ backgroundColor: '#f3fbfe' }}>
          <div className="container pt-100">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="row pb-100">
                  <div className="col-12 text-center">
                    <img src="/img/sell-online.png" style={{ maxWidth: '180px' }} alt="" />
                    <br />
                    <div className="col-md-12 text-center">
                      <h2>You’re All Set To Start Selling Online</h2> <br />
                    </div>
                    <form action className="int-form">
                      <button className="main-btn btn-lg btn-block bg-light-blue">
                        <a href="#">Next</a>
                      </button><br /><br />
                      <br /> <br />                             </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact area
      ============================================ */}
          <div className="contact-area">
            <div className="container">
              <div className="row">
                <div className="conatct-info fix">
                  <div className="col-md-5 col-sm-4 text-style">
                    <h2>Jewelify</h2>
                    <p>Copyright © 2021
                      <a href="http://bootexperts.com/" target="_blank">Jewelify</a><br />
                      .All right reserved.</p>
                  </div>
                  <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
                    <h3 className="mb-30">Services</h3>
                    <ul>
                      <li><a href="#">service - 1</a></li>
                      <li><a href="#">service - 2</a></li>
                      <li><a href="#">service - 3</a></li>
                      <li><a href="#">service - 4</a></li>
                    </ul>
                  </div>
                  <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
                    <h3 className="mb-30">Company</h3>
                    <ul>
                      <li> <a href="#">Work</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Resources</a></li>
                      <li><a href="#">Pricing</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-4 text-style t-m-res">
                    <h3 className="mb-30">Useful Links</h3>
                    <div className="footer-icon">
                      <ul>
                        <li><a><img src="/img/facebook.svg" alt="" width="20px" /></a> </li>
                        <li><a><img src="/img/instagram.svg" alt="" width="20px" /></a> </li>
                        <li><a><img src="/img/twitter.svg" alt="" width="20px" /></a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* start scrollUp
      ============================================ */}
          {/*<div id="toTop">
          <i class="fa fa-chevron-up"></i>
      </div>
  </div>*/}
          {/* jquery
		============================================ */}
          {/* bootstrap JS
		============================================ */}
          {/* plugins JS
		============================================ */}
          {/* main JS
		============================================ */}
        </div></div></div>

  )
}
