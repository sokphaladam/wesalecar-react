/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useRouteMatch, Link } from 'react-router-dom';
import { ShopBooking } from './components/ShopBooking';

export function ShopDetailScreen() {
  const firebase = useFirebase();
  const match = useRouteMatch();
  const [car, setCar] = useState<any>({});
  const [load, isLoad] = useState(true);
  const [index, setIndex] = useState(0);
  const [indexTab, setIndexTab] = useState(0);
  const [model, setModel] = useState(false);
  const user = sessionStorage.getItem('user');

  const getData = async () => {
    const params: any = match.params;
    const snap = await firebase.firestore().collection('cars').doc(params.id!).get();
    if (snap) {
      await firebase.firestore().collection('cars').doc(params.id!).update({
        click: Number(snap.data()!.click === undefined ? 0 : snap.data()!.click) + 1
      })
      setCar({
        ...snap.data(),
        id: snap.id
      })
    }
  }

  useEffect(() => {
    if (load) {
      getData();
      isLoad(false);
    }
  }, [getData, load]);

  const handleBooking = () => {
    console.log(user)
    setModel(true);
  }

  return (
    <Content>
      {
        model && <ShopBooking onShowChange={v => setModel(v)} value={car} />
      }
      <div className="row">
        <div className="col-xl-12">
          <div className="inventory-title mb-2">
            <div className="border-bottom mb-2">
              <span className="text-success font-weight-semibold">{car.type}</span>
              <div className="d-flex justify-content-between align-items-center pb-2">
                <h5>
                  <a href="#" className="text-secondary hover-text-primary transation">{car.title}</a>
                </h5>
                {/* <div className="review float-right font-12">
                  <span>(28 Rating)</span>
                  <span className="ml-2 bg-primary py-1 px-2 text-white">4.50/5</span>
                </div> */}
              </div>
            </div>
            <div className="pricing d-flex justify-content-between">
              <div className="price py-1"><span className="h5 text-success">${new Intl.NumberFormat().format(Number(car.price))}</span></div>
              <div className="float-right">
                {user !== null && <a href="#" className="border px-3 py-1 font-mini text-dark" onClick={handleBooking}><i className="fas fa-calendar-alt"></i> Book Now</a>}
                {/* <a href="#" className="border px-3 py-1 font-mini text-dark"><i className="fas fa-dollar-sign"></i> Make An Offer</a>
                <a href="#" className="border px-3 py-1 font-mini text-dark"><i className="fas fa-print"></i> Print</a> */}
              </div>
            </div>
          </div>

          {
            car.image !== undefined &&
            <div className="full-img-sweep w-100" style={{ height: 450 }}>
              <div className="full-img-sweep w-100 ls-noskin ls-container ls-responsive ls-device-is-desktop" style={{
                height: 450,
                marginLeft: 'auto',
                marginRight: 'auto',
                position: 'relative',
                width: 1170,
                visibility: 'visible'
              }}
              >
                <div style={{ background: 'none transparent' }} className="ls-inner">
                  <div className="ls-layers">
                    <div className="ls-slide-backgrounds">
                      {
                        car.image.map((x: any, i: number) => {
                          return (
                            <div className="ls-wrapper ls-bg-outer" style={{ zIndex: 1, width: `${i === index ? '1170px' : '0'}`, height: `${i === index ? '450px' : '0'}` }} key={i}>
                              <div className="ls-wrapper ls-bg-wrap" style={{
                                backgroundColor: 'transparent',
                                display: 'block',
                                opacity: 1,
                                transform: 'matrix(1, 0, 0, 1, 0, 0)'
                              }}>
                                <img
                                  src={x}
                                  alt=""
                                  className="ls-bg"
                                  style={{
                                    margin: 0,
                                    zIndex: 'auto',
                                    width: 1200,
                                    height: 700,
                                    padding: 0,
                                    borderWidth: 0,
                                    borderRadius: 0,
                                    transform: 'translateX(-15px) translateY(-125px)',
                                    filter: 'none'
                                  }}
                                />
                              </div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
                <div className="ls-gui-element ls-thumbnail-wrapper" style={{ visibility: 'visible' }}>
                  <div className="ls-thumbnail" style={{ width: 600 }}>
                    <div className="ls-thumbnail-inner">
                      <div className="ls-thumbnail-slide-container">
                        <div className="ls-thumbnail-slide" style={{ height: 60, marginLeft: 0 }}>
                          {
                            car.image.map((x: any, i: number) => {
                              return (
                                <Link to='#' className="ls-thumb-1" style={{ width: 100, height: 60 }} onClick={() => setIndex(i)} key={i}>
                                  <img src={x} alt="" className={i === index ? 'ls-thumb-active' : ''} style={{ opacity: `${i === index ? '0.35' : '1'}` }} />
                                </Link>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          <div className="tab-two" style={{ marginTop: 180 }}>
            <ul className="nav nav-tabs wc-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <Link className={`nav-link ${indexTab === 0 ? 'active' : ''}`} id="overview-tab" data-toggle="tab" to="#" role="tab" aria-controls="overview" aria-selected="true" onClick={() => setIndexTab(0)}>Overview</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${indexTab === 1 ? 'active' : ''}`} id="features-tab" data-toggle="tab" to="#" role="tab" aria-controls="features" aria-selected="false" onClick={() => setIndexTab(1)}>Features & Option</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${indexTab === 2 ? 'active' : ''}`} id="vehicle-tab" data-toggle="tab" to="#" role="tab" aria-controls="vehicle" aria-selected="false" onClick={() => setIndexTab(2)}>Vehicle Information</Link>
              </li>
            </ul>
            <div className="tab-content p-4 border border-top-0" id="myTabContent">
              <div className={indexTab === 0 ? "tab-pane fade show active" : 'tab-pane fade'} id="overview" role="tabpanel" aria-labelledby="overview-tab">
                <h5 className="mb-3">Overview</h5>
                <p>{car.overviews}</p>
                <h5 className="mb-3">Specifications</h5>
                <table className="table table-bordered w-100 m-0 text-nowrap table-responsive">
                  <tr>
                    <td><span className="font-weight-bold">Fuel Type :</span> {car.fuel}</td>
                    <td><span className="font-weight-bold">Breaks :</span> {car.breaks}</td>
                  </tr>
                  <tr>
                    <td><span className="font-weight-bold">Seating :</span> {car.seat} members</td>
                    <td><span className="font-weight-bold">Colors :</span> {car.colors}</td>
                  </tr>
                  <tr>
                    <td><span className="font-weight-bold">Air Bags :</span> {car.air}</td>
                    <td><span className="font-weight-bold">Speed :</span> {car.speed}</td>
                  </tr>
                  <tr>
                    <td><span className="font-weight-bold">Engine :</span> {car.engine} </td>
                    <td><span className="font-weight-bold">Power Windows :</span> {car.power === 1 ? 'Available' : 'Unavailable'} </td>
                  </tr>
                </table>
              </div>
              <div className={indexTab === 1 ? "tab-pane fade show active" : 'tab-pane fade'} id="features" role="tabpanel" aria-labelledby="features-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-top mb-0">
                        <tr>
                          <td>Power Steering</td>
                          <td>
                            {car.power_steering === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                          </td>
                        </tr>
                        <tr>
                          <td>Power Windows Front</td>
                          <td>
                            {car.power_windows_front === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                          </td>
                        </tr>
                        <tr>
                          <td>Air Conditioner</td>
                          <td>
                            {car.air_conditioner === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                          </td>
                        </tr>
                        <tr>
                          <td>Passenger Airbag</td>
                          <td>
                            {car.passenger_airbag === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                          </td>
                        </tr>
                        <tr>
                          <td>Fog Lights - Front</td>
                          <td>
                            {car.foglights_front === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-top mb-0">
                        <tbody>
                          <tr>
                            <td>Anti Lock Braking System</td>
                            <td>
                              {car.anti_lock_braking_system === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                            </td>
                          </tr>
                          <tr>
                            <td>Driver Airbag</td>
                            <td>
                              {car.driver_airbag === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                            </td>
                          </tr>
                          <tr>
                            <td>Wheel Covers</td>
                            <td>
                              {car.wheel_covers === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                            </td>
                          </tr>
                          <tr>
                            <td>Automatic Climate Control</td>
                            <td>
                              {car.automatic_climate_control === true ? <i className="far fa-check-circle text-success"></i> : <i className="far fa-check-circle text-danger"></i>}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className={indexTab === 2 ? "tab-pane fade show active" : 'tab-pane fade'} id="vehicle" role="tabpanel" aria-labelledby="vehicle-tab">
                <div className="row">
                  <div className="col-md-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-top mb-0">
                        <tbody>
                          <tr>
                            <td>ARAI Mileage</td>
                            <td>{car.arai_mileage}</td>
                          </tr>
                          <tr>
                            <td>Engine Displacement (cc)</td>
                            <td>{car.engine_displacement}</td>
                          </tr>
                          <tr>
                            <td>Max Torque (nm@rpm)</td>
                            <td>{car.max_torque}</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity</td>
                            <td>{car.seating_capacity}</td>
                          </tr>
                          <tr>
                            <td>Boot Space (Litres)</td>
                            <td>{car.boot_space}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="table-responsive">
                      <table className="table table-bordered border-top mb-0">
                        <tbody>
                          <tr>
                            <td>Fuel Type</td>
                            <td>{car.fuel_type}</td>
                          </tr>
                          <tr>
                            <td>Max Power (bhp@rpm)</td>
                            <td>{car.max_power}</td>
                          </tr>
                          <tr>
                            <td>TransmissionType</td>
                            <td>{car.transmission_type}</td>
                          </tr>
                          <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>{car.fuel_tank_capacity}</td>
                          </tr>
                          <tr>
                            <td>Body Type</td>
                            <td>{car.body_type}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}