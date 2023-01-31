import React, { useState } from 'react'
import './PostFetch.css'
const PostFetch = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    let data = { name, email, phone }
    function submitHandler() {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        console.log(name, email, phone)
        fetch("http://localhost:8000/todo", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.json().then((result) => {
            })
        })
    }
    return (
        <div>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="firstname" className="input" type="text" placeholder=" " name="name" value={name}   onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="input-container ic2">
                    <input id="lastname" className="input" type="text" placeholder=" " name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/> 
                </div>
                <div>
                {showAlert && <div>Data has been saved successfully!</div>}
                <button className='submit' type='button' onClick={submitHandler}>Submit</button>
            </div>
            </div>
        </div>
    )
}

export default PostFetch
