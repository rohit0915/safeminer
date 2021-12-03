import React, { useEffect } from 'react'
import { Grid, Button } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//css file
import "./AboutUs.css";

//used imges
import a from "../images/a.png";
import b from "../images/b.png";
import coin from "../images/coin.png";
import money from "../images/money.png";
import profit from "../images/profit.png";

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <>
            <div className="pages_back_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading mt-5">About Us </div>
                            <div className="para_home mt-2">Safe Miner has been growing rapidly from day
                                one and gaining momentum among existing staking platforms. We currently provide
                                services to clients in over 120 countries. We provide our clients with a
                                user-friendly and easy-to-use interface, as well as security and privacy,
                                a wide range of packages, instant payouts, and lastly, friendly support.</div>

                        </Grid>
                        <Grid item md={6} className="p-3">
                            <img src={a} alt="" className="about_image" />
                        </Grid>
                    </Grid>

                    <div className="aboutUS_staking_backcolor pt-5 pb-5">
                        <Grid className="Component_main_grid p-4">
                            <Grid item md={3} className="p-3">
                                <div className="home_Main_heading">Effortless staking investing</div>
                            </Grid>
                            <Grid item md={3} className="p-3">

                                <div className=" mt-4">
                                    <div className="text-center">
                                        <img src={coin} alt="" className="benifits_image" />
                                    </div>
                                    <div className="befits_heading mt-4">Instant transactions with minimal fees </div>
                                    <div className="banefits_para">Low fees and instant transactions make Safe Miner the
                                        preferred stacking platform over the competition.</div>
                                </div>
                            </Grid>
                            <Grid item md={3} className="p-3">

                                <div className="1 mt-4">
                                    <div className="text-center">
                                        <img src={profit} alt="" className="benifits_image" />
                                    </div>
                                    <div className="befits_heading mt-4">Payment in public currency</div>
                                    <div className="banefits_para">Our service provides everyone with the
                                        opportunity to easily use the service by paying for the package in public currency.</div>
                                </div>
                            </Grid>
                            <Grid item md={3} className="p-3">

                                <div className=" mt-4">
                                    <div className="text-center">
                                        <img src={money} alt="" className="benifits_image" />
                                    </div>
                                    <div className="befits_heading mt-4">No expensive equipment needed</div>
                                    <div className="banefits_para">Staking eliminates the need for continual high-value equipment
                                        purchases and energy consumption.</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="mt-2">
                        <Grid className="Component_main_grid mt-5 p-4">
                            <Grid item md={6} className="p-3">
                                <img src={b} alt="" className="about_image" />
                            </Grid>
                            <Grid item md={6} className="p-3">
                                <div className="home_Main_heading mt-5">Why choose us?</div>
                                <div className="para_home mt-2">Safe Miner offers a reliable staking platform suitable for both beginners
                                    and professional investors. With a huge number of packages, we choose an individual approach to each investor.
                                    Your safety and privacy comes first for us. We have studied and loved the crypto world and
                                    staking to the smallest detail. So, our goal is to inspire our users to do the same.</div>
                                <div className="para_home mt-2">We are pleased to offer all our clients such modern services and professional package conditions.</div>

                            </Grid>

                        </Grid>
                    </div>

                    <div className="mt-2">
                        <div className="home_Main_heading text-center mt-5 mb-5">Three Steps to Start Staking</div>
                        <Grid className="Component_main_grid">
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item mt-4">
                                    <div className="text-center steps_text_format">
                                        01
                                    </div>
                                    <div className="befits_heading mt-4">Create your account</div>
                                    <div className="banefits_para">First of all, you need to go through a simple registration. Having
                                        your office, you can make purchases, track your profits and withdrawal at any time convenient for you.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item1 mt-4">
                                    <div className="text-center steps_text_format">
                                        02
                                    </div>
                                    <div className="befits_heading mt-4">Choose the package</div>
                                    <div className="banefits_para">Each package has it own amount and duration. ​After choosing a package
                                        and paying the full price, thanks to your cough, your package will be activated automatically.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item mt-4">
                                    <div className="text-center steps_text_format">
                                        03
                                    </div>
                                    <div className="befits_heading mt-4">Enjoy your passive income</div>
                                    <div className="banefits_para">As soon as you have paid the full cost of the package, the issued
                                        package will appear in your account. Receive your profit every day, including weekends.</div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="aboutUS_staking_backcolor pt-2 pb-4 mb-2">
                        <div className="home_Main_heading text-center mt-2 mb-2">start Making Profit Right Now</div>
                        <Grid className="Component_main_grid">
                            <Grid item md={2} className="p-2"></Grid>
                            <Grid item md={6} className="p-2"> <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter E-mail" /></Grid>
                            <Grid item md={2} className="p-2">
                                <Button className="about_button_earning">Start Earning</Button>
                            </Grid>
                            <Grid item md={2} className="p-2"></Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HOC(AboutUs);
