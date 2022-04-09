import "./Home.css"
import Hero from "./Hero"
import HomeCards from "./HomeCards/HomeCards";
const Home = () => {
    return ( 
        <div className="home">
            <Hero/>
            <HomeCards/>
        </div>
     );
}
 
export default Home;