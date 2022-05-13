import Head from 'next/head'
import Link from 'next/link'

export default function Pricing() {

  //const [session, loading] = useSession();

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
      <div className="wrapper">
        <header className="header-area">
          {/* Menu Area
          ============================================ */}
          <div id="main-menu" className="sticker white-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <div className="logo float-left navbar-header">
                    <h2 className="logo">
                      <Link href="/">
                        Jewelify
                      </Link>
                    </h2>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
                      <img src="/img/menu.svg" className="menu-open" alt="" />
                    </button>
                  </div>
                  <div className="main-menu text-center collapse navbar-collapse" id="main-menu-2">
                    <nav>
                      <ul className="menu one-page">
                        <li className="active"> <Link href="/">
                          Home
                        </Link></li>
                        <li><a href="#about-area">Services</a></li>
                        <li><Link href="/">Price</Link></li>
                        <li><a href="#screenshort-area">About Us</a></li>
                        <li><a href="#pricing-area">Contact</a></li>

                        {/* {!session && <>
                          <a onClick={signIn} className="get-started-btn scrollto float-right">Sign In</a>
                        </>}

                        {session && <>
                          <a onClick={signOut} className="get-started-btn scrollto float-right">Sign Out</a>
                        </>} */}



                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* pricing area
      ============================================ */}
        <div id="pricing-area" className="pricing-area">
          <div className="container bg-oapcity main-slider-area border-price mt-50 pb-120">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="about-bottom-left  pricing-mrg clearfix text-style">
                  <h2>Pricing Plan</h2>
                  {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                          <br>has been the industry's standard dummy text ever since the 1500s</p>*/}
                </div>
                {/* plan page tabs */}
                <ul className="nav nav-tabs price-tabs" id="myTab" role="tablist">
                  <li className="nav-item active" role="presentation">
                    <a className="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">monthly</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">yearly</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade  in active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row pt-50 mr-30 ml-30 mrl-res">
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">BASIC</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">$99/mo</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">What Include</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">



                                  <div className="price-btn">

                                    <Link href="/paymentInfo">
                                      <button className="buttonn" type="button">Start Free
                                        Trial</button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">Pro</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">$499/mo</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">Everything in basic +</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">
                                  <Link href="/paymentInfo">
                                    <button className="buttonn" type="button">Start Free
                                      Trial</button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">Enterprise</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">Enterprise</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">Everything in Pro +</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">
                                  <Link href="/paymentInfo">
                                    <button className="buttonn" type="button">Start Free
                                      Trial</button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row pt-50 mr-30 ml-30 mrl-res">
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">BASIC</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">$89/yr</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">What Include</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">
                                  <button className="buttonn" type="button">Start Free
                                    Trial</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">Pro</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">$399/yr</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">Everything in basic +</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">
                                  <button className="buttonn" type="button">Start Free
                                    Trial</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                        <div className="single-price-package">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-title">
                                <h3 className="pb-10">Enterprise</h3>
                              </div>
                              <div className="price">
                                <h4>
                                  <span className="text-large">Enterprise</span>
                                </h4>
                                <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-5">
                              <div className="price-list text-style">
                                <h3 className="pb-20">Everything in Pro +</h3>
                                <ul className="theme-list">
                                  <li>Eget nunc scelerisque viverra</li>
                                  <li>Mauris in aliquam</li>
                                  <li>Nunc faucibus a pellentesque sit</li>
                                  <li>Ut sem viverra aliquet</li>
                                  <li>Pretium vulputate sapien</li>
                                </ul>
                                <div className="price-btn">
                                  <button className="buttonn" type="button">Start Free
                                    Trial</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand logo
      ============================================ */}
      <div className="ptb-120">
        <div className="container">
          <div className="text-center mb-10 brandlogo text-style">
            <h3>Some of our trusted client </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-2" />
            <div className="col-md-8 single-item2">
              <a href="#"><img src="/img/image 15.png" alt="" /></a>
              <a href="#"><img src="/img/image 20.png" alt="" /></a>
              <a href="#"><img src="/img/image 21.png" alt="" /></a>
              <a href="#"><img src="/img/image 22.png" alt="" /></a>
              <a href="#"><img src="/img/image 23.png" alt="" /></a>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
      {/* about area
      ============================================ */}
      <div id="about-area" className="all-about bg-blue ptb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-sm-12" />
            <div className="col-md-7 col-sm-8">
              <div className="about-bottom-left clearfix text-style">
                <h2>Lorem Ipsum is simply dummy</h2>
                <p className="about-pb">There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even sli believable Section ve suffered alteration.</p>
                <div className="about-icon">
                  <a className="link" href="#"> Discover What makes us perfect </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="about-bottom-img">
                <img src="/img/bg1.png" alt="" />
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
      {/* jquery
		============================================ */}
      {/* bootstrap JS
		============================================ */}
      {/* plugins JS
		============================================ */}
      {/* main JS
		============================================ */}
    </div>


  )
}
