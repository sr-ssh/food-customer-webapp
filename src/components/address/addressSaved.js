import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import backIcon from '../../assets/images/factor/back-page-white.svg'
import deleteIcon from '../../assets/images/address/delet.svg'
import addIcon from '../../assets/images/address/add.svg'



export const AddressSaved = () => {

    

    return (
        <>
        <div className="div--container__addressSaved">
        <nav className="nav--container__titleBar-addressSaved">
            <h5>آدرس</h5>
            <p>خانه</p>
            <img src={backIcon}></img>
        </nav>
        <section className="section--container__main-addressSaved">
            <div>
             <div>
                <div>
                    <p>امیریه</p>
                    <img src={deleteIcon}></img>
                </div> 
                <div>
                    <p>امیریه</p>
                    <img src={deleteIcon}></img>
                </div> 
                <div>
                    <p>امیریه</p>
                    <img src={deleteIcon}></img>
                </div> 
                <div>
                    <p>امیریه</p>
                    <img src={deleteIcon}></img>
                </div> 
             </div>
            <div>
               <div>
                   <div>
                   <img src={addIcon}></img>
                   <h5>آدرس جدید</h5>
                   </div>
               </div>
               <div>
                   <div>
                   <h5>ادامه</h5>
                   <h5>235 تومان</h5>
                   </div>
               </div>
            </div>
            </div>
            
        </section>
        
           </div>
        </>
        
    )
}