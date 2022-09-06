import React from "react";
import { Button } from "reactstrap";
import {AiOutlineDelete} from "react-icons/ai"

const Oneprofile =(props)=>(
  <>
 
  <div className="user-row" onClick={()=>{props.changeProfile(props.oneuser)}}>
    
<img className="user-avatar" src={props.oneuser.image} alt="avatar"/>
<div className="user-name">{props.oneuser.fullName}</div>
<div className="user-email">{props.oneuser.email}</div>
</div>
<div className="buttoncontainer">
<Button variant="outlined" color="error" className="banButton" onClick={()=>{props.codeleteUser(props.oneuser.id);}}>
  Ban profile
  <AiOutlineDelete/>
</Button>
</div>

</>
)
export default Oneprofile