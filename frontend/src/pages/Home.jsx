import Features from '../components/Features'
import Headers from '../components/Headers'
// import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
// import LogoCloud from '../components/LogoCloud'
// import Stats from '../components/Stats'
import Blogs from '../components/Blogs'
// import Teams from '../components/Teams'
import Us from '../components/Us'
import Footer from './Footer'
import React from 'react'

const Home = () => {
    return (
        <>
            <Us />
            <p className='border-t border-gray-200'></p>
            <Features />
            <p className='border-t border-gray-200'></p>
            <Headers />
            <p className='border-t border-gray-200'></p>
            <Footer />
        </>
    )
}

export default Home