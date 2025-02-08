import { useState } from "react"

export default function UpdateProductModal ({ product, setProductInfo }) {

    const [newProduct, setNewProduct] = useState({
        title: product.title,
        price: product.price,
        image: product.image,
        description: product.description
      })

    // handle product input state
    const handleNewProductInput = e => {
        const { name, value } = e.target;
        setNewProduct({...newProduct, [name]: value})
    }

      // update product
    const updateProduct = async () => {

        try {

        if (newProduct.title && newProduct.price && newProduct.description && newProduct.image){
            const res = await fetch(`https://fakestoreapi.com/products/${product.id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: newProduct.title,
                    price: newProduct.price,
                    description: newProduct.description,
                    image: newProduct.image
                }
            )
            });
    
            if (res.status == 200){
            // additional
            setProductInfo(newProduct);
            }
        }
        } catch(error){
        console.log(error);
        }
        
        setNewProduct({
        title: '',
        price: '',
        image: '',
        description: ''
        })
    }
    
    return (
    <>
        <div class="modal" tabindex="-1" id="updateModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="text" name="title" value={newProduct.title} onChange={e => handleNewProductInput(e)} placeholder='Title' className="form-control mb-2 border border-secondary" />
                            <input type="text" name="price" value={newProduct.price} onChange={e => handleNewProductInput(e)} placeholder='Price ($)' className="form-control mb-2 border border-secondary" />
                            <input type="text" name="image" value={newProduct.image} onChange={e => handleNewProductInput(e)} placeholder='Image' className="form-control mb-2 border border-secondary" />
                            <textarea type="text" name="description" value={newProduct.description} onChange={e => handleNewProductInput(e)} placeholder='Description' className="form-control mb-2 border border-secondary" rows='6' />
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={updateProduct} data-bs-dismiss="modal">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}