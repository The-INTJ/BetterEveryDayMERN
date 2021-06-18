import React from 'react';
import '../css/account-page.css';

const AccountPage = (props) => {

    return (

        <div id="whole">
            <form>
                <div id="inner-form-div">
                    <h1>Update account</h1>
            
                    <div className="formDiv">
                        <label for="name" className=""><span>Your name</span></label>
                        <br/>
                        <div className="align-column">
                            <input type="text" id="name" name="name"/>
                            <span id="nameErrorHtml"></span>
                        </div>
                    </div>

                    <div className="formDiv">
                        <label for="email" className=""><span>Email</span></label>
                        <br/>
                        <div className="align-column">
                            <input type="text" id="email" name="email"/>
                            <span id="emailErrorHtml"></span>
                        </div>
                    </div>

                    <div className="formDiv">
                        <label for="phone" className=""><span>Phone</span></label>
                        <br/>
                        <div className="align-column">
                            <input type="text" id="phone" name="phone"/>
                            <span id="phoneErrorHtml"></span>
                        </div>
                    </div>

                    <div className="formDiv">
                        <label for="password" className=""><span>Password</span></label>
                        <br/>
                        <div className="align-column">
                            <input type="password" placeholder="At least 7 characters" name="password" id="password"/>
                            <span id="passwordErrorHtml"></span>
                        </div>
                    </div>

                    <br/>

                    <div onClick="callSubmit()" id="change">
                        Submit Changes
                    </div>
                    <input type="submit" id="invis-submit"/>
                </div>
            </form>

            <div id="usr-inf-cont">
                <div id="user-info">
                    <h2>User Info</h2>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                        </tr>
                    </table>
                    <h2>User goals</h2>
                    <table>
                        <tr>
                            <th>Goal Name</th>
                            <th>Daily</th>
                            <th>Completed</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        )


}

export default AccountPage;