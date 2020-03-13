import React from 'react';
import './People.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fausercircle } from '@fortawesome/free-solid-svg-icons';
import { faIgloo } from '@fortawesome/free-solid-svg-icons'


const People = (props) => {
    console.log(props);
    const { name,age,gender,occupation,img,salary} = props.people;
     

    // const {img,name,url,seller,price,stock} = props.product;
    return (
        <div>
        <Card className="card">
          <CardImg className="img" top width="50%"  src={img}/>
          
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Age: {age} Profession: {occupation}</CardSubtitle>
            <CardText>Gender: {gender}  </CardText>
            <CardText>Salary: {salary}</CardText>
            <Button  className="main-btn" 
                    onClick ={()=>props.handelFriendRequest(props.people)}
                    
            ><FontAwesomeIcon icon={faIgloo}/> Add Friend</Button>
            
          </CardBody>
        </Card>
      </div>
    );
};

export default People;