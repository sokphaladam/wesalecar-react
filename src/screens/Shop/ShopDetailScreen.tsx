/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Content } from '../../components/Content';
import { useFirebase } from 'react-redux-firebase';
import { useRouteMatch, Link } from 'react-router-dom';
import { ShopBooking } from './components/ShopBooking';
import { Slider } from './components/Silder';
import { CardPanel } from './components/CardPanel';
import { VehicleInfo } from './components/VehicleInfo';
import { ListGroup } from './components/ListGroup';
import { ListGroupItem } from './components/ListGroupItem';
import { TireAndWheel } from './components/TireAndWheel';
import { CarBody } from './components/CarBody';
import { TestDriveGeneral } from './components/TestDriveGeneral';

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

  if(load || car.sub === undefined) return <Content></Content>

  return (
    <Content>
      {
        model && <ShopBooking onShowChange={v => setModel(v)} value={car} />
      }
      <div className="border-bottom mb-2">
        <div className="d-flex justify-content-between align-items-center pb-2">
          <h5><span className="text-secondary transation">{car.title}</span></h5>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-xl-8 col-lg-9">
          <div style={{ height: 600, maxHeight: 600, position: 'relative', }}>
            {car.image !== undefined && <Slider images={car.image} />}
            {car.images !== undefined && <Slider images={car.images} />}
          </div>

          <br />

          <div className="row" style={{ marginTop: 10 }}>
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
                          <small className="text-info">{car.make}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Year</small>
                          <small className="text-info">{car.year}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Body Type</small>
                          <small className="text-info">{car.body}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Color</small>
                          <small className="text-info">{car.colors} {car.car_color}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Transmission</small>
                          <small className="text-info">{car.transmission}</small>
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
                          <small className="text-info">{car.odometer_reading}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Engine Size</small>
                          <small className="text-info">{car.engine_size}</small>
                        </li>
                        <li className="list-group-item space">
                          <small className="text-mute">Specs</small>
                          <small className="text-info">{car.specs}</small>
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
        <div className="col-xl-4 col-lg-3">
          <div className="card">
            <div className="card-body">
              <div style={{ textAlign: 'center' }}>
                Asking Price <br/>
                <b>USD {new Intl.NumberFormat().format(Number(car.price))}</b>
              </div>
            </div>
            <div className="card-footer">
              <button className="ui positive button mini fluid" onClick={handleBooking}>BID NOW</button>
            </div>
          </div>
          <br/>
          <div className="card">
            <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center', border: 'solid 1px #eee', width: 100, padding: 5 }}>
                <img src="https://uae.buyanycar.com/assets/images/usp1.png" alt="" style={{ width: 50, height: 50 }}/>
                <br />
                <div style={{ lineHeight: 'normal', fontSize: '11px', marginTop: 10 }}>Pre-inspected cars. Guaranteed to pass test.</div>
              </div>
              <div style={{ textAlign: 'center', border: 'solid 1px #eee', width: 100, padding: 5 }}>
                <img src="https://uae.buyanycar.com/assets/images/usp2.png" alt="" style={{ width: 50, height: 50 }}/>
                <br/>
                <div style={{ lineHeight: 'normal', fontSize: '11px', marginTop: 10 }}>Directly from sellers, without the hassle. We manage every step.</div>
              </div>
              <div style={{ textAlign: 'center', border: 'solid 1px #eee', width: 100, padding: 5}}>
                <img src="https://uae.buyanycar.com/assets/images/usp3.png" alt="" style={{ width: 50, height: 50 }}/>
                <br/>
                <div style={{ lineHeight: 'normal', fontSize: '11px', marginTop: 10 }}>Delivered to your doorstep at your desired price.</div>
              </div>
            </div>
          </div>
          <br/>
          <div className="alert alert-success" role="alert">
            <h6 className="alert-heading">Car Buy-Back Guarantee</h6>
            <hr/>
            <p> If at any point in time, you decide to sell the vehicle again, WESALECAR will guarantee to purchase it within 30 minutes - in any condition, any make, any model, even if it is damaged or financed.</p>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {
            car.sub !== undefined && <VehicleInfo car={car} />
          }
          <br />
          <CardPanel title="Glass And Outside Mirrors">
            <ListGroup>
              <ListGroupItem label="Windshield Glass" value={car.sub.mirror.windshield} />
              <ListGroupItem label="Sunroof Glass" value={car.sub.mirror.sunroof} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Lights">
            <ListGroup>
              <ListGroupItem label="Back End Exterior Light" value={car.sub.light.back_end_exterior_light} />
              <ListGroupItem label="Front End Exterior Light" value={car.sub.light.front_end_exterior_light} />
              <ListGroupItem label="Hazard Light" value={car.sub.light.hazard_light} />
              <ListGroupItem label="Side Exterior Left" value={car.sub.light.side_exterior_left} />
              <ListGroupItem label="Side Exterior Right" value={car.sub.light.side_exterior_right} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Heat/AC">
            <ListGroup>
              <ListGroupItem label="Air Conditioning System" value={car.sub.heat.air_conditioning_system} />
              <ListGroupItem label="Heating System" value={car.sub.heat.heating_system} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Carpet, Trim And Mats">
            <ListGroup>
              <ListGroupItem label="Door Trim And Door Planel" value={car.sub.carp.door_trim_and_planel} />
              <ListGroupItem label="Headliner" value={car.sub.carp.headliner} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Luggage Compartment">
            <ListGroup>
              <ListGroupItem label="Vehicle Jack Tool Kit Wheel Spanner" value={car.sub.luggage.vehicle_jack_tool_kit_wheel_spanner} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Test Drive Sensors & Cameras">
            <ListGroup>
              <ListGroupItem label="Front Camera" value={car.sub.testDrive.front_camera} />
              <ListGroupItem label="Right Camera" value={car.sub.testDrive.right_camera} />
              <ListGroupItem label="Rear Sensors" value={car.sub.testDrive.rear_sensors} />
              <ListGroupItem label="Rear Camera" value={car.sub.testDrive.rear_camera} />
              <ListGroupItem label="Front Sensors" value={car.sub.testDrive.front_sensors} />
              <ListGroupItem label="Left Camera" value={car.sub.testDrive.left_camera} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Electrical System">
            <ListGroup>
              <ListGroupItem label="Front Right Door" value={car.sub.ele.front_right_door} />
              <ListGroupItem label="Rear Right Door" value={car.sub.ele.rear_right_door} />
              <ListGroupItem label="Front Left Door" value={car.sub.ele.front_left_door} />
              <ListGroupItem label="Rear Left Door" value={car.sub.ele.rear_left_door} />
            </ListGroup>
          </CardPanel>
          <br />
          <TireAndWheel car={car}/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <CarBody car={car}/>
          <br />
          <CardPanel title="Check Of Doors">
            <ListGroup>
              <ListGroupItem label="Tailgate" value={car.sub.door.tailgate} />
              <ListGroupItem label="Power Liftgate Operation" value={car.sub.door.power_liftgate_operation} />
              <ListGroupItem label="Hood" value={car.sub.door.hood} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Audio Entertainment">
            <ListGroup>
              <ListGroupItem label="Radio, Casette, CD and Speakers" value={car.sub.audio.radio_casette} />
              <ListGroupItem label="Board Computer" value={car.sub.audio.board_computer} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Interior Amenities">
            <ListGroup>
              <ListGroupItem label="Warning Signals Active?" value={car.sub.interior.warning_signals_active} />
              <ListGroupItem label="Horn" value={car.sub.interior.horn} />
              <ListGroupItem label="Center Armrest/console" value={car.sub.interior.center_armest} />
              <ListGroupItem label="Steering Wheel Controls" value={car.sub.interior.steering_wheel_controls} />
              <ListGroupItem label="Glove Box" value={car.sub.interior.glove_box} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Seats">
            <ListGroup>
              <ListGroupItem label="Safety Belts" value={car.sub.seat.safety_belts} />
            </ListGroup>
          </CardPanel>
          <br />
          <TestDriveGeneral car={car}/>
          <br />
          <CardPanel title="Engine">
            <ListGroup>
              <ListGroupItem label="Hoses, Wiring And Fittings (coolant, Fuel, Brake, Steering, Vacuum, A/c), Check For Wear)" value={car.sub.engine.hoses} />
              <ListGroupItem label="Inspect Supercharger / Turbocharger Air Cooler" value={car.sub.engine.inspect} />
              <ListGroupItem label="Water, Sludge Or Engine Coolant In Oil (check Underside Of Oil Filler Cap)" value={car.sub.engine.water} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Transmission, Transaxle, Differential And Transfer Case">
            <ListGroup>
              <ListGroupItem label="Automatic Transmission/transaxle" value={car.sub.transmission.automatic_transmissions_transaxle} />
              <ListGroupItem label="Transfer Case / 4x4" value={car.sub.transmission.transfer_case} />
              <ListGroupItem label="Differential/drive Axle" value={car.sub.transmission.differential_drive_axle} />
            </ListGroup>
          </CardPanel>
          <br />
          <CardPanel title="Brakes">
            <ListGroup>
              <ListGroupItem label="Rotors And Drums" value={car.sub.brakes.rotors_and_drums} />
              <ListGroupItem label="Brake Pads And Shoes" value={car.sub.brakes.brake_pads_and_shoes} />
              <ListGroupItem label="Parking Brake" value={car.sub.brakes.parking_brake} />
            </ListGroup>
          </CardPanel>
        </div>
      </div>
    </Content>
  )
}