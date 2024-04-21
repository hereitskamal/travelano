// import React from 'react'
// import gujrat from '../Images/tourcard/gujrat.jpg'
// import Kashmir from '../Images/tourcard/Kashmir.jpg'
// import karela from '../Images/tourcard/Kerala.jpg'
// import ladakh from '../Images/tourcard/ladakh.jpg'
// import maldives from '../Images/tourcard/maldives.jpg'
// import rajesthan from '../Images/tourcard/rajesthan.jpg'
// import sikkim from '../Images/tourcard/sikkim.jpg'
// import tajmahal from '../Images/tourcard/tajmahal.jpg'
// import './TourCard.css'


// const TourCard = () => {
//   const tourimages = [
//     {image: gujrat, name:'Gujrat', disc:'Gujarat is known for its heritage sites, including UNESCO World Heritage Sites, Gujarat also has the Gir National Park.'},
//     { image:Kashmir, name:'Kashmir',disc:'Kashmir is a state in northern India that s known for its natural beauty, culture, and adventure activities.'} ,
//     {image :karela, name:'Karela',disc:'Kerala is a coastal state in southern India thats known for its natural beauty and rich cultural heritage'} ,
//     {image:ladakh,name:'ladakh', disc:'famous for its remote culture and monastic traditions, alpine landscape and natural beauty, and most of all, its friendly people.'},
//     {image:maldives, name:'Maldives',disc:'The Maldives is a popular tourist destination known for its natural beauty, luxury resorts, and eco-friendly approach to tourism.'},
//     {image:rajesthan,name:'Rajesthan',disc:'Rajasthan is known for its historical hill forts & palaces, it is claimed as the best place for tourism-related to palaces. '}, 
//     {image:sikkim,name:'sikkim',disc:'Rich in history, culture, and natural resources, this state is often considered the gateway to the Northeastern region of the country.'},
//     {image:tajmahal,name:"Tajmahal",disc:'the jewel of Muslim art in India and one of the universally admired masterpieces of the worlds heritage'}]
//   return (
//     <>
//     <div className="tour-grid-container">
//       <h1>Choose your most loved spot</h1>
//       {tourimages.map((value,id)=>{
//         return<div class="flip-card">
//         <div class="flip-card-inner">
//           <div class="flip-card-front">
//             <img src={value.image} alt="Avatar" style={{width:"100%",height:"100%"}}/>
//           </div>
//           <div class="flip-card-back">
//             <h1 style={{lineHeight:'15px'}}>{value.name}</h1>
//             <p>{value.disc}</p>
//             <h2>Click</h2>
//           </div>
//         </div>
//       </div>
//       })}
    
// </div>
// </>
//   )
// }

// export default TourCard