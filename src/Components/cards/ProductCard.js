import React from "react";
import { Card } from "antd";
import { EditOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, description, slug } = product;
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: "350px", objectFit: "cover" }}
          className="p-1"
        />
      }
      // actions={[
      //   <Link to={`/product/${slug}`}>
      //     <EyeOutlined className="text-warning" /> <br /> View Product
      //   </Link>,
      //   <>
      //     <ShoppingCartOutlined className="text-danger" /> <br /> Add to Cart
      //   </>,
      // ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default ProductCard;
