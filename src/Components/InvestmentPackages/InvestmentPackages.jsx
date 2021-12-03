import React, { useEffect } from 'react'
import { Grid, Button } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//css file
import "./InvestmentPackages.css";

//used imges
import a from "../images/a.png";

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ThreeMonthPlans from '../Home/ThreeMonthPlans.jsx';
import SixMonthsPlans from '../Home/SixMonthsPlans.jsx';
import TwelveMonthPlans from '../Home/TwelveMonthPlans.jsx';

function InvestmentPackages() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="pages_back_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading mt-5">Investment packages</div>
                            <div className="para_home mt-2">With a wide choice among investment packages, we choose an individual approach
                                to each Stake Club user. Each package contains: cost,
                                referral bonus and package validity period. You will definitely find something for yourself.</div>
                        </Grid>
                        <Grid item md={6} className="p-3">
                            <img src={a} alt="" className="about_image" />
                        </Grid>
                    </Grid>

                    <div className="tabs">
                        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                            <Tab label="3 Months" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                            <Tab label="6 Months" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />
                            <Tab label="12 Months" {...a11yProps(2)} className="button_login_decoration  tabs_text_formatting" />
                        </Tabs>
                    </div>

                    <div className="mt-1">
                        {/* first tab data*/}
                        <TabPanel value={value} index={0}>
                            <ThreeMonthPlans />
                        </TabPanel>

                        {/* second tab data*/}
                        <TabPanel value={value} index={1}>
                            <SixMonthsPlans />
                        </TabPanel>

                        {/* third tab data*/}
                        <TabPanel value={value} index={2}>
                            <TwelveMonthPlans />
                        </TabPanel>
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
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default HOC(InvestmentPackages);
