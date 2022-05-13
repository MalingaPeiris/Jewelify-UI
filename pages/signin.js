// import React, { useEffect, useRef } from "react";
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Container,
//   Stack,
// } from "@chakra-ui/react";

// console.log("mail - " + global.$email);

// export default function SignIn({ providers, csrfToken }) {

//   const buttonRef = useRef(null);

//   useEffect(() => {
//     buttonRef.current.click();
//   }, []);

//   return (
//     <div>
//       <div>
//         <form
//           method="post" action="/api/auth/signin/email"
//         >
//           <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
//           <Input type="text"  id="email" name="email" defaultValue={global.$email} />

//           <Button
//             ref={buttonRef}
//             //type="hidden"
//             type="submit"></Button>
//         </form>
//       </div>

//       <div>

//         <meta charSet="utf-8" />
//         <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//         <title>Jewelify</title>
//         <meta name="description" content />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
// s
//       {/* Add your site or application content here */}
//       <div className="wrapper ">
//         <header className="header-area">
//           {/* Menu Area
//           ============================================ */}
//           <div id="main-menu" className="sticker white-bg">
//             <div className="container">
//               <div className="row">
//                 <div className="col-md-12 col-xs-12">
//                   <div className="logo float-left navbar-header">
//                     <h2 className="logo"><a href="index.html"></a></h2>
//                     <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-2">
//                       <img src="/img/menu.svg" className="menu-open" alt="" />
//                     </button>
//                   </div>
//                   <div className="main-menu text-center collapse navbar-collapse" id="main-menu-2">
//                     <nav>
//                       <ul className="menu one-page">

//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//         {/* pricing area
//       ============================================ */}
//         <div id="pricing-area" className="pricing-area custom-border" style={{ backgroundColor: '#f3fbfe' }}>
//           <div className="container pt-100">
//             <div className="row pb-100">
//               <div className="col-12 text-center">
//                 <img src="/img/msg.png" alt="" className="img-msg" />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-md-12 text-center">
//                 <div className="about-bottom-left pricing-mrg clearfix text-style">
//                   <h2>Sending login Link. Please wait.</h2>
//                   <p>By using passwordless login it increases the security of your account</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* contact area
//       ============================================ */}
//       <div className="contact-area">
//         <div className="container">
//           <div className="row">
//             <div className="conatct-info fix">
//               <div className="col-md-5 col-sm-4 text-style">
//                 <h2>Jewelify</h2>
//                 <p>Copyright © 2021
//                   <a href="http://bootexperts.com/" target="_blank">Jewelify</a><br />
//                   .All right reserved.</p>
//               </div>
//               <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
//                 <h3 className="mb-30">Services</h3>
//                 <ul>
//                   <li><a href="#">service - 1</a></li>
//                   <li><a href="#">service - 2</a></li>
//                   <li><a href="#">service - 3</a></li>
//                   <li><a href="#">service - 4</a></li>
//                 </ul>
//               </div>
//               <div className="col-md-2 col-sm-4 footer-links text-style t-m-res">
//                 <h3 className="mb-30">Company</h3>
//                 <ul>
//                   <li> <a href="#">Work</a></li>
//                   <li><a href="#">About</a></li>
//                   <li><a href="#">Resources</a></li>
//                   <li><a href="#">Pricing</a></li>
//                 </ul>
//               </div>
//               <div className="col-md-3 col-sm-4 text-style t-m-res">
//                 <h3 className="mb-30">Useful Links</h3>
//                 <div className="footer-icon">
//                   <ul>
//                     <li><a><img src="/img/facebook.svg" alt="" width="20px" /></a> </li>
//                     <li><a><img src="/img/instagram.svg" alt="" width="20px" /></a> </li>
//                     <li><a><img src="/img/twitter.svg" alt="" width="20px" /></a> </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* start scrollUp
//       ============================================ */}
//       {/*<div id="toTop">
//           <i class="fa fa-chevron-up"></i>
//       </div>
//   </div>*/}
//       {/* jquery
// 		============================================ */}
//       {/* bootstrap JS
// 		============================================ */}
//       {/* plugins JS
// 		============================================ */}
//       {/* main JS
// 		============================================ */}
//     </div>

//     </div>
//   );
// }

// SignIn.getInitialProps = async (context) => {
//   const { req, res } = context;
//   const session = await getSession({ req });

//   if (session && res && session.accessToken) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     res.end();
//     return;
//   }

//   return {
//     session: undefined,
//     providers: await providers(context),
//     csrfToken: await csrfToken(context),
//   };
// };

//new code
import React, { Component } from "react";
import axios from "axios";


export default class SignIn extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post("http://localhost:9000/.netlify/functions/sign-in", data)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="con">
      <div className="container">
      <form onSubmit={this.handleSubmit}>
        <h2>SIGN IN</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => (this.email = e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>

        <button className="btn btn-primary btn-block">Sign In</button>
        </form>
        </div>
        </div>
    );
  }
}
