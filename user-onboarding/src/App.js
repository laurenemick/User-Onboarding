import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
//import User from './User'
import formSchema from './formSchema'
import axios from 'axios'
import * as Yup from 'yup'

const initialFormValues = {
  /// Text Inputs ///
  name: '',
  email: '',
  password: '',
  /// Checkbox ///
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialDisabled = true


function App() {
  const [post, setPost] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)  
  const [users, setUsers] = useState([])


  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0] 
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
        ...formValues,
        [name]: checked,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault();

    console.log("submitted!");
    axios
      .post("https://reqres.in/api/users", formValues)
      .then(res => {
        setPost(res.data);

        console.log("success", res);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      //console.log(valid);
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header className="App-header"><h1>Onboarding List</h1></header>

      <Form 
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
      />
{/* 
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      } */}
    </div>
  );
}

export default App;
