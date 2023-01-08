// import { useState } from "react";


const Sales = () => {

    return (
        <>

            <main>
                <div className="container">
                    <p className="container-header-text">Sales|<strong>SALE QUOTE</strong></p>
                </div>

                <div className="customer-container">
                    <div className="customer-inner">
                        <p className="customer-header">Customer Details</p>

                        <div className="sales-type">
                            <label className="column" for="item-type">
                                Item type
                            </label>
                            <select className="item-date" name="">
                                <option value="Select Item Type">Select Item Type</option>
                            </select>

                            <label className="column" for="staff">Date</label>
                            <select className="item-type" name="">
                                <option value="Select Staff Category">Select Staff Category</option>
                            </select>


                            <label className="column-date" for="date">Staff</label>
                            <select className="item-type" name="">
                                <option value="Select Date">Select Date</option>
                            </select>

                        </div>

                        <div className="sales-two">
                            <form className="sales-form">
                                <label>
                                    Name
                                    <input type="text" className="fname" name="fname" placeholder="Name"></input>
                                </label>

                                <label>
                                    Phone number
                                    <input type="number" className="pnumber" id="quantity" name="quantity" placeholder="Digits" ></input>
                                </label>

                                <label>
                                    Email
                                    <input type="email" className="email" name="email" placeholder="Enter Email Address"></input>
                                </label>
                            </form>
                            <div className="sales-button">
                                <button className="sales-btn"> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sales-container">
                    <div className="sales-inner">
                        <p className="sales-header">Sales Items</p>
                    </div>
                    <button className="header-btn"><i className="fa fa-plus"></i> Add Item</button>
                </div>
                <div className="sales-illus">
                    <center>
                        <div className="center-text">
                            <p>You have to add items to your <br />
                                Request.</p>
                        </div>
                        <img src={require("./asset/images/Spot hero illustrations (Building Functionality).svg").default} alt="ballons" />
                    </center>
                </div>
            </main>

        </>


    );
};


export default Sales;