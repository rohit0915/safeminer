import React, { useEffect } from 'react'
import { Grid, Button, Card } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//css file
import "./Referrals.css";

//used imges
import r1 from "../images/r1.png";
import r2 from "../images/r2.png";

function Referrals() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="pages_back_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading mt-5">Referral program</div>
                            <div className="para_home mt-2">Invest and multiply your capital together with friends through our referral program.</div>
                        </Grid>
                        <Grid item md={6} className="p-3">
                            <img src={r1} alt="" className="about_image" />
                        </Grid>
                    </Grid>

                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <img src={r2} alt="" className="about_image" />
                        </Grid>
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading mt-5">About the Referral Program</div>
                            <div className="para_home mt-2">The referral program gives you the opportunity to get a nice bonus by inviting
                                a friend through your referral link. Each package has it
                                own referral level. Acquire packages with your friends and increase your referral level together.</div>
                        </Grid>
                    </Grid>

                    <div className="mt-3 mb-3">
                        <div className="home_Main_heading text-center mt-5 mb-5">How it works</div>
                        <Grid className="Component_main_grid">
                            <Grid item md={3} className="p-1">
                                <Card className="p-2 mt-2 Card_shadow">
                                    <div className="Card_height mt-4">
                                        <div className="text-center steps_text_format">
                                            01
                                        </div>
                                        <div className="befits_heading text-center mt-4">Sign Up</div>
                                        <div className="banefits_para text-center">Fill out a simple registration form.</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-1">
                                <Card className="p-2 mt-2 Card_shadow">
                                    <div className="Card_height mt-4">
                                        <div className="text-center steps_text_format">
                                            02
                                        </div>
                                        <div className="befits_heading text-center mt-4">Share your referral link with your friends</div>
                                        <div className="banefits_para text-center">Send your link to friends, thanks to your personal ink they can create
                                            their own personal account.</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-1">
                                <Card className="p-2 mt-2 Card_shadow">
                                    <div className="Card_height mt-4">
                                        <div className="text-center steps_text_format">
                                            03
                                        </div>
                                        <div className="befits_heading text-center mt-4">Choose the suitable packages together</div>
                                        <div className="banefits_para text-center">The percentage of referral reward is indicated on
                                            each stake package. You independently regulate the percentage of remuneration from
                                            the referral.</div>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item md={3} className="p-1">
                                <Card className="p-2 mt-2 Card_shadow">
                                    <div className="Card_height mt-4">
                                        <div className="text-center steps_text_format">
                                            04
                                        </div>
                                        <div className="befits_heading text-center mt-4">Get your referral bonus</div>
                                        <div className="banefits_para text-center">After activating your referral's package, you will receive your bonus.</div>
                                    </div>
                                </Card>
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

export default HOC(Referrals);
