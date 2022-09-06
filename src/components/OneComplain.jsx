import React from "react";

import { Button } from "reactstrap";
import {AiOutlineDelete} from "react-icons/ai"
class OneComplain  extends React.Component {
    constructor(props) {
      super(props);    
      console.log(props.oneComplain)
    }

    render(){
        return(    

<div className="Complaincard">
<button variant="outlined" color="error" id="deletecomplain" >
 
  <AiOutlineDelete/>
</button>
    <img src={this.props.oneComplain.userimage} className="userimageComplain"/>
    <div className="usernameComplain">{this.props.oneComplain.username}</div>
    <div className="dateComplain">{String(new Date(this.props.oneComplain.createdAt)).substring(0,25)}</div>
    {this.props.oneComplain.image.length!==0 ? <img src={this.props.oneComplain.image.uri} className="Complainimage"/> : <p>hello</p>}
    <div className="ComplainType">{this.props.oneComplain.type}</div>
    <div className="Complaindescription">{this.props.oneComplain.description}</div>
    {/* Ne9sa script localisation */}
    {
            
                this.props.oneComplain.location.longitude ? 
               <a id="localisation" target="_blank" href={`https://www.google.com/maps/@${this.props.oneComplain.location.latitude},${this.props.oneComplain.location.longitude},18z`} >Localisation</a>
              
                : null
              }
    
    
</div>
               )
    }
}
export default OneComplain