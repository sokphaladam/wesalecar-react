/* eslint-disable no-useless-escape */
import React from 'react';
import { CardPanel } from './CardPanel';
import { ListGroup } from './ListGroup';
import { ListGroupItem } from './ListGroupItem';

interface Props {
  car: any;
}

export function CarBody(props: Props){

  const data = Object.keys(props.car.sub.body).map(x => {
    let label = x.replace(/\_/g, ' ');

    if (label === 'sings'){
      label = 'Signs Of Crumpling Or Straightening Inside The Trunk';
    }

    return {
      label,
      value: props.car.sub.body[x],
      type: typeof (props.car.sub.body[x])
    }
  })

  return(
    <CardPanel title="Car Body">
      <ListGroup>
        {
          data.map(x => {
            return <ListGroupItem label={x.label} value={x.type === 'boolean' ? (x.value ? 'Yes': 'No') : x.value } key={x.label} />
          })
        }
      </ListGroup>
    </CardPanel>
  )
}