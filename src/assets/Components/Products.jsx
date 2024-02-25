import Item from "./Item";

const DUMMY_PRODUCTS = [
    {Id: 1,title:"My First Book", description: "Product - 1", price: "$-7.52"},
    {Id: 2,title:"My Second Book", description: "Product - 2", price: "$-6.22"},
    {Id: 3,title:"My Third Book", description: "Product - 3", price: "$-3.4"},
    {Id: 4,title:"My Fourth Book", description: "Product - 4", price: "$-5.69"},
]

export default function Products(){

    return (
        <>
            <div className="p-2 flex flex-col justify-center  ">
                    <div className="flex justify-center">
                        <h2 className="text-slate-700 text-2xl font-bold pt-10" > Choose from Below Products</h2>
                        </div>
                <ul>
                {DUMMY_PRODUCTS.map( (item)=> (
                    <Item key={item.Id}
                    id = {item.Id}
                    title= {item.title}
                    description={item.description}
                    price={item.price}
                    />
                    ))}
                 
                </ul>
            </div>
        </>
    )
}