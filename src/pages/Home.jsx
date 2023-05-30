/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { facebook, instagram, twitter, play, logon, logo } from '../assets';


export default function Home() {
    return (
        <>
            <div className="headerer">
                <div className="sidebar">
                    {/* <img src={menu} alt="" />
                    <img src={search} alt="" /> */}
                    <div className="social">
                        <a href="https://facebook.com"><img src={facebook} alt="" /></a>
                        <a href="https://instagram.com"><img src={instagram} alt="" /></a>
                        <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                    </div>
                </div>
                <div className="container">
                    <nav>
                        <img src={logo} className="logo" />
                        {/* <img src={shop} className="shop" /> */}
                    </nav>
                    <img src={play} className="play" />
                    <div className="info">
                        <h3>Ready for</h3>
                        <h1>Career Growth</h1>
                        <p>Winter dresses for women by AND are a seamless blend of fashion and <br />functionality.Shop our
                            elegant range of winter wear.</p>

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
                                <p>Winter Dresses for Women are a seamless <br />blend of fashion.</p>
                            </div>
                            <div>
                                <h2>TRENDING</h2>
                                <p>Winter Dresses for Women are a seamless <br />blend of fashion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
