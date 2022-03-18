import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Message from "../../components/Message";

function Login() {
	const [message, setMessage] = useState(false);
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
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

		axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('dashboard');
			})
			.catch((error) => {
		        if (error.response.status === 401){
		          setMessage(true);
		        }
	        });
	};

	return (
	     <section className="d-flex flex-column min-vh-100 justify-content-center">
	        <div className="container px-5">
	          <div className="row justify-content-center">
	            <div className="col-lg-6">
	              {message ? <Message variant="danger" msg="password/email salah"/> : null}
	              <div className="bg-primary text-white">
	                <form className="py-5 px-5" onSubmit={handleSubmit}>
	                  <h3 className="mb-4 text-center">Login</h3>

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
	                  <div className="form-group row mb-3">
	                    <input type="password" 
	                    	name="password" 
	                    	id="password"
	                    	placeholder="Password"
	                    	className="form-control" 
	                    	autoComplete="current-password"
	                    	onChange={handleChange} required/>
	                  </div>
	                  <div className="form-group row mb-3">
		                  <button className="btn btn-light" 
		                  	type="submit" 
		                  	>Masuk
		                  </button>
	                  </div>
	                  <hr/>

	                  <div className="text-center">
	                    <p>Belum punya akun?
	                      <a className="text-reset" href="signup"> Daftar disini</a>
	                    </p>
	                  </div>
	                </form>
	              </div>
	            </div>
	          </div>
	        </div>
	      </section>
	);
}

export default Login;