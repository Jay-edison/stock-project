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


                        <div className="records-search">
                            <button className="goto-btn"> Go To</button>
                        </div>

                        <div>
                            <button className="print-btn">Print Report</button>
                        </div>

                        <div>
                            <button className="export-btn">Export Report</button>
                        </div>

                    </div>
                </div>

                <div className="date-container">
                    <table className="date-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Company</th>
                                <th>Batch Number</th>
                                <th>Sub-Total</th>
                                <th>VAT</th>
                                <th>Discount</th>
                                <th>Total</th>
                                <th>FX Rate</th>
                                {/* <th>Total(NGN)</th>
                                <th>Negotiated</th>
                                <th>Po Created By</th>
                                <th>Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="#">1</td>
                                <td data-label="Date">2020-02-03</td>
                                <td data-label="Company">Midtechng</td>
                                <td data-label="Batch Number">Ref-000000053</td>
                                <td data-label="Sub-Total">2,380.00</td>
                                <td data-label="VAT">0.00</td>
                                <td data-label="Discount">0.00</td>
                                <td data-label="Total">	2,380.00</td>
                                <td data-label="FX Rate">0.00</td>
                                {/* <td data-label="Total(NGN)">0.00</td>
                                <td data-label="Negotiated">0.00</td>
                                <td data-label="Po Created By">0.00</td>
                                <td data-label="Status">0.00</td> */}

                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td data-label="#">2</td>
                                <td data-label="Date">2020-02-03</td>
                                <td data-label="Company">Imasuen Inc</td>
                                <td data-label="Batch Number">Ref-000000053</td>
                                <td data-label="Sub-Total">2,380.00</td>
                                <td data-label="VAT">0.00</td>
                                <td data-label="Discount">0.00</td>
                                <td data-label="Total">	2,380.00</td>
                                <td data-label="FX Rate">0.00</td>
                                {/* <td data-label="Total(NGN)">0.00</td>
                                <td data-label="Negotiated">0.00</td>
                                <td data-label="Po Created By">0.00</td>
                                <td data-label="Status">0.00</td> */}
                            </tr>
                        </tbody>
                    </table>

                </div>

            </main>
        </>
    );
};

export default Report;