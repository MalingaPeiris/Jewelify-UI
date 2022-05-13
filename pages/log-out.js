import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Jewelify</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrapper index-page">
        <header className="header-area">
          {/* Menu Area
          ============================================ */}
          <div id="main-menu" className="sticker">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  <div className="logo float-left navbar-header">
                    <h2 className="logo"><a href="index.html">Jewelify</a></h2>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
                      <img src="/img/menu.svg" className="menu-open" alt="" />
                    </button>
                  </div>
                  <div className="main-menu text-center collapse navbar-collapse" id="main-menu-2">
                    <nav>
                      <ul className="menu one-page">
                        <li className="active"><a href="#home-area">Home</a></li>
                        <li><a href="#about-area">Services</a></li>
                        <li><a href="#features-area">Price</a></li>
                        <li><a href="#screenshort-area">About Us</a></li>
                        <li><a href="#pricing-area">Contact</a></li>

                        {/* {!session && <>
                          <a onClick={signIn} className="get-started-btn scrollto float-right">Sign In</a>
                        </>}

                        {session && <>
                          <Link href="/">
                            <a onClick={signOut} className="get-started-btn scrollto float-right">Sign Out</a>
                          </Link>
                        </>} */}


                      </ul>
                    </nav>
                  </div>
                  {/*<a href="#about" class="btn1">Sign In</a>*/}
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* sliders area
      ============================================ */}
        <div id="home-area" className="main-slider-area bg-oapcity-40 sm-height-none">
          <div className="container">
            <div className="row">
              <div className="home-sliders clearfix mid-mrg">
                <div className="col-md-7 col-sm-7">
                  <div className="top-text pt-20">
                    <div className="slider-text">
                      <h2>Start Selling<br />Online With One Click</h2>
                      <p>Jewelify is an easy to use platform that enables you to sync your in store POS system with any platform to instantly start selling online.</p>
                      <div className="button-set">
                        <Link href="/pricing">
                          <a className="banner-button">
                            GET STARTED
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-sm-5 hero-right">
                  <div className="over">
                    <div className="inner-over">
                      <div className="img-container">
                        <img src="/img/hero-short-img.png" alt="" className="img-fluid" />
                      </div>
                      <h4 className="price">$32.000</h4>
                      <div className="stars">
                        <img src="/img/Star 1.png" alt="" />
                        <img src="/img/Star 1.png" alt="" />
                        <img src="/img/Star 1.png" alt="" />
                        <img src="/img/Star 1.png" alt="" />
                        <img src="/img/Star 1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="slider-imgj under">
                    <img src="/img/hero-big-img.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="sync">
          <div className="container">
            <div className="row mx-0">
              <div className="col-12">
                <h2>Seamlessly Sync Offline and Online.</h2>
                <h6>More Orders. More Sales. More Profits.</h6>
                <p>Maximize returns by growing your jewelry store business. Integrate your on-premise legacy POS system with Jewelify’s user-friendly cloud-based platform and start selling online. Once integrated, you can:</p>
              </div>
            </div>
            <div className="row boxes-row">
              <div className="col-md-6 box-container">
                <div className="box">
                  <img src="/img/glob.png" alt="" />
                </div>
                <span className="bold-line">Sell online</span>
              </div>
              <div className="col-md-6 box-container">
                <div className="box">
                  <img src="/img/transfer.png" alt="" />
                </div>
                <span className="bold-line">Sync online and offline</span>
              </div>
              <div className="col-md-6 box-container">
                <div className="box">
                  <img src="/img/exp.png" alt="" />
                </div>
                <span className="bold-line">Experience more enhanced analytics</span>
              </div>
              <div className="col-md-6 box-container">
                <div className="box">
                  <img src="/img/effeicient.png" alt="" />
                </div>
                <span className="bold-line">Effciently manage inventory and payment transactions</span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <Link href="/pricing">
                  <a className="banner-button">
                    GET STARTED NOW
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-cont">
                  <h2>Jewelify- Features and Benefits</h2>
                  <p>Software exclusively designed for jewelry store owners. <br />
                    Here’s how we aim to take your offline jewelry business to the next level of success like never before:</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* simplify-area */}
        <div id="simplify-area" className="all-about pt-120">
          <div className="container">
            <div className="row flex-property">
              <div className="col-md-6 col-sm-12">
                <div className="video-img-icon">
                  <div className="about-bottom-img-1">
                    <img src="/img/simplify.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className=" clearfix text-style">
                  <h2>Simplify Inventory <br /> Management</h2>
                  <p className="about-pb">Take in-store inventory online and get rid of manual data input. Perform time-consuming tasks in just a few clicks:</p>
                  <ul>
                    <li>Update stock</li>
                    <li>Manage price levels</li>
                    <li>Add new products automatically</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* streamline-area */}
        <div id="streamline-area" className="all-about pt-120">
          <div className="container">
            <div className="row flex-property">
              <div className="col-md-6 col-sm-12">
                <div className=" clearfix text-style">
                  <h2>Streamline Orders</h2>
                  <p className="about-pb">As offline and online systems are synced, you can download web orders into your POS right away. It helps you streamline orders so you can:</p>
                  <ul>
                    <li>Avoid overselling</li>
                    <li>Lower the risk of cutting customer orders due to stock shortage</li>
                    <li>Operate more efficiently</li>
                    <li>Keep track of real-time available inventory</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="video-img-icon">
                  <div className="about-bottom-img-1">
                    <img src="/img/stream.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* offer area */}
        <div id="offer-area" className="all-about pt-120">
          <div className="container">
            <div className="row flex-property">
              <div className="col-md-6 col-sm-12">
                <div className="video-img-icon">
                  <div className="about-bottom-img-1">
                    <img src="/img/offer.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="clearfix text-style">
                  <h2>Offer Cross-Channel <br /> Promotions</h2>
                  <p className="about-pb">Expand your customer base and boost sales strategically through cross-channel promotions. With Jewelify seamless POS and ecommerce integration, give your customers the power and freedom to redeem:</p>
                  <ul>
                    <li>Coupons</li>
                    <li>Gift cards</li>
                    <li>Loyalty rewards</li>
                    <li>Discounts online and in-store</li>
                  </ul>
                  <br />
                  <p>
                    Additionally, cross-channel promotions and incentives help: <br />Increase revenues
                  </p>
                  <ul>
                    <li>Improve customer base</li>
                    <li>Deliver excellent shopping experience</li>
                    <li>Lower fraud risk (common in manually entered discounts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* know area */}
        <div id="about-area" className="all-about ptb-120">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className=" clearfix text-style pt-80">
                  <h2>Know Your Customer <br /> Better</h2>
                  <p className="about-pb">By integrating your legacy POS system with Jewelify, you can get clear insights about your customers and their purchase behavior. This can:</p>
                  <ul>
                    <li>Improve your CRM </li>
                    <li>Let you make tailored recommendations</li>
                    <li>Promote your offers and items more effectively</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="about-bottom-img-2">
                  <img src="/img/girl-yellow.png" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button-set text-center">

                  <Link href="/pricing">
                    <a className="banner-button">
                      GET STARTED NOW
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* testimonial area
      ============================================ */}
        <div id="testimonial-area" className="all-about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="testimonial-title">What Our Customers Say!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-12 col-xs-12 pad b-m-res">
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 pad b-m-res">
                <div className="text-center txt">
                  <a href="#"><img src="/img/Ellipse 1.png" alt="" className="mb-20" /></a>
                  <h3>Esther Howard</h3>
                  <p className="color font-weight">marketing SA company</p>
                  <p>The integration of our legacy POS with our online partners through Jewelify has helped us reach out to more customers and boost sales in the fastest time. We highly recommend to it all jewelry owners who haven’t gone online yet.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 pad b-m-res">
                <div className="text-center txt">
                  <a href="#"><img src="/img/Ellipse 1 (1).png" alt="" className="mb-20" /></a>
                  <h3>Esther Howard</h3>
                  <p className="color font-weight">marketing SA company</p>
                  <p>Jewelify has simplified selling jewelry for us as we can manage online orders, inventory, and update stock promptly without any delay. We are fully aware of our inventory levels and manage them strategically so that all orders are met successfully.</p>
                </div>
              </div>
              <div className="col-md-2 col-sm-12 col-xs-12 pad b-m-res">
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button-set text-center">
                  <a className="button mt-50 font-weight blc-clr" href="#">
                    View All →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How area */}
        <section id="how">
          <div className="container">
            <div className="how-inner">
              <div className="row">
                <div className="col-lg-8 col-md-6 left-part">
                  <h2>Let Us Show You How.</h2>
                  <p>Allow us to take you on a quick and no-pressure tour of our platform, Jewelify. We’ll show you how our platform synchronizes your offline and online business for success.Synchronize Online Sales, Shoppers, and Inventory through Jewelify.</p>
                  <div className="button-set">
                    <a className="banner-button" href="#">
                      REQUEST A
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 right-part">
                  <img src="/img/how-full-img.png" alt="" className="four-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing area */}
        <section id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title-cont">
                  <h2>Budget-Friendly Pricing Plans</h2>
                  <p>We have a plan for every budget. Scale and upgrade your plan as you grow. Explore our different pricing plans to select the one that fits your needs and budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row pt-50 mr-30 ml-30 mrl-res">
                <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                  <div className="single-price-package">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="price-list text-style">
                          <h3 className="pb-20">What Include</h3>
                          <ul className="theme-list">
                            <li>Eget nunc scelerisque viverra</li>
                            <li>Mauris in aliquam</li>
                            <li>Nunc faucibus a pellentesque sit</li>
                            <li>Ut sem viverra aliquet</li>
                            <li>Pretium vulputate sapien</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res med">
                  <div className="single-price-package">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="price-list text-style">
                          <h3 className="pb-20">Everything in basic +</h3>
                          <ul className="theme-list">
                            <li>Eget nunc scelerisque viverra</li>
                            <li>Mauris in aliquam</li>
                            <li>Nunc faucibus a pellentesque sit</li>
                            <li>Ut sem viverra aliquet</li>
                            <li>Pretium vulputate sapien</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 b-m-res margin-bottom-res">
                  <div className="single-price-package">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="price-title">
                          <h3 className="pb-10">Professional</h3>
                        </div>
                        <div className="price">
                          <a href="#" className="btn3">Get in touch →</a>
                          <p className="pt-10">Lorem Ipsum is simply dummy text.</p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="price-list text-style">
                          <h3 className="pb-20">Everything in Pro +</h3>
                          <ul className="theme-list">
                            <li>Eget nunc scelerisque viverra</li>
                            <li>Mauris in aliquam</li>
                            <li>Nunc faucibus a pellentesque sit</li>
                            <li>Ut sem viverra aliquet</li>
                            <li>Pretium vulputate sapien</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="button-set text-center">
                  <Link href="/pricing">
                    <a className="banner-button" href="#">
                      GET STARTED NOW
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact area
      ============================================ */}
        <div className="contact-area">
          <div className="container">
            <div className="row">
              <div className="conatct-info fix">
                <div className="col-md-5 col-sm-4 text-style">
                  <h2>Jewelify</h2>
                  <p>Copyright © 2021
                    <a href="http://bootexperts.com/" rel="noreferrer" target="_blank">Jewelify</a><br />
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
      </div>
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


export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};