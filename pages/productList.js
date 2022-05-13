import Head from 'next/head'
import { useCallback, useState } from 'react'
import Link from 'next/link'

let products = [];
let filteredProductList = [];


export default function Layer15() {

  products = [
    {
      stockno: "1003",
      descript: ".50 ct tw",
      qty: "5",
      companyName: "TGT",
      category: "Dia Cocktl Rings",
      cost: "900"
    },
    {
      stockno: "2003",
      descript: "Platinum Rings",
      qty: "100",
      companyName: "TGT",
      category: "Rings",
      cost: "900"
    },
    {
      stockno: "375",
      descript: "Bracelet",
      qty: "7",
      companyName: "TGT",
      category: "Bracelet",
      cost: "900"
    },
    {
      stockno: "1003",
      descript: "Silver Rings",
      qty: "15",
      companyName: "TGT",
      category: "Rings",
      cost: "900"
    },
    {
      stockno: "1003",
      descript: "Belly chain",
      qty: "25",
      companyName: "TGT",
      category: "Dia Cocktl Rings",
      cost: "900"
    },
    {
      stockno: "1003",
      descript: "Barrette",
      qty: "1",
      companyName: "TGT",
      category: "Dia Cocktl Rings",
      cost: "900"
    },
    {
      stockno: "1003",
      descript: "Anklet",
      qty: "5",
      companyName: "TGT",
      category: "Anklet",
      cost: "900"
    },
    {
      stockno: "1003",
      descript: ".50 ct tw",
      qty: "5",
      companyName: "TGT",
      category: "Dia Cocktl Rings",
      cost: "900"
    }
  ]

  filteredProductList = [];



  let prodCategories = [];
  let companies = [];
  let isFilterVisisble = false;
  companies.push("TGT");
  prodCategories.push("Dia Cocktl Rings");
  prodCategories.push("Anklet");
  prodCategories.push("Rings");

  products.forEach(element => {
    filteredProductList.push(element);
  });

  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  const handleFilter = (event) => {
    isFilterVisibile = !isFilterVisisble;
    console.log(isFilterVisisble)


  };

  const filter = (event) => {
    console.log(event.target.value)
    const text = event.target.value;

    if (text == null || text == "") {
      filteredProductList = [];
      products.forEach(element => {
        filteredProductList.push(element);
      });

    } else {
      filteredProductList = null;
      filteredProductList = [];
      filteredProductList = products.filter(pkg => {
        return (
          pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
          pkg.descript.toUpperCase().indexOf(text.toUpperCase()) !== -1
        );
      });
    }

    console.log(filteredProductList)

  };


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
              <div className="col-md-12 ">
                <div className="about-bottom-left mb-30 clearfix text-style text-center">
                  <h2>Integrate WooCommerce And Jewelify With One Click</h2>
                </div>
                <div className="row pb-100">

                  <div class="row">
                    <div class="col-md-3 input-outer">
                      <label>Search by keyword</label>
                      <div class="form-group right-inner-addon input-container">
                        <i class="fa fa-search"></i>
                        <input type="text" onKeyPress={increment}
                          class="form-control"
                          placeholder="Type Keyword" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <button class="btn btn-custom" onClick={increment}>Add Filter&nbsp;&nbsp;<i class="fa fa-search"></i></button>
                    </div>
                    <div class="col-md-3">

                    </div>
                    <div class="col-md-3 add-prodcut">
                      <button class="btn btn-custom"><i class="fa fa-plus"></i>&nbsp;&nbsp;Add Products</button>
                    </div>
                  </div>

                  <div class="row">

                    {count % 2 == 1 ? <div><div class="col-md-2 input-outer">
                      <label>Company</label>
                      <div class="form-group right-inner-addon input-container">
                        <select class="form-control">
                          <option selected>All company</option>

                          {companies.map(companie => (
                            <option>{companie}</option>
                          ))}


                        </select>
                      </div>
                    </div>
                      <div class="col-md-2 input-outer">
                        <label>Product Type</label>
                        <div class="form-group right-inner-addon input-container">
                          <select class="form-control">
                            <option selected>All Type</option>
                            {prodCategories.map(prodCategorie => (
                              <option>{prodCategorie}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div class="col-md-2 input-outer">
                        <label>Min Stock</label>
                        <div class="form-group right-inner-addon input-container">
                          {/* <i class="fa fa-search"></i> */}
                          <input type="number"
                            class="form-control"
                            placeholder="Type Price" />
                        </div>
                      </div>
                      <div class="col-md-2 input-outer">
                        <label>Max Stock</label>
                        <div class="form-group right-inner-addon input-container">
                          {/* <i class="fa fa-search"></i> */}
                          <input type="number"
                            class="form-control"
                            placeholder="Type Price" />
                        </div>
                      </div>

                      <div class="col-md-2 input-outer">
                        <label>Min Price</label>
                        <div class="form-group right-inner-addon input-container">
                          {/* <i class="fa fa-search"></i> */}
                          <input type="number"
                            class="form-control"
                            placeholder="Type Price" />
                        </div>
                      </div>
                      <div class="col-md-2 input-outer">
                        <label>Max Price</label>
                        <div class="form-group right-inner-addon input-container">
                          {/* <i class="fa fa-search"></i> */}
                          <input type="number"
                            class="form-control"
                            placeholder="Type Price" />
                        </div>
                      </div></div> : <div></div>}

                  </div>
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
                        {filteredProductList.map(product => (
                          <tr class="tbl-bg-white">
                            <td>{product.stockno}</td>
                            <td>{product.descript}</td>
                            <td>{product.companyName}</td>
                            <td>{product.category}</td>
                            <td>{product.cost}</td>
                            <td>{product.qty}</td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                    <Link href="/upload-image">
                    <button className="main-btn btn-lg btn-block bg-light-blue">
                        <a href="">NEXT</a>
                      </button></Link><br /><br />

                  </div>
                </div>
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
    </div>

  )
}
