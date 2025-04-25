import React from "react";
import "./Cart.scss";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 1rem;
`;
const StyleButtons = styled(Buttons)`
  display: flex;
  justify-content: center;
`;

const Buttons = ({ isShow, className }) => {
  return (
    <div className={className}>
      <button
        className="button-item"
        style={{
          background: "yellow",
          display: isShow ? "inline-block" : "none",
        }}
      >
        Hello
      </button>
    </div>
  );
};

function Cart({ isShow }) {
  return (
    <Container>
      Cart
      <StyleButtons isShow={isShow} />
    </Container>
  );
}

export default Cart;
