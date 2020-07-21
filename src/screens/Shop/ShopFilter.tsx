import React from "react";

export function ShopFilter() {
  return (
    <div className="sidebar-widget bg-light p-30" id="sidebar">
      <div className="widget search-widget mb">
        <form action="#" method="post">
          <input
            type="text"
            className="form-control bg-white"
            name="search"
            placeholder="Search"
          />
          <button type="submit" name="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="widget widget_car_search">
        <h4 className="widget-title">Search Car</h4>
        <form>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Posted By</option>
                  <option>Dealer</option>
                  <option>Individual</option>
                  <option>Reseller</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Condition</option>
                  <option>All</option>
                  <option>New</option>
                  <option>Used</option>
                  <option>Certified Pre-Owned</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Year</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Fuel Type</option>
                  <option>Electric</option>
                  <option>Diesel</option>
                  <option>Petrol</option>
                  <option>Hybrid</option>
                  <option>Petrol+CNG</option>
                  <option>Petrol+LPG</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Body Type</option>
                  <option>Convertable</option>
                  <option>Coupe</option>
                  <option>Crossover</option>
                  <option>Hatchback</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white">
                  <option>Transmission</option>
                  <option>AMT</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-primary w-100">
                  Search Property
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="widget widget_categories">
        <h4 className="widget-title">Categories</h4>
        <ul>
          <li>
            <a href="#">
              All<span>(12)</span>
            </a>{" "}
          </li>
          <li>
            <a href="#">
              Rent<span>(25)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Buy<span>(38)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Sedan<span>(18)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Coupe<span>(49)</span>
            </a>{" "}
          </li>
          <li>
            <a href="#">
              Sports<span>(27)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Cabrio<span>(65)</span>
            </a>
          </li>
          <li>
            <a href="#">
              Orthor<span>(34)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
