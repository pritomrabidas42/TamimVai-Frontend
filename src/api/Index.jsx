import axios from "axios"

const ProductData = () => {
    try {
        const data = axios.get("https://api.escuelajs.co/api/v1/products");
        return data
    } catch (err) {
        console.log(err);
        
    }
}
export { ProductData }