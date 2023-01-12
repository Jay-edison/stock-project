import { useState } from "react";


const Stock = () => {

    return (
        <>


            <main>
                <div className="container-header-stock">
                    <p className="container-header-text">Stock|<strong>STOCK TRANSFER</strong></p>
                </div>

                <div className="stock-container">
                    <div className="reason-inner">
                        <p className="reason-header">Reason</p>

                        <div className="reason-container">
                            <select className="reason-option" name="">
                                <option value="Select Reason">Select Reason</option>
                                <option value="Select Reason">Debt Payment</option>
                            </select>

                            <div>
                                <button className="transfer-btn">ADD TRANSFERS</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table-container">
                    <table className="transfer-table">
                        <thead>
                            <tr>
                                <th>Transfer No.</th>
                                <th>Transfer Date</th>
                                <th>Source Branch</th>
                                <th>Destination Branch</th>
                                <th>Comments</th>
                                <th>Transfer Status</th>
                                <th>Line</th>
                                <th>QTY</th>
                                <th>Approval</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Transfer No.">1</td>
                                <td data-label="Transfer Date">Nov 20, 2020, 07:40pm</td>
                                <td data-label="Source Branch">Lagos Island</td>
                                <td data-label="Destination Branch">Lagos</td>
                                <td data-label="Comments">Random comment text</td>
                                <td data-label="Transfer Status"> <img className="pending-img"
                                    src={require("./asset/images/Pending.svg").default}
                                    alt="Pending"
                                /></td>
                                <td data-label="Line">Line 1</td>
                                <td data-label="QTY">1</td>
                                <td data-label="Approval"><img className="pending-img"
                                    src={require("./asset/images/Pending.svg").default}
                                    alt="Pending"
                                /></td>
                                <td data-label="Action">1</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td data-label="Transfer No.">2</td>
                                <td data-label="Transfer Date">Nov 20, 2020, 07:40pm</td>
                                <td data-label="Source Branch">Lagos Island Marina</td>
                                <td data-label="Destination Branch">Comment Text</td>
                                <td data-label="Comments">Random comment text</td>
                                <td data-label="Transfer Status"><img className="req-img"
                                    src={require("./asset/images/Approved.svg").default}
                                    alt="processed"
                                /></td>
                                <td data-label="Line">Line 2</td>
                                <td data-label="QTY">2</td>
                                <td data-label="Approval"><img className="req-img"
                                    src={require("./asset/images/Approved.svg").default}
                                    alt="processed"
                                /></td>
                                <td data-label="Action">1</td>
                            </tr>
                        </tbody>

                    </table>
                    <p className="category-num">1 of 2 of 2</p>


                </div>
            </main>

        </>
    );
};

export default Stock;