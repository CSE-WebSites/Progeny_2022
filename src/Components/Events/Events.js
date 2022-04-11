import { Link } from "react-router-dom";
import React from 'react';
import HomeCards from "./HomeCards/HomeCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import { motion } from "framer-motion";
import "./Events.css";

import SwiperCore, {EffectCoverflow,Pagination,Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Events() {

  const items = [
    {
      id: 1,
      name: 'Mr.Engineer',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
      desc: ' Mr.engineer event can help you to enhance your placement skill. Round 1 :(aptitude test)>Timing : 30 minutes>In round 1 , Participants  have to take a aptitude test consist of 20 questions . Aptitude test have three sections of questions Arithmetic aptitude, Logical/Reasoning and Technical questions.>Participants who obtain maximum score can advance to the next level.Round 2:(programming round)> Student who got passed round 1 can participate round 2.> Timing :30mins> 5 program problems are in this round. Participants who solve maximum problem can advance to the next level.Round 3 :(Seminar)> Student who got passed round 2 can participate round 3.> Participants are given with a technical topic. They have to give a seminar about the topic for 5minutes'
    },
    {
      id: 2,
      name: 'Debugging ',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg',
      desc:'Debugging, in computer programming and engineering, is a multistep process that involves identifying a problem, isolating the source of the problem, and then either correcting the problem or determining a way to work around it.Debugging is an important part of determining why an operating system, application or program is misbehaving. Even if developers use the same coding standard,its more than likely that a new software program will still have bugs. In many cases, the process of debugging a new software program can take more time than it took to write the program. Invariably, the bugs in software components that get the most use are found and fixed first.'
    },
    {
      id: 3,
      name: 'Web Design',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg',
      desc:'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development.'
    },
    {
      id: 4,
      name: 'PPT',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
      desc:'Duration: 5 to 7 minutes (5 min presentation +2  min queries) Batch: 2 members Topics: Department related (choosen by participants)  RULES: 1) Slides: 8 slides 2) Background: Light background with bold letters 3) Times new roman4) Each member in a batch should present'
    },
    {
      id: 5,
      name: 'Googling',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
      desc: 'Search for information about images on the internet using the search engine Google."Search the image in  the speed of the neuron".The Act of using Google Search engine is known colloquially as "Googling".Due to the dominance of the Google search engine,to google has become a "Transitive verb".Duration:1st round - 10 min2ndround-10 min No of image to be given : 10 for each round.Rules: Dont use Google lens.Dont use image recognition software."Competition with search engine".'
    },
    {
      id: 6,
      name: 'Marketing',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
      desc:'this is descmar'
    },
    {
      id: 7,
      name: 'Photography',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
      desc:'Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.'
    }
    ,
    {
      id: 8,
      name: 'connections',
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
      desc:'A connection game is a type of abstract strategy game in which players attempt to complete a specific type of connection with their pieces. This could involve forming a path between two or more endpoints, completing a closed loop, or connecting all of ones pieces so they are adjacent to each other.Connection games are activities meant to encourage interactions and help build bonds among players. Examples games include personal trivia, photo challenges, and mingle Bingo.Open up your mind to stay connected with an eye to procure knowledge !!!'
    }
  ]

  
  return (
    <div className="container">
     
     <div className="card-wrapper">
     
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
          <div className="card">
            
          {items.map((item,index)=>(
              <div key={index}>
                <SwiperSlide >
                  <div className="image">
                      <img src= {item.image} alt="loading"/>
                  </div>
                  <div className="title">
                      <h4>{item.name} </h4>
                      <Link to={`/event/${item.id}`} state={items}> 
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="save-button">
                        Read More
                      </motion.button>
                      </Link>   
                  </div>
                </SwiperSlide> 
              </div> 
            ))}
        
        </div>
         
      </Swiper>

      <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        <div>
           <HomeCards/>
        </div>        
      </div>
    </div>
   
  );
}
  
