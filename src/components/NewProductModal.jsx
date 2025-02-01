import { useState } from "react"

export default function NewProductModal () {

    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        image: '',
        description: ''
      })

     // handle new product input state
    const handleNewProductInput = e => {
        const { name, value } = e.target;
        setNewProduct({...newProduct, [name]: value})
    }

      // create new product
    const createNewProduct = async () => {

        try {

        if (newProduct.title && newProduct.price && newProduct.description && newProduct.image){
            const res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
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
            setProducts([...products, newProduct])
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
        <div class="modal" tabindex="-1" id="exampleModal">
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
                        <button type="button" class="btn btn-primary" onClick={createNewProduct} data-bs-dismiss="modal">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}