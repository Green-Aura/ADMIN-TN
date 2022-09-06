import ProfilesContainer from '../components/ProfilesContainer'
import "./style.css"
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Table,
  Col
} from "reactstrap";

class UserProfile  extends React.Component {
    constructor(props) {
      super(props); 
      this.state={profile:{image:"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",fullName:"unkown",adress:"unkown",phoneNumber:"unkown"}}        
      this.changeProfile = this.changeProfile.bind(this)
    }
   
    changeProfile=(newprofile)=>{
        this.setState({profile:newprofile})
    }
    render(){
      return(
        <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Profiles</h5>
                </CardHeader>
                <CardBody>
                <Table className="tablesorter" responsive id="profilesheader">
                  <thead className="text-primary">
                    <tr>
                      <th >Name</th>
                      <th>Email</th>
                     
                      <th className="text-center">Ban Profile</th>
                    </tr>
                  </thead>
                  
                 
                </Table>
                  <ProfilesContainer changeProfile={this.changeProfile}/>
                </CardBody>
                <CardFooter>
                  
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={this.state.profile.image}
                      />
                      <h5 className="title">{this.state.profile.fullName}</h5>
                    </a>
                    <p className="description">{this.state.profile.email}</p>
                  </div>
                  <div className="card-description">
                    ID :  {this.state.profile.id}
                    
                  </div>
                  <div className="card-description">
                    City :  {this.state.profile.city}
                    
                  </div>
                  <div className="card-description">
                    Municipality :  {this.state.profile.Municipality}
                    
                  </div>
                  <div className="card-description">
                  Address : {this.state.profile.adress}
                    
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
      )
    }
}
export default UserProfile


