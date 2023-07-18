import Features from '../components/Features'
import Headers from '../components/Headers'
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