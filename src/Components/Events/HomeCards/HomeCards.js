import "./Homecards.css";
// import web from "../../../Images/Home/web.svg"
const HomeCards = () => {

    const techEvents = [
        {
            name:"Mr.Engineer",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-cogs"
        },
        {
            name:"PPT",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-file-powerpoint"
        },
        {
            name:"Code Debugging",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-bug"
        },
        {
            name:"Web Designing",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-code"
        },
    ]

    const nonTechEvents = [
        {
            name:"Googling",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fab fa-google"
        },
        {
            name:"Marketing",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-chart-bar"
        },
        {
            name:"Photography",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-photo-video"
        },
        {
            name:"Connection",
            short:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?",
            icon:"fas fa-network-wired"
        },
    ]


    return ( 
        <>
        {/* technical */}
        <h2 className="home_headers">Technical</h2>
        <div className="home_card_containers">
            {
                techEvents.map((techEvent,index)=>(
                    <div className="home_cards" key={index}>
                        <div className="faces face1s">
                            <div className="contents">
                            <i className={techEvent.icon}></i>
                            {/* <img src={web} alt="web" /> */}
                            <h3>{techEvent.name}</h3>
                            </div>
                        </div>
                        <div className="faces face2s">
                            <div className="contents">
                            <p>{techEvent.short}</p>
                            <a href="/" type="button">Read More</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* non-techinical */}
        <h2 className="home_headers">Non Technical</h2>
        <div className="home_card_containers">
            {
                nonTechEvents.map((nonTechEvent,index)=>(
                    <div className="home_cards" key={index}>
                        <div className="faces face1s">
                            <div className="contents">
                            <i className={nonTechEvent.icon}></i>            
                            <h3>{nonTechEvent.name}</h3>
                            </div>
                        </div>
                        <div className="faces face2s">
                            <div className="contents">
                            <p>{nonTechEvent.short}</p>
                            <a href="/" type="button">Read More</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
     );
}
 
export default HomeCards;