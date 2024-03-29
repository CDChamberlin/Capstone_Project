"use client";
import CartCard from "components/CartCard";
import { useCart } from "context/CartContext";

export default function Shopping() {
  const { cart } = useCart();
  console.log(`Shopping current cart: ${cart}`);

  const isValidHttpUrl = (string) => {
    try {
      const newUrl = new URL(string);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
      return false;
    }
  };

  const createCard = (item) => {
    return (
      <CartCard
        key={item.id}
        name={item.title}
        image={isValidHttpUrl(item.image) ? item.image : ""}
        description={item.description}
        price={item.price.toFixed(2)}
        category={item.category.toLowerCase()}
      />
    );
  };
  let items = cart.map((item) => createCard(item));
  return (
    <>
      {/* <h3>{`Total ${cart.total()}`}</h3> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {items}
      </div>
    </>
  );
}
