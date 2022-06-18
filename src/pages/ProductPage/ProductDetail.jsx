import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./ProductDetail.css"

export const ProductDetails = () => {
    const { id } = useParams();

    const [prod, setProd] = useState([]);
    const [count, setCount] = useState(1)

    const handleadd = () => {


        setCount(count + 1)

    }
    const handlesub = () => {
        if (count == 1) {
            return
        }

        setCount(count - 1)

    }

    useEffect(() => {
        axios.get(`http://localhost:8080/product/${id}`)
            .then(({ data }) => {
                setProd(data);
            });
    }, []);


    return <>
        <div className="box1">
            <div className="image1">
                <img src={prod.img1} alt="image1" />
            </div>
            <div className="title">
                <h1 className="title1">{prod.Title}</h1>
                <p className="Description">{prod.Description}</p>
                <p className="Description">{prod.Origin}</p>
                <p className="PriceRange">{prod.PriceRange}</p>
                <h4>Pack:</h4>
                <p className="price">₹{prod.price * count}</p>
                <div className="button">
                    <div><button onClick={handlesub} className="btn1">-</button></div>
                    <div className="count"> {count}</div>
                    <div><button onClick={handleadd} className="btn2">+</button></div>
                    <button className="btn3">Addtocart</button>
                </div>
            </div>
        </div>
        {/* <div className="box2">
            <div className="innerTitle1">
                <p className="innerTitle1-1">{prod.innerTitle1}</p>
                <p className="innerDes1">{prod.innerDes1}</p>
            </div>
            <div className="innerimg1">
                <img src={prod.innerimg1} alt="" />
            </div>

        </div> */}
        {/* <div className="box3">
            <div className="innerTitle2">
                <p>{prod.innerTitle2}</p>
                <p>{prod.innerDes2}</p>
            </div>
        </div> */}
        {/* <div className="box4">
            <div className="innerimg3">
                <img src={prod.innerimg3} alt="" />
            </div>
            <div className="innerTitle3">
                <div>{prod.innerTitle3}</div>
                <div>{prod.innerDes3}</div>
                <div className="nutriTitle">{prod.nutriTitle}</div>
                <div className="nutriInfo">
                    <div className="A"> */}
                        {/* <img src={prod.nutriInfo.A} alt="" /> */}
                    {/* </div>
                </div>
            </div>
        </div> */}


        {/* https://cdn.shopify.com/s/files/1/0449/5225/6667/f…/Health-Benefits-Product-Inside2.png?v=1598532578 */}

    </>
}