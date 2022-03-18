import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wallet from '../../asset/wallet.png';
import Tranfer from '../../asset/transfer.png';
import TopUp from '../../asset/topup.png';
import History from '../../asset/history.png';
import Man from '../../asset/woman.png';

function Dashboard() {
  return (
  	<>
      <Header/>
  		<section className="py-5">
		    <div className="container">

			    <div class="row gx-5 content-center">
			        <div class="col-sm-6 p-4">
			            <div class="row">
			                <div class="col-md-3">
			                    <img src={Man} 
			                    class="img-thumbnail rounded-circle" alt="r"/>
			                </div>
			                <div class="col-md-9">
			                	<h4 class="fw-bolder">Vika Putri Ariyanti</h4>
			                	<p>5641094</p>
			                	<button type="button" 
			                		class="btn btn-primary">Edit Profile
			                	</button>
			                </div>
			            </div>
			        </div>
			    </div>
	

		      	<div className="row gx-5 content-center mt-5">
               
		      	   <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                  <a className="text-reset text-decoration-none" href="saldo">
                    <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                          <img src={Wallet} className="card-img-top" alt="" />
                          <div className="text-center mt-3">
                            <span className="fw-bolder">Saldo</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                    <a className="text-reset text-decoration-none" href="transfer">
                      <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                          <img src={Tranfer} className="card-img-top" alt="" />
                          <div className="text-center mt-3">
                            <span className="fw-bolder">Tranfer</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                    <a className="text-reset text-decoration-none" href="topup">
                      <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                          <img src={TopUp} className="card-img-top" alt="" />
                          <div className="text-center mt-3">
                            <span className="fw-bolder">Top Up</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                    <a className="text-reset text-decoration-none" href="history">
                      <div className="card mb-5 mb-xl-0">
                        <div className="card-body p-5">
                          <img src={History} className="card-img-top" alt="" />
                          <div className="text-center mt-3">
                            <span className="fw-bolder">History</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
	      		</div>
	      	</div>
      	</section>
     	<Footer/>
	</>
  )
}

export default Dashboard;