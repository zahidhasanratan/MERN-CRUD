import axios from 'axios';

// Create a product
export function Create(ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice) {
    let URL = "/api/v1/CreateProduct";

    // Create the product body to be sent with the POST request
    let productBody = {
        ProductName: ProductName,
        ProductCode: ProductCode,
        Img: Img,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    };

    return axios
        .post(URL, productBody) // Send the productBody to the server
        .then(response => {
            // Handle successful response
            console.log("Product created successfully:", response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error response
            console.error("There was an error creating the product:", error);
            throw error;
        });
}

// Read products
export function Read() {
    let URL = "/api/v1/ReadProduct";
    return axios
        .get(URL)
        .then(response => {
            // Handle successful response
            if (response.status === 200) {
                console.log(response.data);
                return response.data['data']; // Assuming 'data' is the key with product info
            } else {
                console.error("Unexpected response status:", response.status);
                return false;
            }
        })
        .catch(error => {
            // Handle error response
            console.error("There was an error fetching the products:", error);
            throw error;
        });
}

// Delete a product
export function Delete(id) {
    let URL = "/api/v1/DeleteProduct/" + id;
    return axios
        .delete(URL)  // Use axios.delete instead of axios.get for deleting
        .then(response => {
            // Handle successful response
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error response
            console.error("There was an error deleting the product:", error);
            throw error;
        });
}

// Update a product
export function Update(id, productData) {
    let URL = "/api/v1/UpdateProduct/" + id;
    
    // Set productBody using the passed productData
    let productBody = {
        ProductName: productData.ProductName,
        ProductCode: productData.ProductCode,
        Img: productData.Img,
        UnitPrice: productData.UnitPrice,
        Qty: productData.Qty,
        TotalPrice: productData.TotalPrice
    };

    return axios
        .put(URL, productBody) // Use axios.put instead of axios.post for updating
        .then(response => {
            // Handle successful response
            console.log("Product updated successfully:", response.data);
            return response.data;
        })
        .catch(error => {
            // Handle error response
            console.error("There was an error updating the product:", error);
            throw error;
        });
}
