import Head from 'next/head'
import Link from 'next/link'

import Stripe from "stripe";
import React, { useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Container,
  Stack,
} from "@chakra-ui/react";
const bcrypt = require('bcryptjs');

const stripePromise = loadStripe("pk_test_51JX4itAOb7pHxrW2EOFHb2DOYEDNSALi7fi8ipuGwpJ0SdKbbT4Ur0tY5otpkw1U6o0aELi9ftkEjAM56siFJugK00PDcVYkky");

export const getServerSideProps = async ctx => {

  const stripe = new Stripe("sk_test_51JX4itAOb7pHxrW20akGAPv5Snf9RNRZDBuyVjEqwu3U1A1mktlZnDiETU5tQfE7nnCuEWCKKrsYLhnZAXlXuV9C00UgwvUBBP");

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent
      }
    };
  }

  paymentIntent = await stripe.paymentIntents.create({

    amount: 150,
    currency: "usd"
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent
    }
  };
};

const onKeyUpName = (e) => {
  console.log(e.target.value);
  window.$name = e.target.value;
}

const onKeyUpEmail = (e) => {
  console.log(e.target.value);
  window.$email = e.target.value;
}

//CheckOutFormf
const CheckoutForm = ({ paymentIntent }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();
  const router = useRouter();

  const handleSubmit = async e => {
    // e.preventDefault();
    router.push('/signin');
    //   console.log("payme**********")
    //   try {
    //     const {
    //       error,
    //       paymentIntent: { status }
    //     } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
    //       payment_method: {
    //         card: elements.getElement(CardElement)
    //       }
    //     });

    //     if (error) throw new Error(error.message);

    //     if (status === "succeeded") {
    //       setCheckoutSuccess(true);
    //       destroyCookie(null, "paymentIntentId");
    //     }
    //   } catch (err) {
    //     alert(err.message);
    //     setCheckoutError(err.message);
    //   }
    // };


    // if (checkoutSuccess) {

    //   const hash = bcrypt.hashSync(window.$email, 10);
    //   // now we set user password to hashed password

    //   console.log('Sending')
    //   let data = {
    //     name: window.$name,
    //     email: window.$email,
    //     key: hash,
    //   }

    //   // alert(window.$name + " - " + window.$email)

    //   // fetch('/api/add-user', {
    //   //   method: 'POST',
    //   //   headers: {
    //   //     'Accept': 'application/json, text/plain, */*',
    //   //     'Content-Type': 'application/json'
    //   //   },
    //   //   body: JSON.stringify(data)
    //   // }).then((res) => {
    //   //   console.log('Response received')
    //   //   if (res.status === 200) {
    //   //     console.log('Response succeeded!')
    //   //   }
    //   // })

    //   router.push('/signin');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />


        {/* <button type="submit" disabled={!stripe}
          onClick={(e) => handleSubmit()} className="c_submit-btn"><a href="#">Submit</a>
          <svg width={22} height={15} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button> */}

        <Link href="/signin">
          <button disabled={!stripe}
            className="c_submit-btn"><a href="#">Submit</a>
            <svg width={22} height={15} viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8913 1L20.5 7.5M13.8913 14L20.5 7.5M20.5 7.5H1.5" stroke="#192B43" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Link>


        {checkoutError && <span style={{ color: "red" }}>{checkoutError}</span>}
      </form>


    </div>
  );
};


export default function Layer4({ paymentIntent }) {
  const [session, loading] = useSession();
  return (
    <div>

      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Jewelify</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="wrapper">
        <header className="header-area">
          {/* Menu Area
          ============================================ */}
          <div id="main-menu" className="sticker white-bg">
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
                          <a href="#about" onClick={signIn} className="get-started-btn scrollto float-right">Sign In</a>
                        </>}

                        {session && <>
                          <a href="#about" onClick={signOut} className="get-started-btn scrollto float-right">Sign Out</a>
                        </>} */}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="pay-info-sec bg-lightblue pt-20 pb-60 custom-border">
          <div className="container">
            <div className="row">
              <div className="col-12 text-left">
                <ul className="breadcrumbs">
                  <li>
                    <a href="#">
                      Plans
                    </a>
                  </li>
                  <li>
                    <img src="assets/images/bread-arrow.svg" alt="" />
                  </li>
                  <li className="active"><a href="#">
                    Checkout
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h3 className="sec-head white-color mb-20">
                  Enter Your Payment Details Below
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="pay-info-wrap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-7 col-12 col-sm-12">
                <div className="c_card">
                  <h3 className="head">
                    Payment Information
                  </h3>
                  <form>
                    <div className="form-group">
                      <label>Name *</label>
                      <div className="c_input-group">
                        <input type="text" onKeyUp={(e) => onKeyUpName(e)} placeholder="Enter your full name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <div className="c_input-group">
                        <input type="text" onKeyUp={(e) => onKeyUpEmail(e)} placeholder="Enter your email address" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Card Details *</label>
                      <Elements stripe={stripePromise}>
                        <CheckoutForm paymentIntent={paymentIntent} />
                      </Elements>

                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="price-card c_card">
                  <div className="price-header">
                    <p className="price-cat">
                      You have to pay
                    </p>
                    <h4 className="main-price">
                      $99/mo
                    </h4>
                  </div>
                  <div className="price-body">
                    <h5 className="head">
                      What’s included
                    </h5>
                    <ul className="price-inc-list">
                      <li>6-Month Data History</li>
                      <li>100% support</li>
                      <li>Custom Reports</li>
                      <li>Funnel Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
