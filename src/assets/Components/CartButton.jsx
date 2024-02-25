import { uiSliceAction } from "../store/ui-slice";
import { useDispatch } from "react-redux";

const  CartButton = (props) => {
    const dispatch = useDispatch();
    const toggleCartHandler = () =>{
        dispatch(uiSliceAction.toggle());
    }; 

    return (<>
        <div className="flex flex-col w-full py-2">
          <div className="flex justify-end text-2xl font-semi-bold">
        <button onClick={toggleCartHandler}>
            <div className="px-2 mx-2"> My cart </div>
        </button >
            <div className="Items-in-cart px-2 mr-12 bg-cyan-300 rounded-md"> 0 </div>
          </div>
        </div>
    </>)
}

export default CartButton;