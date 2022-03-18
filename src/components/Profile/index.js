import React from "react";
import Masuk from '../../asset/decrease.png';
import Keluar from '../../asset/profits.png';
import Man from '../../asset/woman.png';

const Profile = () => {
  return (
  	<>
      <div className="row gx-5 content-center mt-5">
        <div className="col-xl-6 col-md-9 col-sm-12 mb-5">
          <div className="row">
            <div className="col-3">
              <img src={Man} className="img-thumbnail rounded-circle" alt=""/>
            </div>
            <div className="col-9">
              <h4 className="fw-bolder">Vika Putri Ariyanti</h4>
              <p>5641094</p>
              <a href="editprofile" className="btn btn-primary" role="button">Edit Profile</a>
            </div>
          </div>
        </div>
        
        <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
          <div className="card card-stats">
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <img src={Masuk} className="card-img-top" alt="" />
                </div>
                <div className="col-9">
                  <h5 className="card-title text-uppercase text-muted mb-0">Uang Masuk</h5>
                  <p>Rp 1.999.999,99</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-4 col-sm-6 mb-5">
          <div className="card card-stats">
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <img src={Keluar} className="card-img-top" alt="" />
                </div>
                <div className="col-9">
                  <h6 className="card-title text-uppercase text-muted mb-0">Uang Keluar</h6>
                  <p>Rp 1.999.999,99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  };

export default Profile;