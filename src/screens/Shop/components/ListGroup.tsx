import React from 'react';

interface Props {
  children: any;
}

export function ListGroup(props: Props){
  return(
    <ul className="list-group list-group-flush">
      {props.children}
    </ul>
  )
}