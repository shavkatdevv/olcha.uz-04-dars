import { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  constructor() {
    super();
  }
  render() {
    console.log("Mahsulot ma'lumotlari");
    console.log(this.props);

    const { productImg, groupName, price, priceMonth, title } = this.props.data;
    
    
    return (
      <div className="productCard p-3">
        <img
          className="d-block productImg"
          src={this.props.data.productImg}
          alt="" />
        <a href="#" className="groupName d-block mb-2 mt-3">
          {groupName}
        </a>
        <p className="price mb-2">{price} so'm</p>
        <p className="priceMonth">{priceMonth} so'm x 12 oy</p>
        <p className="title">{title.toUpperCase()}</p>
        <a href="#" className="btn">
          Savatcha
        </a>
      </div>
    );
  }
}

export default ProductCard