import React from 'react';

export default function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit,
        disabled,
        errors,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h2>New User Information</h2>

                <label>Name:&nbsp;
                    <input
                        type='name'
                        name='name'
                        value={values.name}
                        onChange={onInputChange}
                        placeholder="Name"
                    />
                </label>
                <br />
                <br />
                <label>Email:&nbsp;
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                        placeholder="Email"
                    />
                </label>
                <br />
                <br />
                <label>Password:&nbsp;
                    <input 
                        type='text'
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                        placeholder="Password"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="termsInput">
                    Do you agree to the terms and conditions?
                    <input 
                        id="termsInput" 
                        type="checkbox" 
                        name="terms" 
                        onChange={onCheckboxChange}
                        checked={values.terms}
                    />
                </label>
                <br />
                <br />
            </div>

            <div className='form-group submit'>
                <button id='submitBtn' disabled={disabled}>Sign up!</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
        </form>
    )
}