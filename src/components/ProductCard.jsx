import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";


export default function ProductCard ({product, setProducts}){

    const deleteProduct = async () => {
        try {

            const res = await fetch(`https://fakestoreapi.com/products/${product.id}`,{
                method:"DELETE"
            })
            
            console.log("Delete function", res.status)
            if (res.status == 200){
                // additional
                setProducts(prev => {
                    return prev.filter(item => item.id != product.id)
                })
            }

        } catch (error){
            console.log(error);
        }
    }

    return (
    <div className="product-card-container col col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <NavLink to={`/product/${product.id}`} className="card pb-3">
            <img src={product.image} className="card-img-top product-img" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-primary fw-bold">${product.price}</p>
                <p className="card-text text-truncate">{product.description}</p>
            </div>
        </NavLink>
        <button className="product-card-delete btn btn-danger" onClick={deleteProduct}>
            <MdDelete />
        </button>
    </div>
    )
}
