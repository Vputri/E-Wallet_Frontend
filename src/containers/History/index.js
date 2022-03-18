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

		        <div class="row mt-3">
		        	<div className="py-1 text-white bg-primary">History</div>
		        	<div class="card card-stats mb-4 mb-xl-0">
				        <div class="card-body">
				            <div class="row">
				                <div class="col-1 mb-3">
				                    <img src={Keluar} className="card-img-top" alt="" />
				                </div>
				                <div class="col">
				                   	<p class="text-muted mb-0">15/03/2022</p>
				                    <p class="text-muted">02:17:48</p>
				                </div>
				                <div class="col-auto">
				                   	<p class="card-title text-uppercase">Rp 150.000</p>
				                </div>
				            </div>
				       	</div>
				    </div>
				    <div class="card card-stats mb-4 mb-xl-0 mt-3">
				        <div class="card-body">
				            <div class="row">
				                <div class="col-1 mb-3">
				                    <img src={Masuk} className="card-img-top" alt="" />
				                </div>
				                <div class="col">
				                   	<p class="text-muted mb-0">15/03/2022</p>
				                    <p class="text-muted">02:17:47</p>
				                </div>
				                <div class="col-auto">
				                   	<p class="card-title text-uppercase">Rp 150.000</p>
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