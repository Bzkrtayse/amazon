import data from "../data";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="flex flex-wrap justify-around ">
        {data.products.map((product) => (
          <div className="bg-white max-w[400px]" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img
                className="w-80 h-72 p-4 "
                src={product.image}
                alt={product.name}
              />
            </Link>
            <a href={`/product/${product.slug}`}>
              <p className="ml-4">{product.name}</p>
            </a>
            <p className="font-bold ml-4 mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
