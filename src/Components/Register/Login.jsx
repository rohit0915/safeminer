import React, { useEffect, useState } from 'react'
import { Grid, Card } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//css file
import "./Register.css";

//used image
import login from "../images/login.png";
import { Button } from "@material-ui/core"
import { blankValidator } from '../../utils/Validation.jsx';


function Login(props) {

    //local state
    const [phone, setphone] = useState("");

    //error
    const [phoneError, setphoneError] = useState(false);


    const Singup = () => {
        if (!blankValidator(phone)) {
            setphoneError(true);
            return;
        }
        props.history.push("/verify-otp")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="pages_back_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <Card className="p-2 mt-2 Card_shadow">
                                <div className="page_heading m-3">
                                    <span><Button className="login_signup_button2" onClick={() => props.history.push("/register")}>Sign Up</Button></span>
                                    <span className="ml-4"><Button className="login_signup_button" onClick={() => props.history.push("/login")}>Login</Button></span>
                                </div>
                                <div className="mt-5 mb-5">
                                    <input
                                        type="text"
                                        className={`form-control ${phoneError && "invalid"}`}
                                        placeholder="Mobile Number"
                                        valu={phone}
                                        onChange={(e) => {
                                            setphoneError(false);
                                            setphone(e.target.value);
                                        }}
                                    />
                                    {phoneError && (
                                        <span className="text-danger">Enter the Mobile Number</span>
                                    )}
                                </div>

                                <div className="mt-3 mb-3">
                                    <Button className="login_signup_button" onClick={Singup}>Login</Button>
                                </div>
                                <div>Don't have an account? <span className="link_color_signup" onClick={() => props.history.push("/register")}>SignUp</span></div>
                            </Card>
                        </Grid>

                        <Grid item md={6} className="p-3">
                            <img src={login} alt="" className="login_image" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC(Login)
