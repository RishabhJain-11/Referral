/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { facebook, instagram, twitter, play } from '../assets';


export default function Home() {
    return (
        <>
            <div className="headerer">
                <div className="sidebar">
                    <div className="social">
                        <a href="https://facebook.com"><img src={facebook} alt="" /></a>
                        <a href="https://instagram.com"><img src={instagram} alt="" /></a>
                        <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                    </div>
                </div>
                <div className="container">
                    <img src={play} className="play" />
                    <div className="info">
                        <h2>Career Growth</h2>
                        <h4>Winter dresses for men by AND are a seamless blend of fashion and <br />functionality.Shop our
                            elegant range of winter wear.</h4>

                        <div className="row indicator">
                            <p>03</p>
                            <div className="line">
                                <span></span>
                            </div>
                            <p>07</p>
                        </div>
                        <div className="row">
                            <div>
                                <h2>SPRING COLLECTION</h2>
                                <h4>Winter Dresses for Women are a seamless <br />blend of fashion.</h4>
                            </div>
                            <div>
                                <h2>TRENDING</h2>
                                <h4>Winter Dresses for Women are a seamless <br />blend of fashion.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
