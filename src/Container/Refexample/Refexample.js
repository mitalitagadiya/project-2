import React, { useRef } from 'react';

function Refexample() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = () => {
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);


        // nameRef.current.style.backgroundColor = 'pink'

    }

    return (

        <div>
            <center>
                <br></br>
                <br></br>
                <input ref={nameRef} type="text" name="name" placeholder="Your Name" />
                <br></br>
                <br></br>
                <input ref={emailRef} type="text" name="email" placeholder="Your Email" />

                <input ref={passwordRef} type="password" name="password" placeholder="Your Password" />
                <br></br>
                <br></br>
                <button onClick={() => handleSubmit()}>Submit</button>
            </center>
        </div>
    );
}

export default Refexample;