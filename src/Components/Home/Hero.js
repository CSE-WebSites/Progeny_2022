import "./Home.css";
import {Link} from "react-router-dom"
const HeroHome = () => {
    return ( 
        <div className="hero_home">
            <section className="hero">
                <div className="content">
                    <h2>Progen<span className="i_progen">i</span> 22.0</h2>
                    <p>Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non</p>
                </div>
                <Link to="/register"><button className="btn-hover color-5">Register Now</button></Link>
                <div className="waves"></div>
            </section>
        </div>
     );
}
 
export default HeroHome;