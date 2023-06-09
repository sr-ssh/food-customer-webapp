import React, { useEffect, useState } from 'react';

export const ToggleButton = ({ sizeProduct, activeOptions, activeOrder }) => {

    const [activeOption, setActiveOption] = useState(0)
    const option = [{ 0: "1 نفره" }, { 1: "2 نفره" }]


    let optionHandler = (e) => {
        if (e == 0)
            sizeProduct("medium")
        else if (e == 1)
            sizeProduct("large");
        setActiveOption(e)
    }
    useEffect(() => {
        setActiveOption(0)
    }, [activeOptions])

    return (
        <div className="div--container__togglebutton d-flex flex-row justify-content-around align-items-center px-2">
            {
                option.map((item, index) => <p className={`col-6 d-flex justify-content-around align-items-center div--container__togglebutton-text m-0 ${activeOption == index ? "active-opstion" : null}`} onClick={() => optionHandler(index)}>{item[index]}</p>)
            }
            {
                activeOrder?.supply === 0 ?
                    <div className="toggle--btn--unavailable"></div>
                    : null
            }
        </div>
    )
}
