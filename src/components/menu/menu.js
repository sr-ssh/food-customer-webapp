import React, { useEffect } from 'react'
import { history, useWindowSize } from '../../helpers';

export const Menu = () => {
    const size = useWindowSize();
    useEffect(() => {
        history.push('/menu.html')
        history.go(0)
    }, [])
    return (
        
        <div id="hommme">
        {/* <iframe title="Happy Pizza" src="./home.html" width={`${size.width}px`} height={`${size.height}px`}></iframe> */}
        </div>
    )
}
