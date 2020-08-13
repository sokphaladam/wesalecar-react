import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopBooking } from '../screens/Shop/components/ShopBooking';

interface Props {
  data: any;
}

export function CardCarItem2(props: Props) {
  const [model, setModel] = useState(false);
  const images = props.data.image === undefined ? props.data.images : props.data.image;
  return (
    <div className="card-wesalecar">
      {
        model && <ShopBooking onShowChange={v => setModel(v)} value={props.data} />
      }
      <div className="row">
        <Link to={'/shop/' + props.data.id} className="col-3">
          <img src={images[0]} alt="" style={{ height: 'auto', width: 195, objectFit: 'cover' }} />
        </Link>
        <div className="col-9">
          <div className="row">
            <div className="col-6">
              <Link to={'/shop/' + props.data.id} className="ui tiny header">{props.data.title}</Link>
            </div>
            <div className="col-6 text-right">
              <b className="text-success">USD {new Intl.NumberFormat().format(Number(props.data.price))}</b>
            </div>
          </div>
          <div className="ui divider"></div>
          <div className="row">
            <div className="col-9">
              <div className="row">
                <div className="col-6">
                  <small className="text-mute">
  Service History: <small className="text-info">{props.data.service_history}</small>
                  </small>
                </div>
                <div className="col-6">
                  <small className="text-mute">
                    Specs: <small className="text-info">{props.data.specs}</small>
                  </small>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <small className="text-mute">
                    Mileage: <small className="text-info">{props.data.odometer_reading} Km</small>
                  </small>
                </div>
                <div className="col-6"  >
                  <small className="text-mute">
                    Color: <small className="text-info">{props.data.colors} {props.data.car_color}</small>
                  </small>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <small className="text-mute">
                    Transimission: <small className="text-info">{props.data.transmission}</small>
                  </small>
                </div>
                <div className="col-6">
                  <small className="text-mute">
                    Engine: <small className="text-info">{props.data.engine_size}</small>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-3 text-right">
              <button className="ui positive basic button mini" onClick={() => setModel(true)}>BID NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}