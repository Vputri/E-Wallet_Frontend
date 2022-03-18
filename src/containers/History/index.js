import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Masuk from '../../asset/decrease.png';
import Keluar from '../../asset/profits.png';
import Profile from "../../components/Profile";

function History() {
  return (
  	<>
      <Header/>
      <section className="py-5">
			<div className="container">
				<Profile/>

		        <div className="row mt-3">
		        	<div className="py-1 text-white bg-primary">History</div>
		        	<div className="card card-stats mb-4 mb-xl-0">
				        <div className="card-body">
				            <div className="row">
				                <div className="col-1 mb-3">
				                    <img src={Keluar} className="card-img-top" alt="" />
				                </div>
				                <div className="col">
				                   	<p className="text-muted mb-0">15/03/2022</p>
				                    <p className="text-muted">02:17:48</p>
				                </div>
				                <div className="col-auto">
				                   	<p className="card-title text-uppercase">Rp 150.000</p>
				                </div>
				            </div>
				       	</div>
				    </div>
				    <div className="card card-stats mb-4 mb-xl-0 mt-3">
				        <div className="card-body">
				            <div className="row">
				                <div className="col-1 mb-3">
				                    <img src={Masuk} className="card-img-top" alt="" />
				                </div>
				                <div className="col">
				                   	<p className="text-muted mb-0">15/03/2022</p>
				                    <p className="text-muted">02:17:47</p>
				                </div>
				                <div className="col-auto">
				                   	<p className="card-title text-uppercase">Rp 150.000</p>
				                </div>
				            </div>
				       	</div>
				    </div>

		        </div>
			</div>
      </section>
      <Footer/>
	</>
  )
}

export default History;