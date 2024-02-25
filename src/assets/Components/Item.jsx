import {  useDispatch } from "react-redux";
import cartSlice, { cartActions } from "../store/cart-slice";

export default function Item(props) {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    console.log(props)
    const {id, title, description, price} = props;
    console.log( props.titile, description, price);
    
    dispatch(cartActions.addItemToCart( { id, title, description, price}));
  };

  return (
    <>
      <div className="p-2 flex justify-center  ">
        <div className="Outer-Box border-2 w-96 border-black rounded-md bg-slate-600 font-semibold text-cyan-100" >
          <div className="ml-5 p-2"> {props.title} </div>
          <div className="insideBox flex flex-col">
            <div className="flex justify-between p-2">
              <div className="p-2">{props.description}</div>
              <div className="flex items-end justify-end">

                <div className="p-2"> {props.price} </div>
              </div>
            </div>
            <div className="flex p-2 ">

              <div className="flex  justify-end w-full">
                <button onClick={addItemToCartHandler} className="py-1 hover:bg-cyan-300 rounded-md px-4 border-2 border-cyan-200"> Add to Cart </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
