/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
};

export function CardCarItem(props: Props) {
  return (
    <div className="thumb-blog-horizontal clearfix transation mb-4 bg-light d-md-flex">
      <div
        className="position-relative overflow-hidden p-0"
        style={{ maxWidth: 418.625, maxHeight: 346 }}
      >
        <div className="msg-token-left-angle-info" title="Tranding Now">
          <span className="sold">Sold</span>
        </div>
        <img
          alt="Image not found!"
          src={props.data.image[0]}
          className="h-100 w-auto w-mx-inherit position-relative x-center"
          style={{ width: 556, height: 346, objectFit: "cover" }}
        />
        {/* <div className="msg-token-right bg-danger text-white">10% Deal</div> */}
      </div>
      <div className="post-content p-4 pl-sm-24">
        <div className="thumb-details">
          <span className="text-success font-weight-semibold">
            {props.data.type}
          </span>
          <h5 className="mb-2">
            <Link
              to={'/shop/'+props.data.id}
              className="text-secondary hover-text-primary transation"
            >
              {props.data.title}
            </Link>
          </h5>
          <div className="d-flex justify-content-between align-items-center">
            <div className="price">
              <span className="h5 text-success">
                ${new Intl.NumberFormat().format(Number(props.data.price))}
              </span>
            </div>
            <div className="review float-right font-12">
              {/* <span>
                ({props.data.rating === undefined ? 0 : props.data.rating}{" "}
                Rating)
              </span> */}
              {/* <span className="ml-2 bg-primary py-1 px-2 text-white">
                4.50/5
              </span> */}
            </div>
          </div>
          <hr />
          <p
            style={{
              maxLines: 4,
              overflow: "hidden",
              maxHeight: 4 * 28,
              boxSizing: "content-box",
            }}
          >
            {props.data.overviews}{" "}
          </p>
          <ul className="d-flex clearfix mt-3">
            <li className="pr-3">
              <i className="fa fa-car text-primary mr-1"></i>
              <span className="font-mini">{props.data.transmission_type}</span>
            </li>
            <li className="pr-3">
              <i className="fa fa-tachometer-alt text-primary mr-1"></i>
              <span className="font-mini">{props.data.speed}</span>
            </li>
            <li className="pr-3">
              <i className="fa fa-gas-pump text-primary mr-1"></i>
              <span className="font-mini">{props.data.fuel}</span>
            </li>
            <li className="pr-3">
              <i className="fa fa-calendar-alt text-primary mr-1"></i>
              <span className="font-mini">{props.data.year}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
