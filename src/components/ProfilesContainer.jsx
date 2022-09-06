import React from "react";
import Oneprofile from "./Oneprofile";
import {firebase,db} from '../firebase/firebase'
import { doc, deleteDoc} from "firebase/firestore";
  

class ProfilesContainer  extends React.Component {
    constructor(props) {
      super(props); 
      this.state={profiles:[]}    
      this.codeleteUser = this.codeleteUser.bind(this)    
    }
    componentDidMount(){
        this.fecthProfiles();
    }

   
    codeleteUser =  (id) => {
       
       const docRef = doc(db, "Complains", id);

       deleteDoc(docRef)
       .then(() => {
        alert("users has been banned successfully") ;
       })
       .catch(error => {
           console.log(error);
       })
        
      };

    fecthProfiles=()=>{
 
        const ref=firebase.firestore().collection('users') 
        
           ref.onSnapshot(querysnapshot=>{
              const list=[]
              querysnapshot.forEach(doc=>{
              
                  list.push({ 
                      id:doc.id,
                      fullName:doc.data().fullName,
                      image:doc.data().image,
                      email:doc.data().email,
                      city:doc.data().city,
                      adress:doc.data().adress,
                      Municipality:doc.data().Municipality,
                    
    
                  })
              }); 
    
              
              this.setState({profiles:list})
              console.log(this.profiles)
          
          })
        }
    render(){
        return(    

<>
        {this.state.profiles.map(element=>{
       
            return(<div ><Oneprofile  codeleteUser={this.codeleteUser} changeProfile={this.props.changeProfile} oneuser={element} /></div>)
             })
            }</>)
    }
}
export default ProfilesContainer