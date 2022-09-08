import React from "react";

const Movie=(props)=>{

    return(
    <>
        {
            props.val.person===undefined?<div className="setmovieCss">
        {props.val.show.image!=null?<img style={{width:"300px" ,height:"300px"}} src={props.val.show.image.medium
}/>:<img style={{width:"300px" ,height:"300px"}} src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs="/>}
         <p>{props.val.show.name}</p>
         
         
         </div>:<div className="setmovieCss">
        {props.val.person.image!=null?<img style={{width:"300px" ,height:"300px"}} src={props.val.person.image.medium
}/>:<img style={{width:"300px" ,height:"300px"}} src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs="/>}
        <p>{props.val.person.name}</p>
         </div>
        }
    </>
       
    )
}
export default Movie;
{/* <div className="setmovieCss">
        {props.val.person.image!=null?<img style={{width:"300px" ,height:"300px"}} src={props.val.person.image.medium
}/>:<img style={{width:"300px" ,height:"300px"}} src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs="/>}
         </div> */}