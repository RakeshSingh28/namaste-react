import { useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      {!cartItems.length && (
        <div className="empty-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            style={{ height: "300px", width: "300px" }}
          />
          <span>Your food cart is empty</span>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="empty-container" style={{ justifyContent: "normal" }}>
          <div className="text-center">
            <span className="text-2xl">~~~ Cart ~~~</span>
            <button
              className="text-white bg-black p-2 my-2 rounded-lg"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </button>
          </div>
          <div>
            {cartItems.map((item) => (
              <MenuItemCard
                key={item?.name}
                itemInfo={{
                  name: item?.name,
                  price: item?.price,
                  rating: item?.rating,
                  description: item?.description,
                  img: item?.img,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
