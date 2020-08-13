/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useFirebase } from "react-redux-firebase";
import { Link } from "react-router-dom";

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
    | "ALL"
    | string;
  transmission: "AMT" | "AUTO" | "MANUAL" | "ALL" | string;
  type: "ALL" | "NEW" | "USED" | "PRE-OWNED" | string;
  price: {
    min: number | 0;
    max: number | 0;
  }
};

type Props = {
  handleSearch: (e: any) => void;
  handleSearchTitle: (e: any) => void;
};

export function ShopFilter(props: Props) {
  let make_tag: HTMLSelectElement | null = null;
  let model_tag: HTMLSelectElement | null = null;
  let year_tag: HTMLSelectElement | null = null;
  let search_tag: HTMLInputElement | null = null;
  const firebase = useFirebase();
  const [makes, setMake] = useState([]);
  const [models, setModel] = useState([]);
  const [years, setYear] = useState([]);
  const [load, setLoad] = useState(true);
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const getMakes = async () => {
    const snap = await firebase.firestore().collection("makes").get();
    const items: any = [];
    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setMake(items);
  };

  const getModels = async (make: string) => {
    const snap = await firebase
      .firestore()
      .collection("models")
      .where("makes", "==", make)
      .get();
    const items: any = [];
    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setModel(items);
  };

  const getYears = async () => {
    const snap = await firebase.firestore().collection("years").get();
    const items: any = [];
    snap.forEach((x) => {
      items.push({
        ...x.data(),
        id: x.id,
      });
    });
    setYear(items);
  };

  useEffect(() => {
    if (load) {
      getMakes();
      getYears();
      setLoad(false);
    }
  }, [load, getMakes, getYears]);

  const handleMakeChange = async () => {
    if (make_tag?.value !== "ALL") {
      getModels(make_tag!.value!);
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filer: Filter = {
      fuel: "ALL",
      makes: make_tag!.value,
      models: model_tag!.value,
      transmission: "ALL",
      type: "ALL",
      year: Number(year_tag!.value) === null ? 0 : Number(year_tag!.value),
      price
    };

    props.handleSearch(filer);
  };

  const handleSearchTitle = (e: any) => {
    e.preventDefault();
    props.handleSearchTitle(search_tag?.value);
  };

  const handleReset = () => {
    make_tag!.value = "";
    model_tag!.value = "";
    year_tag!.value = "";
    search_tag!.value = "";
    setPrice({
      min: 0,
      max: 0
    });
    
    props.handleSearch({
      fuel: "ALL",
      makes: "ALL",
      models: "ALL",
      transmission: "ALL",
      type: "ALL",
      year: 0,
      price: {
        min: 0,
        max: 0
      }
    });
    props.handleSearchTitle("");
  }

  return (
    <div className="bg-light p-30 ui form" id="sidebar">
      <div style={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%'}}>
        <h6>Filter</h6>
        <Link to="#" className="ui negative basic button mini" onClick={handleReset}>Reset</Link>
      </div>
      <div className="ui divider"></div>
      <div className="widget mb">
        <form onSubmit={handleSearchTitle}>
          <div className="ui input small icon">
            <input
              type="text"
              name="search"
              placeholder="Search"
              ref={(ref) => (search_tag = ref)}
              style={{ padding: '5px 10px' }}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
      <div className="widget widget_car_search">
        <div className="ui divider"></div>
        <form onSubmit={handleSearch} className="ui form">
          <div className="row">
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (make_tag = ref)}
                  onChange={handleMakeChange}
                >
                  <option value="ALL">Makes</option>
                  {makes.map((x: any) => {
                    return (
                      <option value={x.name} key={x.name}>
                        {x.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (model_tag = ref)}
                >
                  <option value="ALL">Model</option>
                  {models.map((x: any) => {
                    return <option value={x.model}>{x.model}</option>;
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Year</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="ui divider"></div>
              <div className="field">
                <label>Price (USD)</label>
                <div className="two fields">
                  <div className="field">
                    <input type="text" placeholder="Min Price" style={{ padding: 3 }} value={price.min} onChange={e => setPrice({ ...price, min: Number(e.target.value) })}/>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Max Price" style={{ padding: 3 }} value={price.max} onChange={e => setPrice({ ...price, max: Number(e.target.value) })}/>
                  </div>
                </div>
              </div>
              <div className="ui divider"></div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Maximum Mileage</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Body Type</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Specs</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Service History</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <br/>
            <br/>
            <div className="col-md-12">
              <div className="field">
                <select
                  className="ui selection dropdown"
                  ref={(ref) => (year_tag = ref)}
                >
                  <option value={0}>Colors</option>
                  {years.map((x: any) => {
                    return (
                      <option value={x.year} key={x.year}>
                        {x.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-success w-100">
                  Search Property
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
