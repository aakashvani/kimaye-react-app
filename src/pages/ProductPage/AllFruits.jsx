import "./AllFruits.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs"
import { Category } from "./Category";


export const AllFruits = () => {
    const [list, setList] = useState([]);
    // const [count, setCount] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:8080/product")
            .then(({ data }) => {
                setList(data);
            })
    }, []);

    // const handle = () => {
    //     setCount(count => count + 1)
    // }
    // { console.log(count) }

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const data = await fetch("http://localhost:8080/product").then((d) =>
            d.json()
        );
        setList(data);
        //  console.log(data);
    }


    return (

        <div className="AllProduct">
             {/* <Category/> */}
            {list.map((e) =>
                <div key={e.id} className="Product">
                    {/* <Link to={`/allfruit/${e.id}`}> */}
                    <div className="image">
                        <Link to={`/allfruit/${e.id}`} >
                            <img className="image_img" src={e.Image.img1} alt="FreshFruits" />
                        </Link>
                        <div className="image_overlay">
                           
                            <button onClick={() => {
                                alert("Item Added to Cart ☺️")
                                getData();
                                const data = e;
                                fetch("http://localhost:8080/Cart", {
                                    method: "POST",
                                    headers: {
                                        "content-type": "application/json",
                                    },
                                    body: JSON.stringify(data),
                                });
                                }}
                            
                            
                            > <BsBagCheckFill stroke='white' fontSize="1.5em" style={{
                                position: 'absolute',
                                top: '13px',
                                left: "40px",
                            }} /> CHOOSE YOUR PACK</button>

                        </div>
                    </div>

                    <Link to={`/allfruit/${e.id}`} style={{ textDecoration: 'none' }}>

                        <p className="product-title">{e.Title}</p>
                        <p className="Price-Range">{e.PriceRange}</p>
                    </Link>


                    {/* </Link> */}
                </div>

            )}
        </div>
    )
}