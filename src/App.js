// import logo from './logo.svg';
import { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard";

const dataProducts = [
  {
    id:"1",
    productImg:"https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/BIg37oXN6kB7cLEFbodLmQLwVoT80TSKXxbqR2L39mBLMsMJKwaxRxHYZkEx.jpg",
                  groupName:"Smartfon",
                  price:"2 290 000",
                  priceMonth:"222 000",
                  title:"Samsung Galaxy",
  },
  {
    id:"2",
    productImg:"https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/BIg37oXN6kB7cLEFbodLmQLwVoT80TSKXxbqR2L39mBLMsMJKwaxRxHYZkEx.jpg",
                  groupName:"Smartfon",
                  price:"3 290 000",
                  priceMonth:"222 000",
                  title:"Samsung Galaxy",
  },
  {
    id:"3",
    productImg:"https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/BIg37oXN6kB7cLEFbodLmQLwVoT80TSKXxbqR2L39mBLMsMJKwaxRxHYZkEx.jpg",
                  groupName:"Smartfon",
                  price:"4 290 000",
                  priceMonth:"222 000",
                  title:"Samsung Galaxy",
  },
  {
    id:"4",
    productImg:"https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/BIg37oXN6kB7cLEFbodLmQLwVoT80TSKXxbqR2L39mBLMsMJKwaxRxHYZkEx.jpg",
                  groupName:"Smartfon",
                  price:"7 290 000",
                  priceMonth:"222 000",
                  title:"Samsung Galaxy",
  },
  {
    id:"5",
    productImg:"https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2026-02-25/BIg37oXN6kB7cLEFbodLmQLwVoT80TSKXxbqR2L39mBLMsMJKwaxRxHYZkEx.jpg",
                  groupName:"Smartfon",
                  price:"8 290 000",
                  priceMonth:"222 000",
                  title:"Samsung Galaxy",
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <section id="products" className="py-3">
          <div className="container-fluid">
            <div className="row">
              {
                dataProducts.map((v, i) =>
                <div key={v.id} className="col-sm-6 col-md-4 col-lg-3 productCol">
                  <ProductCard data={v} />
                </div>)
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
