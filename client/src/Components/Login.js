import React from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

function Login({touched, errors, token, setToken}) {
    if(token) {
        return <Redirect to="/food" />;
    }
    return (
        <Form >
      <div >
        <label >Username</label>
        <Field
          
          name="username"
          type="text"
          autoComplete="off"
        />
        <p>{touched.username && errors.username}</p>
      </div>
      <div >
        <label>Password</label>
        <Field
          name="password"
          type="password"
          autoComplete="off"
        />
      </div>
      <p>{touched.password && errors.password}</p>
      <button type="submit">Submit &rarr;</button>
    </Form>

    );
}

export default withFormik({
    mapPropsToValues() {
      return {
        username: "",
        password: ""
      };
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .min(6)
        .required()
    }),
    handleSubmit(values, formikBag) {
      const {setToken} = formikBag.props;
      
      const url =
        "http://localhost:5000/api/register";
      axios
        .post(url, values)
        .then(response => {
          setToken(response.data.token);
          formikBag.props.history.push("/food");
          console.log('login Response', response);
        })
        .catch(e => {
          console.log('login error', e.response);
        });
    }
  })(Login);