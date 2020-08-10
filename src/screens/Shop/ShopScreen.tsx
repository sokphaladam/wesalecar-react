/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { Content } from "../../components/Content";
import { ShopFilter } from "./ShopFilter";
import { useFirebase, ExtendedFirestoreInstance } from "react-redux-firebase";
import { CardCarItem2 } from "../../components/CardCarItem2";

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
  const [select, setSelect] = useState('default');
  const [filter, setFilter] = useState<Filter>({
    fuel: "ALL",
    makes: "ALL",
    models: "ALL",
    transmission: "ALL",
    type: "ALL",
    year: 0,
  });

  const loadData = useCallback(async (filer: Filter, select: string) => {
    const items = await getCarList(filer, select, firebase.firestore())
    setData(items);
  }, []);

  useEffect(() => {
    if(load){
      loadData({
        fuel: "ALL",
        makes: "ALL",
        models: "ALL",
        transmission: "ALL",
        type: "ALL",
        year: 0,
      }, select);
      setLoad(false)
    }
  }, [load, loadData]);
  
  const handleSearch = (e: any) => {
    setFilter(e);
    loadData(e, select);
  }

  const handleSearchTitle = async (e: any) => {
    const snap = await firebase.firestore().collection("cars").orderBy('title').startAt(e).endAt(e + '\uf8ff').get();
    const items: any = [];
    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setData(items);
  }
  
  return (
    <Content>
      <div className="row">
        <div className="col-xl-4 col-lg-3">
          <ShopFilter handleSearch={handleSearch} handleSearchTitle={handleSearchTitle}/>
        </div>
        <div className="col-xl-8 col-lg-9">
          <div className="row">
            <div className="col-md-12">
              <div className="woo-filter-bar d-table w-100 sm-mt-30" style={{ margin: 0 }}>
                <div className="float-left ui mini form">
                  <div className="field">
                    <select 
                      className="ui selection dropdown " 
                      value={select}
                      onChange={e =>{
                        setSelect(e.target.value);
                        loadData(filter, e.target.value);
                      }}
                    >
                      <option value="default">Default</option>
                      <option value="most">Most Popular</option>
                      {/* <option>Top Rated</option> */}
                      <option value="new">Newest Items</option>
                      <option value="low">Price low to high</option>
                      <option value="hight">Price hight to low</option>
                    </select>
                  </div>
                </div>
                <div className="float-right">
                  <span className="woocommerce-ordering-pages">
                    Showing at 15 result
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="ui divider"></div>
            </div>
            {
              data.map((x: any) => {
                return(
                  <div className="col-md-12" key={x.id}>
                    <CardCarItem2 data={x}/>
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


async function getCarList(filer: Filter, order: string, firestore: ExtendedFirestoreInstance){
  const items: any = [];
    let snapCollection = firestore.collection("cars").where("published", "==", true);

    if(order === 'default') {
      snapCollection = snapCollection.orderBy('title', 'asc');
    }
    
    if(order === 'most') {
      snapCollection = snapCollection.orderBy('click', 'desc');
    }

    if(order === 'new') {
      snapCollection = snapCollection.orderBy('created', 'desc');
    }

    if(order === 'low') {
      snapCollection = snapCollection.orderBy('price', 'asc');
    }

    if(order === 'hight') {
      snapCollection = snapCollection.orderBy('price', 'desc');
    }

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

    snap.forEach((x: any) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });

    return items;
}