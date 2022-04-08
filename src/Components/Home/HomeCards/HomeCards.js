import "./HomeCards.css";
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
        <h2 className="home_header">Technical</h2>
        <div className="home_card_container">
            {
                techEvents.map((techEvent,index)=>(
                    <div className="home_card" key={index}>
                        <div className="face face1">
                            <div className="content">
                            <i className={techEvent.icon}></i>
                            {/* <img src={web} alt="web" /> */}
                            <h3>{techEvent.name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                            <p>{techEvent.short}</p>
                            <a href="/" type="button">Read More</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* non-techinical */}
        <h2 className="home_header">Non Technical</h2>
        <div className="home_card_container">
            {
                nonTechEvents.map((nonTechEvent,index)=>(
                    <div className="home_card" key={index}>
                        <div className="face face1">
                            <div className="content">
                            <i className={nonTechEvent.icon}></i>            
                            <h3>{nonTechEvent.name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
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