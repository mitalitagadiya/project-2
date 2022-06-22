import { Form, Formik, useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

function Appointment(props) {

    let schema = yup.object().shape({
        name: yup.string().required("please enter name."),
        email: yup.string().email("please enter vaild email id.").required("please enter email id."),
        phone: yup.string().required("please enter your phone number"),
        date: yup.string().required("please enter any Date."),
        department: yup.string().required("please select any Department."),
        message: yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleBlur, handleSubmit, errors, touched } = formik;

    return (
        <div>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input  onChange={handleChange} onBlur={handleBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <p className='text-color'>
                                            {errors.name && touched.name ? errors.name : ''}
                                        </p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input  onChange={handleChange} onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <p className='text-color'>
                                            {errors.email && touched.email ? errors.email : ''}
                                        </p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input  onChange={handleChange} onBlur={handleBlur} type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                        <p className='text-color'>
                                            {errors.phone && touched.phone ? errors.phone : ''}
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input  onChange={handleChange} onBlur={handleBlur} type="text" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <p className='text-color'>
                                            {errors.date && touched.date ? errors.date : ''}
                                        </p>
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select  onChange={handleChange} onBlur={handleBlur} name="department" id="department" className="form-select">
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <p className='text-color'>
                                            {errors.department && touched.department ? errors.department : ''}
                                        </p>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea  onChange={handleChange} onBlur={handleBlur} className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default Appointment;