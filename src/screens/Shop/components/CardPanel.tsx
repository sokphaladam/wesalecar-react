import React from 'react';

interface Props {
  title: string;
  children?: any;
}

export function CardPanel(props: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{props.title}</h6>
        <div className="ui divider"></div>
        {props.children}
      </div>
    </div>
  )
}