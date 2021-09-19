import React, { useEffect } from 'react'
import { history, useWindowSize } from '../../helpers';

export const Home = () => {
    const size = useWindowSize();
    useEffect(() => {
        history.push('/home')
        history.go(0)
    }, [])
    return (
        // <div id="hommme">
        // <iframe title="Happy Pizza" src="./home.html" width={`${size.width}px`} height={`${size.height}px`}></iframe>
        // </div>
        <></>
    )
}
