import React from 'react';

interface Props {
  label: string;
  value: string;
}

export function ListGroupItem(props: Props){
  return(
    <li className="list-group-item space">
      <small className="text-mute" style={{ textTransform: 'capitalize' }}>{props.label}</small>
      <small className="text-info">{props.value}</small>
    </li>
  )
} 