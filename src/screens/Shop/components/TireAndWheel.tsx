import React from 'react';
import { CardPanel } from './CardPanel';
import { ListGroup } from './ListGroup';
import { ListGroupItem } from './ListGroupItem';

interface Props {
  car: any;
}

export function TireAndWheel(props: Props){
  const car = props.car;
  return(
    <CardPanel title="Tires And Wheels">
      <ListGroup>
        <ListGroupItem label="Tires Match" value={car.sub.tires.tires_match ? 'Yes': 'No'} />
        <ListGroupItem label="Wheels Match" value={car.sub.tires.wheels_match ? 'Yes' : 'No'} />
        <ListGroupItem label="Wheel Covers And Center Caps" value={car.sub.tires.wheels_covers_and_center_caps} />
        <ListGroupItem label="Front Left Tire Condition" value={car.sub.tires.front_left_tire_condition} />
        <ListGroupItem label="Front Left Tire Production Date" value={car.sub.tires.front_left_tire_production_date} />
        <ListGroupItem label="Rear Left Tire Condition" value={car.sub.tires.rear_left_tire_condition} />
        <ListGroupItem label="Rear Left Tire Production Date" value={car.sub.tires.rear_left_tire_production_date} />
        <ListGroupItem label="Correct Size" value={car.sub.tires.correct_size} />
        <ListGroupItem label="Front Right Tire Condition" value={car.sub.tires.front_right_tire_condition} />
        <ListGroupItem label="Front Right Tire Production Date" value={car.sub.tires.front_right_tire_production_date} />
        <ListGroupItem label="Rear Right Tire Condition" value={car.sub.tires.rear_right_tire_condition} />
        <ListGroupItem label="Rear Right Tire Production Date" value={car.sub.tires.rear_right_tire_production_date} />
      </ListGroup>
    </CardPanel>
  )
}