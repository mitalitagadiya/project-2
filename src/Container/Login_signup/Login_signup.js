import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login_signup(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false);

    let schema = yup.object().shape({
        email: yup.string().required("please enter email id.").email("please enter valid email id."),
        password: yup.string().required("please enter password."),
        createdOn: yup.date().default(function () {
          return new Date();
        }),
      });

        const formik = useFormik({
          initialValues: {
            email: '',
            password: '',
          },
          validationSchema : schema,

          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        });

        const {handleChange, errors, handleSubmit} = formik;

    return (
        <center>
            <section>
                <div className="container">
                    <div className="section-title">
                        {
                        reset === "true" ?
                            <h2>Forgot password</h2> :
                            user === "login" ?
                                <h2>login</h2> :
                                <h2>Signup</h2>
                        }
                    </div>
                    <Formik values={formik}>
                    <Form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                        {
                            reset === "true" ?
                                 null :
                            user === "login" ?
                                null
                                :
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <div className="validate"/>
                                    <br></br>
                                </div>
                        }
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input onChange={handleChange} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"/>
                            <p>{errors.email}</p>
                        </div>
                        {
                            reset === "true"?
                                null :
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={handleChange} type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a password" />
                                    <br></br>
                                    <div className="validate"/>
                                    <p>{errors.password}</p>
                                </div>
                        }
                        {
                            reset === "true"?
                                <div class="text-center"><button className='s-btn appointment-btn scrollto' type="submit">Submit</button></div>
                                :
                                user === "login" ?
                                    <div class="text-center"><button className='s-btn appointment-btn scrollto' type="submit">Login</button></div>
                                    :
                                    <div class="text-center"><button className='s-btn appointment-btn scrollto' type="submit">Signup</button></div>
                        }
                        {

                            user === "login" ?
                                <div className="text-center">
                                    <br>
                                    </br>
                                    <span>Already have an Account ? <button className='s-btn appointment-btn scrollto'onClick={() => {setReset('false') ; setUser("signup")}}>Signup</button></span>
                                </div>
                                :
                                <div className="text-center">
                                    <br>
                                    </br>
                                    
                                    <span>Creat a new Account ? </span><button onSubmit={handleSubmit} className='s-btn appointment-btn scrollto' type="Submit">Login</button>
                                    {/* onSubmit={handleSubmit} */}

                                    <span>Creat a new Account ? </span><button className='s-btn appointment-btn scrollto' type="Submit">Login</button>
                                    onSubmit={handleSubmit}
                                </div>
                        }
                        <br></br>
                         <div className="text-center"><button type="submit"  className='s-btn appointment-btn scrollto' onClick={() => setReset('true')}>Forgot password</button></div>

                    </Form>
                    </Formik>
                </div>
            </section>
        </center>
    );
}

export default Login_signup;