import React from "react";
import { CardPanel } from "./CardPanel";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "./ListGroupItem";

interface Props {
  car: {
    sub: {
      information: any
    }
  };
}

export function VehicleInfo(props: Props) {
  const car: any = props.car.sub.information;
  return (
    <CardPanel title="Vechicle Information">
      <ListGroup>
        <ListGroupItem label="Make" value={car.make} />
        <ListGroupItem label="Model" value={car.model} />
        <ListGroupItem label="Exact Make" value={car.extact_model} />
        <ListGroupItem label="Transmission" value={car.transmission} />
        <ListGroupItem label="Interior Trim" value={car.interior_trim} />
        <ListGroupItem label="Specs" value={car.specs} />
        <ListGroupItem label="Engine Cylinders" value={car.engine_cylinders} />
        <ListGroupItem label="Odometer Reading(km)" value={car.odometer_reading} />
        <ListGroupItem label="Paint" value={car.paint} />
        <ListGroupItem label="Accident History" value={car.accident_history ? 'Yes' : "No"} />
        <ListGroupItem label="Vehicle History Report" value={car.vehicle_history} />
        <ListGroupItem label="Service History" value={car.service_history} />
        <ListGroupItem label="Service Type" value={car.service_type} />
        <ListGroupItem label="Body" value={car.body} />
        <ListGroupItem label="Drive" value={car.drive} />
        <ListGroupItem label="Steering Wheel Location" value={car.steering_wheel_location} />
        <ListGroupItem label="Car Color" value={car.car_color} />
        <ListGroupItem label="Fuel Type" value={car.fuel_type} />
        <ListGroupItem label="Car Number" value={car.car_number} />
        <ListGroupItem label="Engine Size" value={car.engine_size} />
        <ListGroupItem label="Structural / Chassis Damage" value={Boolean(car.structural) ? 'Yes' : "No"} />
        <ListGroupItem label="Chassis Repaired" value={car.paint} />
        <ListGroupItem label="Chassis Extension" value={car.chassis_extension} />
        <ListGroupItem label="Navigation System" value={car.navigation ? 'Yes' : 'No'} />
        <ListGroupItem label="VIN Plate" value={car.vin_plate ? "Yes": "No"} />
        <ListGroupItem label="Manufacture Year" value={car.manufacture_year} />
        <ListGroupItem label="Manufacture Month" value={car.manufacture_month} />
        <ListGroupItem label="Warranty Validity" value={car.warranty_validity ? "Yes": "No"} />
        <ListGroupItem label="SMC Valid Till Kms" value={car.smc} />
        <ListGroupItem label="Number Of Keys" value={car.number_of_key} />
        <ListGroupItem label="Roof" value={car.roof} />
        <ListGroupItem label="Rim Type" value={car.rim_type} />
        <ListGroupItem label="Rim Condition" value={car.rim_condition} />
        <ListGroupItem label="Seats Color" value={car.seat_color} />
        <ListGroupItem label="Number Of Seats" value={car.number_seat} />
        <ListGroupItem label="Number Of Tires" value={car.number_tire} />
      </ListGroup>
    </CardPanel>
  );
}
