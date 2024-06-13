import { useEffect, useState } from "react";
import "./App.css";
import ButtonComponent from "./components/common/buttons/ButtonComponent";
import ProductCard from "./components/common/cards/ProductCard";
import { NavbarComponent } from "./components/narbar/NarbarComponent";
import ProductLoadingCard from "./components/common/cards/ProductLoadingCard";
import { useNavigate } from "react-router-dom";

function App() {
  //            Old only learn about usState
  //   // let count = 0 and handle count update function
  //   const [count, setCount] = useState(0);

  //   const handleCount = () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   };

  //   const [change, setChange] = useState(0);
  //   const [password, setPassword] = useState("");
  //   const [products, setProduct] = useState([]);
  //   const [error, setError] = useState({
  //     name: "",
  //     message: ""
  //   });

  //   // useEffect
  //   useEffect(() => {
  //     console.log("UseEffect is Called!!!");
  //     if(password.length < 8 && password.length > 0){
  //       setError({
  //         name: "Password Error",
  //         message: "Password must be greater than 8 characters"
  //       });
  //     }
  //     else{
  //       setError({
  //         name: "",
  //         message: ""
  //       });
  //     }
  //   }, [password]);

  //   // handle change on input password field
  //   const handlePassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  //   // fetch products
  //   useEffect(() => {fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data.products);
  //     });
  //   }, []);

  //           React Hook,

  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loading = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigate = useNavigate();

  // fetch product
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
        setLoading(false);
      });
  }, []);

  console.log("Products:", products);

  // handle product detail
  const handleProductDetail = (product) => {
    navigate("/product-details", { state: product });
    console.log(location)
  };

  return (
    <>
      <main className="flex justify-center items-center h-full flex-col mx-5">
        <section>
          <h1 className="text-2xl text-blue-700 text-center font-bold tracking-wide m-5">
            This is Products section!!!
          </h1>

          {isLoading && (
            <div className="grid md:grid-cols-4 gap-5">
              {loading.map((load, index) => (
                <ProductLoadingCard key={index} />
              ))}
            </div>
          )}

          {!isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={product.title}
                    image={product.images[0]}
                    price={product.price}
                    handleProductDetail={() => handleProductDetail(product)}
                  />
                );
              })}
            </div>
          )}
        </section>

        {/* <section className="mb-10">
      <h1 className="text-2xl text-blue-600 mb-4">{count}</h1>
      {<ButtonComponent onClick={() => handleCount()} title={"Count"} />}
      </section>

      <section >
        <form action="#">
          <label className="mr-5" htmlFor="password">
            Enter password
          </label>
          <input type="password" onChange={handlePassword} />
          <p className="text-red-700 mb-11">{error.message}</p>
        </form>
      </section> */}
      </main>
    </>
  );
}

export default App;
