import React, { useEffect, useState } from 'react'
import { Card, Grid } from '@material-ui/core';
import HOC from "../../Common/HOC.jsx"

//React animated expand
import Expand from "react-expand-animated";

//used image
import faq from "../images/faq.png"

//css file
import "./FAQ.css";

function FAQ() {

    /*local array of question*/
    const [Question, setQuestion] = useState([{ question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="pages_back_color">
                <div className="content_padding">
                    <Grid className="Component_main_grid mt-5 p-4">
                        <Grid item md={6} className="p-3">
                            <div className="home_Main_heading mt-5">Frequently Asked Question </div>
                            <div className="para_home mt-5">A trusted authority on digital
                                currency investing, Grayscale provides secure access and
                                diversified exposure to the digital currency asset class.</div>

                        </Grid>
                        <Grid item md={6} className="p-3">
                            <img src={faq} alt="" className="faq_image" />
                        </Grid>
                    </Grid>

                    <div className="pb-3">

                        {Question.map((item, index) => (
                            <Card
                                className="pt-1 pb-1 Card_shadow mt-3"
                                key={index}
                            >

                                <div className="p-2">

                                    <span className="ml-3 asked_question">
                                        {item.question}
                                    </span>
                                    <span className="float-right mr-3">
                                        {item.show === false ? (
                                            <span
                                                className="hover_cursor icon_size"
                                                onClick={() => {
                                                    Question[
                                                        index
                                                    ].show = true;
                                                    setQuestion([
                                                        ...Question,
                                                    ]);
                                                }}
                                            >
                                                <i className="fa fa-plus-square"></i>
                                            </span>
                                        ) : (
                                            <span
                                                className="hover_cursor icon_size1"
                                                onClick={() => {
                                                    Question[
                                                        index
                                                    ].show = false;
                                                    setQuestion([
                                                        ...Question,
                                                    ]);
                                                }}
                                            >
                                                <i className="fa fa-minus-square"></i>
                                            </span>
                                        )}
                                    </span>

                                    <Expand open={item.show}>
                                        <div className="mt-3">

                                            Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard "fish"
                                            for Latin texts since the early 16th century. At the time, an unnamed printer created a large collection of
                                            font sizes and shapes using Lorem Ipsum to print samples. Lorem Ipsum Not only successfully survived
                                            five. Lorem Ipsum is a fish text often used in print and web design.
                                        </div>
                                    </Expand>
                                </div>

                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(FAQ);
