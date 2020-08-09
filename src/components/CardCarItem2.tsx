import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  data: any;
}

export function CardCarItem2(props: Props) {
  return (
    <Link to={'/shop/' + props.data.id} className="card-wesalecar">
      <div className="row">
        <div className="col-3">
          <img src={props.data.image[0]} alt="" style={{ height: 'auto', width: 195, objectFit: 'cover' }} />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-6">
              <span className="ui tiny header">{props.data.title}</span>
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
                    Service History: <small className="text-info">No Service History</small>
                  </small>
                </div>
                <div className="col-6">
                  <small className="text-mute">
                    Specs: <small className="text-info">CGG</small>
                  </small>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <small className="text-mute">
                    Mileage: <small className="text-info">No Service</small>
                  </small>
                </div>
                <div className="col-6">
                  <small className="text-mute">
                    Color: <small className="text-info">{props.data.colors}</small>
                  </small>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <small className="text-mute">
                    Transimission: <small className="text-info">{props.data.transmission_type}</small>
                  </small>
                </div>
                <div className="col-6">
                  <small className="text-mute">
                    Engine: <small className="text-info">{props.data.engine}</small>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-3 text-right">
              <button className="ui positive basic button mini">BID NOW</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}