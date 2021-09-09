import React, { useEffect, useState } from 'react';
import persianJs from 'persianjs/persian.min';



export const Counter = ({counting, setCounting, startpoint}) => {

    let [counter, setCounter] = useState(startpoint)


    useEffect(() => {
        
        let timerFunc = setTimeout(() => {
            setCounter(counter - 1)
        }, 1000);
        if(!counter)
            setCounting(false)
        return () => clearTimeout(timerFunc);
    })

    return (
        <>
            {counter && persianJs(Math.floor(counter/60).toString()).englishNumber().toString()}
            :
            {counter && persianJs((counter%60).toString()).englishNumber().toString()}
        </>
    )
}