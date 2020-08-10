import React from "react";
import { CardPanel } from "./CardPanel";

interface Props {
  car: any;
}

export function VehicleInfo(props: Props) {
  return (
    <CardPanel title="Vechicle Information">
      <ul className="list-group list-group-flush">
        <li className="list-group-item space">
          <small className="text-mute">Make</small>
          <small className="text-info">{props.car.makes}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Model</small>
          <small className="text-info">{props.car.model}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Exact Model</small>
          <small className="text-info">{props.car.model}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Transmission</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Interior Trim</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Specs</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Engine Cylinders</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Odometer Reading(km)</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Paint</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Accident History</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Vehicle History Report</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Service History</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Service Type</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Body</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Drive</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Steering Wheel Location</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Car Color</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Fuel Type</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Car Number</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Engine Size</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Structural / Chassis Damage</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Chassis Repaired</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Chassis Extension</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Navigation System</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">VIN Plate</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Manufacture Year</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Manufacture Month</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Warranty Validity</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">SMC Valid Till Kms</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Number Of Keys</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Roof</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Rim Type</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Rim Condition</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Seats Color</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Number Of Seats</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
        <li className="list-group-item space">
          <small className="text-mute">Number Of Tires</small>
          <small className="text-info">{props.car.transmission_type}</small>
        </li>
      </ul>
    </CardPanel>
  );
}
