import React, { useState, useEffect } from "react";
import { Content } from "../../components/Content";
import { ShopFilter } from "./ShopFilter";
import { useFirebase } from "react-redux-firebase";
import { CardCarItem } from "../../components/CardCarItem";

type Filter = {
  makes: string | "ALL";
  models: string | "ALL";
  year: number | 0;
  fuel:
    | "ELECTRIC"
    | "DIESEL"
    | "PETROL"
    | "HYBRID"
    | "PETROL+CNG"
    | "PETROL+LPG"
    | "ALL";
  transmission: "AMT" | "AUTO" | "MANUAL" | "ALL";
  type: "ALL" | "NEW" | "USED" | "PRE-OWNED";
};

function ShopScreen() {
  const firebase = useFirebase();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const getCarList = async (filer: Filter) => {
    const items: any = [];
    let snapCollection = firebase
      .firestore()
      .collection("cars")
      .where("published", "==", true);

    if (filer.fuel !== "ALL") {
      snapCollection = snapCollection.where("fuel", "==", filer.fuel);
    }

    if (filer.transmission !== "ALL") {
      snapCollection = snapCollection.where("trasmission_type", "==", filer.transmission);
    }

    if (filer.type !== "ALL") {
      snapCollection = snapCollection.where("type", "==", filer.type);
    }

    if (filer.makes !== "ALL") {
      snapCollection = snapCollection.where("makes", "==", filer.makes);
    }

    if (filer.models !== "ALL") {
      snapCollection = snapCollection.where("model", "==", filer.models);
    }

    if (filer.year !== 0) {
      snapCollection = snapCollection.where("year", "==", filer.year);
    }

    const snap = await snapCollection.limit(15).get();

    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });

    setData(items);
  };

  useEffect(() => {
    if(load){
      getCarList({
        fuel: "ALL",
        makes: "ALL",
        models: "ALL",
        transmission: "ALL",
        type: "ALL",
        year: 0,
      });
      setLoad(false)
    }
  });
  
  const handleSearch = (e: any) => {
    console.log(e)
    getCarList(e);
  }
  
  return (
    <Content>
      <div className="row">
        <div className="col-xl-4 col-lg-3">
          <ShopFilter handleSearch={handleSearch}/>
        </div>
        <div className="col-xl-8 col-lg-9">
          <div className="row">
            <div className="col-md-12">
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
            {
              data.map((x: any) => {
                return(
                  <div className="col-md-12" key={x.id}>
                    <CardCarItem data={x}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ShopScreen;
