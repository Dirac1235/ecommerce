import { Button } from "./ui/button"


const ProductsPage = ({ products }) => {
    
  return (
    <div >
      <h1>Products</h1>
      <ul className=" grid grid-cols-3 ">
        {products?.map(product => (
          <li key={product.id} className="  flex flex-col m-2 justify-center border border-slate-200 rounded-md p-2">
            {/* Import and use the image for each product */}
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <Button >Add To Cart</Button>

            {/* Add more product information */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
