import { Route, Routes } from "react-router-dom"
import { All } from "./All"
import { Category } from "./Category"
import { ProductDetails } from "./ProductDetail"




export const ProductPage = () => {
   


    return (<div className="Productpage">
        {/* <Category /> */}

        <Routes>
            <Route path="/allfruits" element={<All />}></Route>
            <Route path="/allfruit/:id" element={<ProductDetails></ProductDetails>}></Route>
        </Routes>

        
         
    </div>)
}