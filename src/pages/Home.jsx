import {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import NewProductModal from '../components/NewProductModal';

function Home() {

  const [products, setProducts] = useState(null);
  

  useEffect(() => {

    const fetchProducts = async () => {
      
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=8')
        if (res.status == 200){
          const data = await res.json()
          console.log("my data", data)
          setProducts(data);
        }
      } catch(error){
        console.log(error);
        setProducts(null);
      }
    };

    fetchProducts();

  }, [])


  return (
  <>
    <div className="container">
      <h1 className="text-center pt-5 fs-3 fw-bold pb-5">Product Manager</h1>

      <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Create Product
      </button>

     <NewProductModal />

      <div className="row">
        {products && products.map(product => {
          return (
            <ProductCard product={product} key={product.id} setProducts={setProducts}/>
          )
        }) 
        }
      </div>
    </div>
  </>
  );
}

export default Home;