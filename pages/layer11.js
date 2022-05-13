import Head from 'next/head'


export default function Layer11() {
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
                <div className="about-bottom-left mb-30 clearfix text-style">
                  <h2>Below Are The Products We Detected From JCS. <br/>Does This Look Right?</h2>
                </div>
                <div className="row pb-100">
                <div className="col-12">
                  <table class="table table-borderless custom-tbl text-left">
                    <thead>
                      <tr>
                        <th scope="col">Item#</th>
                        <th scope="col">Product Name/ID</th>
                        <th scope="col">Company</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Stock</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="tbl-bg-white">
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalcenter">Launch PopUp</button>
                        </td>
                      </tr>
                      <tr class="tbl-bg-white">
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                      </tr>
                      <tr class="tbl-bg-white">
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                      </tr>
                      <tr class="tbl-bg-white">
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                        <td>dad</td>
                      </tr>
                    </tbody>
                  </table>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* modal */}
  <div class="modal fade custom-modal" id="modalcenter" tabindex="-1" role="dialog" aria-labelledby="modalcenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          {/* <h5 class="modal-title" id="modalcenterTitle">Modal title</h5> */}
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h2>Upload from USB</h2>
          <p>Select a product and connect a USB into your computer as source</p>
          <table class="table table-borderless custom-tbl text-left">
              <thead>
                <tr>
                  <th scope="col">Item#</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Vendor</th>
                  <th scope="col">SKU</th>
                </tr>
              </thead>
              <tbody>
              <tr class="tbl-bg-white">
                <td>1</td>
                <td>dad</td>
                <td>dad</td>
                <td>dad</td>
              </tr>
              <tr class="tbl-bg-white">
                <td>2</td>
                <td>dad</td>
                <td>dad</td>
                <td>dad</td>
              </tr>
              </tbody>
            </table>
        </div>
        {/* <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div> */}
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
    <script src="/js/jquery.min.js"></script>
      {/* bootstrap JS
		============================================ */}
    <script src="/js/bootstrap.min.js"></script>
      {/* plugins JS
		============================================ */}
      {/* main JS
		============================================ */}
    </div>

  )
}
