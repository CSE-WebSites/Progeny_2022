import React from 'react'
import Image1 from '../Faculty/faculty/Kalpana_mam.jpg'
import Image2 from '../Faculty/faculty/Tharani_mam.png'
import Image3 from '../Faculty/faculty/Manimala_mam.png'
import Image4 from '../Faculty/faculty/Nithya_mam.png'
import Image5 from '../Faculty/faculty/GoldaBrunet_mam.jpg'
import Image6 from '../Faculty/faculty/Rani_mam.png'
import Image7 from '../Faculty/faculty/Ruba_mam.png'
import './FacultyCard.css'

const FacultyCard = () => {
  return (
    <>     
     <div style={{display:'flex',alignSelf:'stretch',marginTop:'10px'}}>
     
       <center>  
    <div className="ui link cards" id='container'>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image1}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> Dr. A. M .Kalpana</div>
      <div className="meta">
        <p style={{color:'black'}}>Head of the Department</p>
      </div>
      <div className="description">
     Ph: 9944826102<br></br>
      
     Email: kalpana.gce@gmail.com<br></br>
      </div>
    </div>
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image2}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> Mrs.P.Tharani</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 8870215728<br></br>
      
     Email: tharanip46@gmail.com<br></br>
      </div>
    </div>
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image3}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> Mrs.K.Manimala</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 9442529413<br></br>
      
     Email: manimalaaks@gmail.com<br></br>
      </div>
    </div>
  </div>
</div>
<div className="ui link cards" id='container'  >
<div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image4}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header">Mrs.P.Nithya</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 9786377757<br></br>
      
     Email:pnithyame@gmail.com<br></br>
      </div>
    </div>
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image5}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header">Dr. R. Golda Brunet</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 8754199802<br></br>
      
     Email:goldabrunet@gcesalem.edu.in<br></br>
      </div>
    </div>
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image6}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> K.Saraswathi</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 9952779799<br></br>
      
     Email: ksaras2k15@gamil.com<br></br>
      </div>
    </div>
    
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image6}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> Dr.C.Rani</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 9791638379<br></br>
      
     Email: rani23508@gmail.com<br></br>
      </div>
    </div>
  </div>
  <div className="card" style={{height:'250px'}}>
    <div className="ui small image">
      <img src={Image7}  alt='A.M.kalpana' style={{height:'120px',marginRight:'-130px',display:'flex',justifyContent:'center'}}/>
    </div>
    <div className="content">
      <div className="header"> Mrs.S.Ruba</div>
      <div className="meta">
        <p style={{color:'black'}}>Assistant Professor</p>
      </div>
      <div className="description">
     Ph: 9629930204<br></br>
      
     Email: ruba3112@gmail.com<br></br>
      </div>
    </div>
    
  </div>
  
</div>
</center> 
</div>
 
 
</>

  )
}

export default FacultyCard