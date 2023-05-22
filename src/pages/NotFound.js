import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nobis, placeat eum culpa quas eaque? Eius velit nulla dolorum numquam sunt autem in eum totam?</p>
            <p>Go to home <Link to="/" >HomePage</Link>.</p>
        </div>
    )
}
