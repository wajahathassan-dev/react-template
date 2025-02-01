export default function ProductCard ({product}){
    return (
    <div className="col col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <div className="card">
            <img src={product.image} className="card-img-top product-img" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-primary fw-bold">${product.price}</p>
                <p className="card-text text-truncate">{product.description}</p>
            </div>
        </div>
    </div>
    )
}
