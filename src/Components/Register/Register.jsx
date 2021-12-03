import React, { useEffect, useState } from 'react'
import { Grid, Card } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//css file
import "./Register.css";

//used image
import login from "../images/login.png";
import { Button } from "@material-ui/core"


//validation
import { blankValidator, emailValidator } from "../../utils/Validation";


function Register(props) {

    //local state
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");

    //errors
    const [phoneError, setphoneError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [emailMatchError, setemailMatchError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);

    const Registerdata = () => {
        if (!blankValidator(phone)) {
            setphoneError(true)
            return
        }
        if (!blankValidator(email)) {
            setemailError(true)
            return
        }
        if (!emailValidator(email)) {
            setemailMatchError(true)
            return
        }
        if (!blankValidator(password)) {
            setpasswordError(true)
            return
        }
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
                                    <span><Button className="login_signup_button" onClick={() => props.history.push("/register")}>Sign Up</Button></span>
                                    <span className="ml-4"><Button className="login_signup_button2" onClick={() => props.history.push("/login")}>Login</Button></span>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className={`form-control ${phoneError && "invalid"}`}
                                        placeholder="Mobile Number"
                                        maxlength="10"
                                        value={phone}
                                        onChange={(e) => {
                                            setphoneError(false)
                                            if (!isNaN(e.target.value)) {
                                                setphone(e.target.value)
                                            } else
                                                setphone("")
                                        }}
                                    />
                                    {phoneError && (
                                        <span className="text-danger">Enter the Mobile Number</span>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        className={`form-control ${(emailError || emailMatchError) && "invalid"}`}
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => {
                                            setemailMatchError(false)
                                            setemailError(false)
                                            setemail(e.target.value)
                                        }}
                                    />
                                    {emailError && (
                                        <span className="text-danger">Enter the Email Address</span>
                                    )}
                                    {emailMatchError && (
                                        <span className="text-danger">Enter the Correct Email Address</span>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        className={`form-control ${passwordError && "invalid"}`}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => {
                                            setpasswordError(false)
                                            setpassword(e.target.value)
                                        }}
                                    />
                                    {passwordError && (
                                        <span className="text-danger">Enter the Password</span>
                                    )}
                                </div>
                                <div className="mt-3 mb-3">
                                    <Button className="login_signup_button" onClick={Registerdata}>Sign Up</Button>
                                </div>
                                <div>Already have an account? <span className="link_color_signup" onClick={() => props.history.push("/login")}>Login</span></div>
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

export default HOC(Register)
