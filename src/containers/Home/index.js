import React from 'react';
import Icon from '../../asset/logo.jpg';
import { Nav, Navbar } from "react-bootstrap";
import Footer from "../../components/Footer";

function Home() {
  return (
  	<div>
  	 <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <div className="container px-5">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3" href="signup">Daftar</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
	  <header className="py-3">
	    <div className="container px-5 mb-5">
	      <div className="row gx-5 align-items-center">
	        <div className="col-lg-8 col-xl-7 col-xxl-6">
	          <div className="my-5 text-xl-start">
	            <h1 className="display-5 fw-bolder mb-2">E-VVallet</h1>
	            <p className="lead fw-normal mb-4">
	            	Nikmati transaksi dengan mudah dan aman dimanapun dan kapanpun 
	            	hanya dengan <b>E-Vallet</b>
	            </p>
	            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="signup">Daftar</a>
	          </div>
	        </div>
	        <div className="col-xl-5 col-xxl-6">
	          <img className="img-fluid" src={Icon} alt=""/>
	          <a className="text-decoration-none text-muted"
	          	href="https://www.vecteezy.com/free-vector/e-wallet">
	          	<p class="text-center mt-3">E Wallet Vectors by Vecteezy</p>
	          </a>
	        </div>
	      </div>
	    </div>
	  </header>
	  <Footer/>
	</div>
  )
}

export default Home;