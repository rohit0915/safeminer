import React from 'react'
import "./Reviews.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Card } from '@material-ui/core';

function Reviews() {

    const dataArr = [
        { name: "Thank You For Your Work!" },
        { name: "I received the club from Hub" },
        { name: "Great trading Place" },
        { name: "Lorem Ipsum" },
        { name: "Lorem Ipsum" },
        { name: "Lorem Ipsum" },
        { name: "data Ipsum" },
        { name: "Lorem Ipsum" },
        { name: "Lorem Ipsum" },
        { name: "Lorem Ipsum" },

    ]
    return (
        <>
            <OwlCarousel
                className="brand-wrap owl-carousel owl-theme"
            >
                {dataArr.map((item, index) => (
                    <div className="item">
                        <Card className="Card_shadow m-2">
                            <div className="p-3"><i className="fa fa-star"></i></div>
                            <div className="p-3 Review_heding">{item.name}</div>
                            <div className="p-3 Certification_para_formatting mb-3">Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                                typeface without relying on meaningful content.</div>
                        </Card>
                    </div>
                ))}
            </OwlCarousel>
        </>
    )
}

export default Reviews
