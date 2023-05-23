import React from "react";
import './Footer.css'
const Footer = () => {
    return(
        <React.Fragment>
          <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30" style={{margin: "0px 0px 10px 0px"}}>
                                <div className="single-cta">
                                    <div className="cta-text">                                   
                                        <h4><i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Find us</h4><br/>
                                        <span>D. Y. Patil College of Engineering, D. Y. Patil
                                            Educational Complex, Sector 29, Nigdi
                                            Pradhikaran, Akurdi, Pune 411044.
                                            College:</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30" style={{margin: "0px 0px 10px 0px"}}>
                                <div className="single-cta">
                                    <div className="cta-text">                                    
                                        <h4><i className="fas fa-phone"></i>&nbsp;&nbsp;Call us </h4><br/>
                                        <span>Phone: +91–20–27653054 / 58</span>
                                        <span>Fax: +91–20-27653057</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30" style={{margin: "0px 0px 10px 0px"}}>
                                <div className="single-cta">
                                    <div className="cta-text">
                                    <h4><i className="far fa-envelope-open"></i>&nbsp;&nbsp;Mail us</h4> <br/>                                   
                                        <span> For Admission :dyppeca@gmail.com</span><br />
                                        <span>For Recruitment : dypcoe_jobs@dypcoeakurdi.ac.in</span>
                                        <span>TPO E-mail : tpo@dypcoeakurdi.ac.in, placements@dypcoeakurdi.ac.in</span>
                                        <span>For enquiry or information : info@dypcoeakurdi.ac.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>AKURDI CAMPUS</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">D .Y. Patil Institute of Master Computer Applications and Management, Akurdi</a></li>
                                        <li><a href="#">Dr. D.Y. Patil College of Architecture, Akurdi, Pune</a></li>
                                        <li><a href="#">Dr. D. Y. Patil College of Applied Arts & Crafts, Akurdi, Pune</a></li>
                                        {/* <li><a href="#">Dr. D.Y. Patil College of Architecture, Akurdi, Pune</a></li>
                                        <li><a href="#">Dr. D. Y. Patil College of Agriculture Business Management , Akurdi, Pune</a></li>
                                        <li><a href="#">Dr. D. Y. Patil College of Pharmacy, Akurdi, Pune</a></li> */}
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">services</a></li>
                                        <li><a href="#">portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Expert Team</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>  
        
        </React.Fragment>
    )
}

export default Footer;


// <footer class="text-gray-600 body-font">
//             <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
//                 <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
//                     <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                         </svg>
//                         <span class="ml-3 text-xl">My Courses @ Akurdi</span>
//                     </a>
//                     <p class="mt-2 text-sm text-gray-500">Learn at the comfort of your own home.</p>
//                     </div>
//                     <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
//                     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//                         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//                         <nav class="list-none mb-10">
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">First Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Second Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Third Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
//                         </li>
//                         </nav>
//                     </div>
//                     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//                         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//                         <nav class="list-none mb-10">
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">First Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Second Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Third Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
//                         </li>
//                         </nav>
//                     </div>
//                     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//                         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//                         <nav class="list-none mb-10">
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">First Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Second Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Third Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
//                         </li>
//                         </nav>
//                     </div>
//                     <div class="lg:w-1/4 md:w-1/2 w-full px-4">
//                         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
//                         <nav class="list-none mb-10">
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">First Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Second Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Third Link</a>
//                         </li>
//                         <li>
//                             <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
//                         </li>
//                         </nav>
//                     </div>
//                     </div>
//                 </div>
//                 <div style={{backgroundColor:'#100f10'}} class="bg-gray-100">
//                     <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//                     <p class="text-gray-500 text-sm text-center sm:text-left">© 2021 My Courses @ Akurdi —
//                         <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@DYPIMCA</a>
//                     </p>
//                     <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
//                         <a class="text-gray-500">
//                         <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                         </svg>
//                         </a>
//                         <a class="ml-3 text-gray-500">
//                         <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                         </svg>
//                         </a>
//                         <a class="ml-3 text-gray-500">
//                         <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//                         </svg>
//                         </a>
//                         <a class="ml-3 text-gray-500">
//                         <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
//                             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//                             <circle cx="4" cy="4" r="2" stroke="none"></circle>
//                         </svg>
//                         </a>
//                     </span>
//                     </div>
//                 </div>
//             </footer>