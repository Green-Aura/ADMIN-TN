
import React from "react";
import {AiOutlineDelete} from "react-icons/ai"
class Suggestion  extends React.Component {
    constructor(props) {
      super(props);    
      console.log()
    }

    render(){
        return(    

<div className="Complaincard">
<button variant="outlined" color="error" id="deletecomplain" >
 
 <AiOutlineDelete/>
</button>
    <img src={this.props.oneSuggestion.userimage} className="userimageComplain"/>
    <div className="usernameComplain">{this.props.oneSuggestion.username}</div>
   <img  src={this.props.oneSuggestion.image.uri} className="suggestionimage"/>
 
    <div className="Complaindescription">{this.props.oneSuggestion.description}</div>
    {/* Ne9sa script localisation */}
    

    
    </div>
               )
    }
}
export default Suggestion