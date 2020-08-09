/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useRouteMatch, Link } from 'react-router-dom';
import { ShopBooking } from './components/ShopBooking';
import { Slider } from './components/Silder';
import { CardPanel } from './components/CardPanel';

export function ShopDetailScreen() {
  const firebase = useFirebase();
  const match = useRouteMatch();
  const [car, setCar] = useState<any>({});
  const [load, isLoad] = useState(true);
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
      <div className="row">
        <div className="col-xl-8 col-lg-9 order-2 order-lg-1 ls-direction-fix">

          <div className="border-bottom mb-2">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <h5><span className="text-secondary transation">{car.title}</span></h5>
            </div>
          </div>

          {car.image !== undefined && <Slider images={car.image} />}

          <div className="row" style={{ marginTop: 180 }}>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Vehicle Summary</h6>
                  <div className="ui divider"></div>
                  <div className="row">
                    <div className="col-6" style={{ paddingRight: 0 }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item space">
                          <small className="text-mute">Make</small>
                          <small className="text-info">{car.makes}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Year</small>
                          <small className="text-info">{car.year}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Body Type</small>
                          <small className="text-info">{car.body_type}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Color</small>
                          <small className="text-info">{car.colors}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Transmission</small>
                          <small className="text-info">{car.transmission_type}</small>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6" style={{ paddingLeft: 0 }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item space">
                          <small className="text-mute">Model</small>
                          <small className="text-info">{car.model}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Mileage</small>
                          <small className="text-info">{car.year}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Engine Size</small>
                          <small className="text-info">{car.engine_displacement}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Specs</small>
                          <small className="text-info">{car.colors}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Fuel Type</small>
                          <small className="text-info">{car.fuel_type}</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-6">
          <CardPanel title="Vechicle Information">

          </CardPanel>
          <br/>
          <CardPanel title="Glass And Outside Mirrors">

          </CardPanel>
          <br/>
          <CardPanel title="Lights">

          </CardPanel>
          <br/>
          <CardPanel title="Heat/AC">

          </CardPanel>
          <br/>
          <CardPanel title="Carpet, Trim And Mats">

          </CardPanel>
          <br/>
          <CardPanel title="Luggage Compartment">

          </CardPanel>
          <br/>
          <CardPanel title="Test Drive Sensors & Cameras">

          </CardPanel>
          <br/>
          <CardPanel title="Electrical System">

          </CardPanel>
          <br/>
          <CardPanel title="Tires And Wheels">

          </CardPanel>
        </div>
        <div className="col-6">
          <CardPanel title="Car Body">

          </CardPanel>
          <br />
          <CardPanel title="Check Of Doors">

          </CardPanel>
          <br />
          <CardPanel title="Audio Entertainment">

          </CardPanel>
          <br />
          <CardPanel title="Interior Amenities">

          </CardPanel>
          <br />
          <CardPanel title="Seats">

          </CardPanel>
          <br />
          <CardPanel title="Test Drive General">

          </CardPanel>
          <br />
          <CardPanel title="Engine">

          </CardPanel>
          <br />
          <CardPanel title="Transmission, Transaxle, Differential And Transfer Case">

          </CardPanel>
          <br />
          <CardPanel title="Brakes">

          </CardPanel>
        </div>
      </div>
    </Content>
  )
}