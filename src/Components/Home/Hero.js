import "./Home.css";
import {Link} from "react-router-dom";
import CountDown from "./CountDown/CountDown";
import Count from "./Count/Count";
const HeroHome = () => {
    return ( 
        <div className="hero_home">
            <section className="hero">
                <div className="content">
                    <h2>Progen<span className="i_progen">i</span> 22.0</h2>
                    <p>It is a National Level technical Symposium conducted by Society for Advancement of Computer Science and Engineering (SACSE) in order to nurture and encourage young talents and innovations through different events.</p>
                    <CountDown/>
                    <Count/>
                </div>
                <Link to="/register"><button className="btn-hover color-5">Register Now</button></Link>
                <div className="waves"></div>
            </section>
        </div>
     );
}
 
export default HeroHome;