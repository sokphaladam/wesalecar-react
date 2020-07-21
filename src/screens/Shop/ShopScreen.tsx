import React from "react";
import { Content } from "../../components/Content";
import { ShopFilter } from "./ShopFilter";

function ShopScreen() {
  return (
    <Content>
      <div className="row">
        <div className="col-xl-4 col-lg-3">
          <ShopFilter />
        </div>
        <div className="col-xl-8 col-lg-9">
          <div className="woo-filter-bar d-table w-100 mb-4 sm-mt-30">
            <div className="float-left">
              <form className="woocommerce-ordering" method="get">
                <select className="form-control orderby" data-width="fit">
                  <option>Default</option>
                  <option>Most Popular</option>
                  <option>Top Rated</option>
                  <option>Newest Items</option>
                  <option>Price low to high</option>
                  <option>Price hight to low</option>
                </select>
              </form>
            </div>
            <div className="float-left">
              <span className="woocommerce-ordering-pages">
                Showing at 15 result
              </span>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ShopScreen;
