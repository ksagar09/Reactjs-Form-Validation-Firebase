import React, { useState } from 'react';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const ContactPage = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        zip: "",
        city: "",
        message: "",


    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const { name, contact, email, address, city, zip, message } = user; //if any data ismissing then return an error

        if (name && contact && email && address && city && zip && message) {
            const res = await fetch('https://react-js-form-validation-default-rtdb.firebaseio.com/ReactFormUserData.json', {
                method: 'POST',
                headers: {
                    "Content-Type": "applicaton/JSON",
                },
                body: JSON.stringify({
                    name,
                    email,
                    address,
                    zip,
                    city,
                    contact,
                    message,
                })
            });
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    contact: "",
                    address: "",
                    zip: "",
                    city: "",
                    message: "",
                });
            }
            alert('Form Submitted')
        } else {
            window.alert('Please fill all the fileds')
        }



    };
    return (
        <>
            <form method="POST">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4"> Name</label>
                        <input type="text" className="form-control" id="inputEmail4"
                            name="name"
                            autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.name}
                            placeholder="Enter Full Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Contact no</label>
                        <input type="number" className="form-control"
                            name="contact"
                            id="inputEmail4"
                            autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.contact}
                            placeholder="Enter Contact No" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email"
                            className="form-control"
                            name="email"
                            id="inputEmail4"
                            autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.email}
                            placeholder="Enter Email" />
                    </div>
                </div>
                <div className="form-group address_bar">
                    <label for="inputAddress">Address</label>
                    <input type="text"
                        className="form-control"
                        name="address"
                        id="inputAddress"
                        autocomplete="off"
                        required
                        onChange={getUserData}
                        value={user.address}
                        placeholder="Enter Full Address" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text"
                            className="form-control"
                            name="city"
                            id="inputCity"
                            autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.city}
                            placeholder="Enter City Name" />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="number"
                            className="form-control"
                            name="zip"
                            id="inputZip"
                            autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.zip}
                            placeholder="Enter 6 Digit Postal Code" />
                    </div>

                    <div className="form-group MessageSec col-md-6">
                        <label for="inputEmail4"> Message</label>
                        <input type="text" className="form-control" id="inputEmail4"
                            name="message"
                            // autocomplete="off"
                            required
                            onChange={getUserData}
                            value={user.message}
                            placeholder="Enter Message Here" />
                    </div>


                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                            name= "terms"
                            required

                            
                        />
                        <label className="form-check-label"
                            for="gridCheck">
                            I have read terms and condition...
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary submit_responce" onClick={postData}>Submit Responce</button>
            </form>

        </>
    );
};

export default ContactPage;