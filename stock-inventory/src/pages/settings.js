// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Settings = () => {
    return (
        <>
            <main>
                <div className="container">
                    <p className="container-header-text">Settings|<strong>ADD BID CATEGORY</strong></p>
                </div>

                <div className="container-newbid">
                    <div>
                        <button className="newbid-btn">Add New Bid Category</button>
                    </div>
                </div>

                <div className="container-entries">
                    <label className="show-entries">
                        Show Entries
                        <input type="text" className="entries" name="fname" placeholder="Input number"></input>
                    </label>
                </div>

                <div>
                    <input type="text" className="search-entries" name="fname" placeholder="Search"></input>
                </div>

                <div className="bid-header-container">
                    <p className="bid-header">Publishing Online Bid Category List</p>
                </div>

                <div className="category-container">
                    <table className="category-table">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Category Name">AUTO PAINT MATERIALS</td>
                                <td>#</td>
                            </tr>
                            <tr>
                                <td>AUTO SPARES</td>
                                {/* <td><img className="category-img" src={require("./asset/images/edit down.svg").default} alt="edit"></img></td> */}
                                <td>#</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="category-num">1 of 2 of 2</p>




                </div>



            </main>
        </>
    );
};

export default Settings;