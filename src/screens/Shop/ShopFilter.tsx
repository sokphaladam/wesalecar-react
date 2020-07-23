import React, { useState, useEffect } from "react";
import { useFirebase } from "react-redux-firebase";

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
    | "ALL"|string;
  transmission: "AMT" | "AUTO" | "MANUAL" | "ALL" | string;
  type: "ALL" | "NEW" | "USED" | "PRE-OWNED" | string;
};

type Props = {
  handleSearch: (e: any) => void;
  handleSearchTitle: (e: any) => void;
}

export function ShopFilter(props: Props) {
  let make_tag: HTMLSelectElement | null = null;
  let model_tag: HTMLSelectElement | null = null;
  let fuel_tag: HTMLSelectElement | null = null;
  let tranmission_tag: HTMLSelectElement | null = null;
  let con_tag: HTMLSelectElement | null = null;
  let year_tag: HTMLSelectElement | null = null;
  let search_tag: HTMLInputElement | null = null;
  const firebase = useFirebase();
  const [makes, setMake] = useState([]);
  const [models, setModel] = useState([]);
  const [years, setYear] = useState([]);
  const [load, setLoad] = useState(true);

  const getMakes = async () => {
    const snap = await firebase.firestore().collection('makes').get();
    const items: any = [];
    snap.forEach(x => {
      items.push({
        ...x.data(),
        id: x.id
      })
    })
    setMake(items);
  }

  const getModels = async (make: string) => {
    const snap = await firebase.firestore().collection('models').where('makes', '==', make).get();
    const items: any = [];
    snap.forEach(x => {
      items.push({
        ...x.data(),
        id: x.id
      })
    })
    setModel(items);
  }

  const getYears = async () => {
    const snap = await firebase.firestore().collection('years').get();
    const items: any = [];
    snap.forEach(x => {
      items.push({
        ...x.data(),
        id: x.id
      })
    })
    setYear(items);
  }

  useEffect(() => {
    if(load){
      getMakes();
      getYears();
      setLoad(false);
    }
  })

  const handleMakeChange = async () => {
    if(make_tag?.value !== 'ALL'){
      getModels(make_tag!.value!)
    }
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filer: Filter = {
      fuel: fuel_tag!.value!,
      makes: make_tag!.value,
      models: model_tag!.value,
      transmission: tranmission_tag!.value,
      type: con_tag!.value,
      year: Number(year_tag!.value)
    }

    props.handleSearch(filer);
  }

  const handleSearchTitle = (e: any) => {
    e.preventDefault();
    props.handleSearchTitle(search_tag?.value);
  }

  return (
    <div className="sidebar-widget bg-light p-30" id="sidebar">
      <div className="widget search-widget mb">
        <form onSubmit={handleSearchTitle}>
          <input
            type="text"
            className="form-control bg-white"
            name="search"
            placeholder="Search"
            ref={ref => search_tag = ref}
          />
          <button type="submit" name="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="widget widget_car_search">
        <h4 className="widget-title">Search Car</h4>
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <select 
                  className="form-control bg-white"
                  ref={ref => make_tag = ref}
                  onChange={handleMakeChange}
                >
                  <option value="ALL">Makes</option>
                  {
                    makes.map((x: any) => {
                      return <option value={x.name}>{x.name}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white" ref={ref => model_tag = ref}>
                  <option value="ALL">Model</option>
                  {
                    models.map((x: any) => {
                      return <option value={x.model}>{x.model}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white" ref={ref => con_tag = ref}>
                  <option value="ALL">Condition</option>
                  <option value="ALL">All</option>
                  <option value="NEW">New</option>
                  <option value="USED">Used</option>
                  <option value="PRE-OWNED">Certified Pre-Owned</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white" ref={ref => year_tag = ref}>
                  <option value={0}>Year</option>
                  {
                    years.map((x: any) => {
                      return <option value={x.year}>{x.year}</option>
                    })
                  }
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white" ref={ref => fuel_tag = ref}>
                  <option value="ALL">Fuel Type</option>
                  <option value="ELECTRIC">Electric</option>
                  <option value="DIESEL">Diesel</option>
                  <option value="PETROL">Petrol</option>
                  <option value="HYBRID">Hybrid</option>
                  <option value="PETROL+CNG">Petrol+CNG</option>
                  <option value="PETROL+LPG">Petrol+LPG</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select className="form-control bg-white" ref={ref => tranmission_tag = ref}>
                  <option value="ALL">Transmission</option>
                  <option value="AMT">AMT</option>
                  <option value="AUTO">Automatic</option>
                  <option value="MANUAL">Manual</option>
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
    </div>
  );
}
