import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Transfer() {
  return (
  	<>
     <Header/>
     <section className="d-flex flex-column min-vh-100 justify-content-center">
	    <div className="container px-5">
	      <div className="row justify-content-center">
	        <div className="col-lg-5">
	          <div className="bg-primary text-white">
	            <form className="py-5 px-5" method="post">
	              <h3 className="mb-4 text-center">Transfer</h3>
	              <div className="form-group">
	              	<label className="mb-1">Tranfer Ke</label>
                    <input type="text" className="form-control mb-3"
                    	placeholder="No Rekening"/>
                  </div>
                  <div className="form-group">
	              	<label className="mb-1">Jumlah</label>
                    <input type="text" placeholder="No Nominal" className="form-control mb-4" />
                  </div>
                  <input type="submit" value="Kirim" className="form-control btn btn-light"/>
                </form>
	          </div>
	        </div>
	      </div>
	    </div>
	 </section>
     <Footer/>
	</>
  )
}

export default Transfer;