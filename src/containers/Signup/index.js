import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Message from "../../components/Message";

function Signup() {
  const [message, setMessage] = useState(false);
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: '',
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/register/`, {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        history.push('login');
      })
      .catch((error) => {
        if (error.response.status === 500){
          setMessage(true);
        }
        console.log(error.response)
      });
  };

  return (
    <section className="d-flex flex-column min-vh-100 justify-content-center py-3">
      <div className="container px-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">

            {message ? <Message variant="danger" msg="alamat email sudah terdaftar"/> : null}
            <div className="bg-primary text-white">
              <form className="py-5 px-5" method="post" action="{% url 'account_signup' %}">
                <h3 className="mb-4 text-center">Daftar</h3>
                <div className="form-group row">
                  <input type="email"
                    id="email"
                    name="email"
                    className="form-control mb-3" 
                    placeholder="Alamat e-mail" 
                    required 
                    autoComplete="email"
                    onChange={handleChange}/>
                </div>
                <div className="form-group row">
                  <input className="form-control mb-3" 
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={handleChange} required/>
                </div>
                <div className="form-group row mb-3">
                  <input type="password" 
                    name="password" 
                    id="password"
                    placeholder="Password"
                    className="form-control" 
                    autoComplete="current-password"
                    onChange={handleChange} required/>
                </div>
                <div className="row mb-4">
                  <button className="btn btn-light" 
                    type="submit"
                    onClick={handleSubmit}>Submit
                  </button>
                </div>

                <div className="text-center">
                  <span>Sudah punya akun? Silahkan
                    <a className="text-reset" href="login"> Masuk disini</a>
                  </span>
                </div>

              </form>

            </div>
            
          </div>
        </div>
      </div>
    </section>

    );
  };

export default Signup;