import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Profile from "../../components/Profile";
import Wallet from '../../asset/wallet.png';
import Tranfer from '../../asset/transfer.png';
import TopUp from '../../asset/topup.png';
import History from '../../asset/history.png';
import "../../index.css";

function Dashboard() {
  return (
  	<>
      <Header/>
  		<section className="py-5">
		    <div className="container">
            <Profile/>
		      	<div className="row gx-5 content-center mt-5 p-3">
		      	   <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                  <a className="text-reset text-decoration-none" href="saldo">
                    <div className="card mb-5 mb-xl-0">
                        <div className="text-center card-body p-5">
                          <img src={Wallet} className="img50 card-img-top" alt="" />
                          <div className="mt-3">
                            <span className="fw-bolder">Saldo</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-4 mb-5">
                    <a className="text-reset text-decoration-none" href="transfer">
                      <div className="card mb-5 mb-xl-0">
                        <div className="text-center card-body p-5">
                          <img src={Tranfer} className="img50 card-img-top" alt="" />
                          <div className="mt-3">
                            <span className="fw-bolder">Tranfer</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                    <a className="text-reset text-decoration-none" href="topup">
                      <div className="card mb-5 mb-xl-0">
                        <div className="text-center card-body p-5">
                          <img src={TopUp} className="img50 card-img-top" alt="" />
                          <div className="mt-3">
                            <span className="fw-bolder">Top Up</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
                    <a className="text-reset text-decoration-none" href="history">
                      <div className="card mb-5 mb-xl-0">
                        <div className="text-center card-body p-5">
                          <img src={History} className="img50 card-img-top" alt="" />
                          <div className="mt-3">
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