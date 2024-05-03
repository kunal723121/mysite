import { Link } from "react-router-dom"
let Nav=()=>
{
    return <div>
        
        <nav className="br-black bg-gray navbar border c navbar-expand-lg">
        <Link to="/Caro"><img height="80" width="100" src="https://img.freepik.com/premium-vector/vintage-fitness-logotype-with-strong-man-hand-holding-fiery-dumbbell_153969-6.jpg"/></Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    {/* <li><Link to="/Caro" className="ml-5 text-dark nav-link">HOME</Link></li> */}
                    
                    <li><Link to="/About" className="ml-5 text-white nav-link">ABOUT</Link></li>
                    <li><Link to="/Diet" className="ml-5 text-white nav-link">DIET</Link></li>
                    <li><Link to="/Workout" className="ml-5 text-white nav-link">WORKOUT</Link></li>
                    <li><Link to="/Cal" className="ml-5 text-white nav-link">CALORIE CALCULATOR</Link></li>
                    <li><Link to="/User" className="ml-5 text-white nav-link">USERS</Link></li>
                    <li><Link className=" ml-5 text-white nav-link">PRODUCTS</Link></li>
                </ul>
            </div>
        </nav>
    </div> 
}
export default Nav