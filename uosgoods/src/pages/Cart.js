import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopNav from "../components/TopNav/TopNav";
import Button from "../components/Button/Button"

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // 장바구니 상품 목록 로드
    const fetchProducts = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    // 상품 수량 변경
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        product.quantity = quantity;
      }
      return product;
    });
    setProducts(newProducts);

    // 총 결제 금액 계산
    const newTotalPrice = newProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleDeleteProduct = (productId) => {
    // 상품 삭제
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);

    // 총 결제 금액 계산
    const newTotalPrice = newProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  return (
    <div>
        <TopNav />
      <h1>장바구니</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>
                가격: {product.price}원
              </p>
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />
              <Button onClick={() => handleDeleteProduct(product.id)}>
                삭제
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <p>총 결제 금액: {totalPrice}원</p>
      <Link to="/checkout">
        <button>주문하기</button>
      </Link>
    </div>
  );
};

export default Cart;