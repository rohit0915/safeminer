import React, { useEffect } from 'react'
import { Grid, Card } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"
import { Button } from "@material-ui/core"
//css file
import "./Home.css";

//used image
import home from "../images/home.png";
import coin from "../images/coin.png";
import money from "../images/money.png";
import profit from "../images/profit.png";
import earn from "../images/earn.png";

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ThreeMonthPlans from './ThreeMonthPlans.jsx';
import SixMonthsPlans from './SixMonthsPlans.jsx';
import TwelveMonthPlans from './TwelveMonthPlans.jsx';
import MiningCalculator from '../MiningCalculator/MiningCalculator.jsx';
import Reviews from '../Reviews/Reviews.jsx';


function Home(props) {
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
                            <img src={home} alt="" className="home_image" />
                        </Grid>
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading">Keep your coins and Get you Rewards </div>

                            <div className="para_home">Stake club increases the income of users using the system PoS</div>

                            <div className="mt-2 mb-2">
                                <Card className="p-2 mt-3 Card_shadow">
                                    <div className="para_home">Start Earning Now</div>
                                    <Grid className="Component_main_grid">
                                        <Grid item md={8} className="p-3"> <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter E-mail" /></Grid>
                                        <Grid item md={4} className="p-3">
                                            <Button className="home_page_button" onClick={()=>props.history.push("/register")}>Start Earning</Button>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="mt-2">

                        <Grid className="Component_main_grid">
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item mt-4">
                                    <div className="text-center">
                                        <img src={coin} alt="" className="benifits_image" />
                                    </div>
                                    <div className="befits_heading mt-4">Instant transactions with minimal fees </div>
                                    <div className="banefits_para">Low fees and instant transactions make Stake Club the
                                        preferred stacking platform over the competition.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item1 mt-4">
                                    <div className="text-center">
                                        <img src={profit} alt="" className="benifits_image" />
                                    </div>
                                    <div className="befits_heading mt-4">Payment in public currency</div>
                                    <div className="banefits_para">Our service provides everyone with the
                                        opportunity to easily use the service by paying for the package in public currency.</div>
                                </div>
                            </Grid>
                            <Grid item md={4} className="p-1">
                                <div className="benifits_item mt-4">
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

                    <div className="mt-5">
                        <Grid className="Component_main_grid">
                            <Grid item md={3} className="p-1">
                                <Button className="home_page_button">Stacking</Button>
                                <div className="befits_heading mt-2">Earn money by storing coins</div>
                                <p className="banefits_para">The peculiarity of Stake Club's work in the Proof of Stake technology allows the user to independently
                                    influence their income. After all, the confirming ability depends on the size of the stake in the network.</p>
                                <p className="banefits_para"> The peculiarity of Stake Club's work in the Proof of Stake technology allows the user to independently influence
                                    their income. After all, the confirming ability depends on the size of the stake in the network.</p>
                            </Grid>
                            <Grid item md={9} className="p-1">
                                <img src={earn} alt="" className="home_image" />
                            </Grid>
                        </Grid>
                    </div>

                    <div className="mt-5">
                        <Grid className="Component_main_grid">
                            <Grid item md={3} className="p-1">
                                <div className="befits_heading mt-2">Our Packages</div>
                            </Grid>
                            <Grid item md={9} className="p-1">
                                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                    <Tab label="3 Months" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                    <Tab label="6 Months" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />
                                    <Tab label="12 Months" {...a11yProps(2)} className="button_login_decoration  tabs_text_formatting" />
                                </Tabs>
                            </Grid>
                        </Grid>

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
                    </div>

                    <div className="mt-5">
                        <div className="befits_heading mt-2">Mining Calculator</div>
                        <p className="banefits_para">Your Profile is based on Cryptocurrency current value and mining hash rate.<strong>(Hashrate Converter)</strong></p>

                        <div className="mt-4 mb-4">
                            <MiningCalculator />
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="befits_heading mt-2">Reviews</div>


                        <div className="mt-4 pb-4">
                            <Reviews />
                        </div>
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
export default HOC(Home)
