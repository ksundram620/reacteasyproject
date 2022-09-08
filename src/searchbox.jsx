import React,{useState} from "react";
import Movie from "./movie";

const Main=()=>{
    const [fetchedData,setfetchedData]=useState([]);
    const [searchdata,setSearchData]=useState("");
  
    function Actor(){
        fetch('https://api.tvmaze.com/search/people?q=akon')
        .then(obj=>obj.json())
        .then(data=>setfetchedData(data))
        document.getElementById('input').value="";
    }
    function Show(){
        fetch('https://api.tvmaze.com/search/shows?q=friends')
        .then(obj=>obj.json())
        .then(data=>setfetchedData(data))
        document.getElementById('input').value="";
    }
    function serch(event){
        setSearchData(event.target.value);
    }
    return (
        <>
        <div id="index">
        <div id="main-box" >
                <h1>TVmaze</h1>
                <h3>Search your favourite shows</h3>
                 <input type="radio" value="Actor" name="radAnswer" onClick={Actor}/> <label>Actor</label>  
                 <input type="radio" value="Shows" name="radAnswer" onClick={Show}/> <label>Shows</label>
                 <div id="search">
                 <input  type="text" placeholder="eg: Friends... " id="input" onChange={serch}/>  
                 </div>     
                 <span id="ifnotfound"></span>
            </div>
        </div>
           
            <div id="flex">
            
            {
                
                searchdata.length>=1?fetchedData.map((ele,idx)=>{
                    let val="";
                    if(ele.person===undefined){
                        val=String(ele.show.name);

                    }
                  if(ele.show===undefined){
                    val=String(ele.person.name);
                  }
                        
                    
                    val=val.toLowerCase();
                    if(searchdata==val.substring(0,searchdata.length)){
                        return  <Movie val={ele} key={idx} />
                           
                    }
                    
                }):null
            }
            </div>
        </>
    )
}

export default Main;
