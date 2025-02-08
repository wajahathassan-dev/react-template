import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UpdateProductModal from '../components/UpdateProductModal';

export default function ProductDetail (){
    
    const [productInfo, setProductInfo] = useState(null);

    const { id } = useParams();

    useEffect(() => {

        const fetchProduct = async () => {

            try {

            let res = await fetch(`https://fakestoreapi.com/products/${id}`)
            console.log("Status", res.status)
            if (res.status == 200){
                let data = await res.json();
                setProductInfo(data);
            }

            } catch(error){
                console.log(error);
            }
        };

        fetchProduct();

    }, [])

    return (
    <>
        {productInfo && (
            <div className="container pt-5">
                <div className="row">
                    <div className='col col-md-5'>
                        <img src={productInfo.image} alt={productInfo.title} className="product-detail-image" />
                    </div>
                    <div className='col col-md-7'>
                        <h5 className="card-title pb-3">{productInfo.title}</h5>
                        <p className="card-text text-primary fw-bold">${productInfo.price}</p>
                        <p className="card-text text-capitalize">{productInfo.description}</p>

                        <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>

                        <UpdateProductModal product={productInfo} setProductInfo={setProductInfo}/>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}