import React from 'react'
import { Grid } from '@material-ui/core';

//css file
import "./Footer.css";
//used logo
import hash from "./hash.png";

function Footer(props) {
    return (
        <>

            <div className="footer_back_color">
                <Grid className="Component_main_grid p-4 ">
                    <Grid item md={4} className="p-2">
                        <div><img src={hash} alt="" className="footer_image" /></div>
                        <div className="Footer_heading_Links mt-1">@ {new Date().getFullYear()} HashShiny.io . All Rights Reserved</div>
                        <div className="d-flex mt-2">
                            <span className="Footer_heading_Links"><i className="fa fa-facebook"></i></span>
                            <span className="Footer_heading_Links ml-5"><i className="fa fa-twitter"></i></span>
                            <span className="Footer_heading_Links ml-5"><i className="fa fa-linkedin"></i></span>
                        </div>
                        <div className="mt-2">
                            <a href="//www.dmca.com/Protection/Status.aspx?id=004278c7-d1c3-4092-9630-ddb36be68862" title="DMCA.com Protection Status" className="dmca-badge">
                                <img src="//images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=004278c7-d1c3-4092-9630-ddb36be68862" alt="DMCA.com Protection Status" /></a>
                            <script src="//images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                        </div>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <div className="FotterHead_links">TERMS & POLICY</div>
                        <div className="Footer_heading_Links mt-2">Terms of Services</div>
                        <div className="Footer_heading_Links mt-1">Privacy Policy</div>
                        <div className="Footer_heading_Links mt-1">Referral</div>
                        <div className="Footer_heading_Links mt-1">UpTime</div>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <div className="FotterHead_links">LEARN</div>
                        <div className="Footer_heading_Links mt-2">What is Bitcoins?</div>
                        <div className="Footer_heading_Links mt-1">What is Mining?</div>
                        <div className="Footer_heading_Links mt-1">How it Works?</div>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <div className="FotterHead_links">CONTACT</div>
                        <div><span className="Footer_heading_Links mt-2"><i className="fa fa-building"></i></span><span className="ml-2 Footer_heading_Links">Hash Bitchain Limited<br />Co HK</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i className="fa fa-globe"></i></span><span className="ml-2 Footer_heading_Links">About Us</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i className="fa fa-instagram"></i></span><span className="ml-2 Footer_heading_Links">Contact Us</span></div>
                        <div><span className="Footer_heading_Links mt-1"><i className="fa fa-facebook"></i></span><span className="ml-2 Footer_heading_Links">Advertise with us</span></div>
                    </Grid>
                    <Grid item md={2} className="p-3">
                        <div className="FotterHead_links">LANGUAGES</div>
                        <div className="Footer_heading_Links mt-2">English</div>
                        <div className="Footer_heading_Links mt-1">Pycann</div>
                        <div className="Footer_heading_Links mt-1">中文; 申文</div>
                    </Grid>
                </Grid>

                <div className="p-2 text-center footer_bottom_color">
                    <span className="FotterHead_links">Payment We Accept</span>
                    <span className="ml-3"><img src="https://img.icons8.com/color/96/000000/visa.png" className="payment_icons" alt="" /></span>
                    <span className="ml-3"><img src="https://img.icons8.com/color/96/000000/mastercard.png" className="payment_icons" alt="" /></span>
                    <span className="ml-3"><img src="https://img.icons8.com/cute-clipart/64/000000/paypal.png" className="payment_icons" alt="" /></span>
                    <span className="ml-3"><img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png" className="payment_icons" alt="" /></span>
                    <span className="ml-3"><img src="https://img.icons8.com/color/48/000000/unionpay.png" className="payment_icons" alt="" /></span>

                </div>
            </div>
        </>
    )
}

export default Footer
