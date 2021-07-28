import React from 'react';


// Components
import { Header } from '../base/header2'
// import { OldAddress } from "./oldAddress"
import { NewAddress } from "./newAddress"

export const Address = () => {
    return (
        <>
            <div className="address--page">
                <Header title="آدرس" backLink="" backtext="خانه" />
                <NewAddress />
                {/* <OldAddress /> */}
            </div>
        </>


    )
}