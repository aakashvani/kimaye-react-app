import "./Category.css"
import { Link } from "react-router-dom"

 

export const Category = () => {
    const category = [
        { title: "ALL FRUITS", to: "/allfruits" },
        { title: "FRESH CUTS", to: "/allfruits" },
        { title: "FRUIT COMBOS", to: "/allfruits" },
        { title: "GIFTS BY KIMAYE", to: "/allfruits" },
    ]


    return (
        <div className="Category">
           
            <div className="Category-link">
                {category.map((e, i) =>

                    <Link key={i} to={e.to} style={{ margin: "5px", color: "#000000" ,textDecoration: 'none' }}>{e.title}</Link>
                )}
            </div>
        </div>
    )
}