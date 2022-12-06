import { useState } from "react";


const Stock = () => {

    return (
        <>


            <main>
                <div className="container-stock">
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

                            <div className="transfer-">
                                <button className="transfer-btn">ADD TRANSFERS</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
};

export default Stock;