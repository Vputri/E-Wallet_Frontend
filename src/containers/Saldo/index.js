import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";

function Saldo() {
  return (
  	<>
		<Header/>
  		<section className="py-5 mb-5">
		    <div className="container mb-5">
            	<Profile/>
            </div>
     	</section>
     	<Footer/>
	</>
  )
}

export default Saldo;