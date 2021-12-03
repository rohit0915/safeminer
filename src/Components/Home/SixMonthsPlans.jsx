import React from 'react'
import { Grid, Card } from '@material-ui/core';

//css file
import "./Home.css";

import { Button } from "@material-ui/core"

import profit from "../images/profit.png";

function SixMonthsPlans(props) {

    //local array
    const packagedata = [
        { packagename: "Basic" },
        { packagename: "Basic" },
        { packagename: "Basic" },
        { packagename: "Basic" },
        { packagename: "Basic" },
        { packagename: "Basic" },
        { packagename: "Basic" },
    ]
    
    return (
        <>
            <Grid className="Component_main_grid">
                {packagedata.map((item, index) => (
                    <Grid item md={3}>
                        <Card className="p-2 m-2 Card_shadow">
                            <div className="text-center">
                                <img src={profit} alt="" className="benifits_image" />
                            </div>

                            <div className="mt-4 d-flex justify-content-between">
                                <span>Package</span>
                                <span>{item.packagename}</span>
                            </div>
                            <div className="mt-1 d-flex justify-content-between">
                                <span>MegaHash</span>
                                <span>/MHS</span>
                            </div>
                            <div className="mt-1 d-flex justify-content-between">
                                <span>Weekly Income</span>
                                <span>$10</span>
                            </div>
                            <div className="mt-3 mb-3 d-flex justify-content-between">
                                <span>
                                    <strong>Rs. 25,000</strong>
                                </span>
                                <span>
                                    <Button className="home_page_button">Start</Button>
                                </span>
                            </div>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}

export default SixMonthsPlans
