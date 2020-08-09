import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  images: any[];
}

export function Slider(props: Props){
  const [index, setIndex] = useState(0);
  
  return(
    <div className="full-img-sweep w-100" style={{ height: 450 }}>
      <div className="full-img-sweep w-100 ls-noskin ls-container ls-responsive ls-device-is-desktop" style={{
        height: 450,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        width: 1170,
        visibility: 'visible'
      }}
      >
        <div style={{ background: 'none transparent' }} className="ls-inner">
          <div className="ls-layers">
            <div className="ls-slide-backgrounds">
              {
                props.images.map((x: any, i: number) => {
                  return (
                    <div className="ls-wrapper ls-bg-outer" style={{ zIndex: 1, width: `${i === index ? '1170px' : '0'}`, height: `${i === index ? '450px' : '0'}` }} key={i}>
                      <div className="ls-wrapper ls-bg-wrap" style={{
                        backgroundColor: 'transparent',
                        display: 'block',
                        opacity: 1,
                        transform: 'matrix(1, 0, 0, 1, 0, 0)'
                      }}>
                        <img
                          src={x}
                          alt=""
                          className="ls-bg"
                          style={{
                            margin: 0,
                            zIndex: 'auto',
                            width: 1200,
                            height: 700,
                            padding: 0,
                            borderWidth: 0,
                            borderRadius: 0,
                            transform: 'translateX(-15px) translateY(-125px)',
                            filter: 'none'
                          }}
                        />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="ls-gui-element ls-thumbnail-wrapper" style={{ visibility: 'visible' }}>
          <div className="ls-thumbnail" style={{ width: 600 }}>
            <div className="ls-thumbnail-inner">
              <div className="ls-thumbnail-slide-container">
                <div className="ls-thumbnail-slide" style={{ height: 60, marginLeft: 0 }}>
                  {
                    props.images.map((x: any, i: number) => {
                      return (
                        <Link to='#' className="ls-thumb-1" style={{ width: 100, height: 60 }} onClick={() => setIndex(i)} key={i}>
                          <img src={x} alt="" className={i === index ? 'ls-thumb-active' : ''} style={{ opacity: `${i === index ? '0.35' : '1'}` }} />
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}