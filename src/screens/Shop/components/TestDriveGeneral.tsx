/* eslint-disable no-useless-escape */
import React from 'react';
import { CardPanel } from './CardPanel';
import { ListGroup } from './ListGroup';
import { ListGroupItem } from './ListGroupItem';

interface Props {
  car: any;
}

export function TestDriveGeneral(props: Props) {

  const data = Object.keys(props.car.sub.testDriveGeneral).map(x => {
    return {
      label: x.replace(/\_/g, ' '),
      value: props.car.sub.testDriveGeneral[x],
      type: typeof (props.car.sub.testDriveGeneral[x])
    }
  })

  return (
    <CardPanel title="Car Body">
      <ListGroup>
        {
          data.map(x => {
            return <ListGroupItem label={x.label} value={x.type === 'boolean' ? (x.value ? 'Yes' : 'No') : x.value} key={x.label} />
          })
        }
      </ListGroup>
    </CardPanel>
  )
}