export default function Cart() {
    return (
      <>
        <div className="p-2 flex justify-center  ">
          <div className="Outer-Box border-2 w-96 border-black rounded-md bg-slate-600 font-semibold text-cyan-100">
            <div className="ml-5 p-2"> Shopping Cart</div>
  
            <div className="insideBox flex flex-col">
              <div className="flex justify-between p-2">
                <div className="p-2"> Test Item</div>
                <div className="flex items-end justify-end">
                  <div className="p-2"> $18 </div>
                  <div className="p-2"> ($6.00/item) </div>
                </div>
              </div>
              <div className="flex p-2 ">
                <div className="p-2"> x3</div>
                <div className="flex  justify-end w-full">
                  <button className="py-1 hover:bg-cyan-300 rounded-md px-4 border-2 border-cyan-200">
                    -
                  </button>
                  <button className="py-1 hover:bg-cyan-300 rounded-md px-4 border-2 border-cyan-200">
                   +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  