import { AllFruits } from "./AllFruits"
import "./All.css"
// import { Footer } from "../Footer/Footer"
import { FaHome } from "react-icons/fa"
 
export const All = () => {
    return <div className="AllFruits">
        <div className="Shop-loop-head" > 
        <span><FaHome/> Home / 
        {/* <span style={{color:"gray"}}>All fruits</span> */}
        </span></div>
         <AllFruits/>
         {/* <Footer/> */}
    </div>
}