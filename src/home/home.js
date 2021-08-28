import React from 'react'
import { useWindowSize } from '../helpers';

export const Home = () => {
    const size = useWindowSize();
    console.log(size.width, size.height)
    return (
            <iframe title="Happy Pizza" src="./home.html" width={`${size.width}px`} height={`${size.height}px`}></iframe>
    )
}
