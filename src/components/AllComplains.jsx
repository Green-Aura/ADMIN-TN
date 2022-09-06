import React from "react";
import OneComplain from "../components/OneComplain"
import {firebase,db} from '../firebase/firebase'

  

class AllComplains  extends React.Component {
    constructor(props) {
      super(props); 
      this.state={Complains:[]}    
        
    }
    componentDidMount(){
        this.fetchComplains();
    }
    fetchComplains(){
        const ref=firebase.firestore().collection('Complains') ;
        ref.onSnapshot(querysnapshot=>{
            const list=[]
            querysnapshot.forEach(doc=>{
            
                list.push({ 
                    iduser:doc.iduser,
                    fullName:doc.data().fullName,
                    image:doc.data().image,
                    type:doc.data().type,
                    userimage:doc.data().userimage,
                    username:doc.data().username,
                    location:doc.data().location,
                    description:doc.data().description,
                    createdAt:doc.data().createdAt,
  
                })
            }); 
  
            
            this.setState({Complains:list})
            console.log(this.Complains)
        
        })
    }
    render(){
        return(    

<>
        {this.state.Complains.map(element=>{
            return(<div > <OneComplain  oneComplain={element}/> </div>)
             })
            }</>)
    }
}
export default AllComplains