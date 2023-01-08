// import { useState } from "react";

const Report = () => {
    return (
        <>
            <main>
                <div className="container">
                    <p className="container-header-text">Report|<strong>PURCHASE ORDER</strong></p>
                </div>

                <div className="purchase-container">
                    <div className="purchase-inner">
                        <p className="purchase-header">Purchase Order</p>

                        <div className="reference-type">
                            <form className="reference-form">
                                <label>
                                    Reference Number
                                    <input type="text" className="fname" name="fname" placeholder="Enter Reference number"></input>
                                </label>

                                <label>
                                    Total Amount
                                    <input type="number" className="pnumber" id="quantity" name="quantity" placeholder="Total Amount"></input>
                                </label>

                                <label>
                                    Date
                                    <select className="ref-date" name="">
                                        <option value="Select Date">Select Date</option>
                                    </select>
                                </label>
                            </form>
                        </div>

                        <div className="reference-date">
                            <form className="date-form">

                                <label>
                                    Begin Date
                                    <select className="ref-date" name="">
                                        <option value="Select Date">Select Date</option>
                                    </select>
                                </label>

                                <label>
                                    End Date
                                    <select className="ref-date" name="">
                                        <option value="Select Date">Select Date</option>
                                    </select>
                                </label>

                                <label>
                                    Select Vendor
                                    <select className="ref-date" name="">
                                        <option value="Select Date">Select Vendor</option>
                                    </select>
                                </label>
                            </form>
                        </div>

                        <div className="purchase-search">
                            <button className="purchase-btn"> SEARCH</button>
                        </div>

                    </div>
                </div>

                <div className="records-container">
                    <div className="records-inner">
                        <p className="records-header">Records per page</p>

                        <input type="number" className="numb" id="quantity" name="quantity" placeholder="100"></input>


                        <div className="purchase-search">
                            <button className="purchase-btn"> SEARCH</button>
                        </div>



                    </div>

                </div>




            </main>
        </>
    );
};

export default Report;