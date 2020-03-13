import React from 'react';
import './FriendRequest.css';
import {
    Card, 
    CardText, CardBody,
    CardTitle, } from 'reactstrap';

const FriendRequest = (props) => {
    const friend = props.friend;
    console.log(friend);

    let total = 0;

    for (let i = 0; i < friend.length; i++) {
        const amount = friend[i];
        total = total + amount.salary;
    }


    return (
       
        <Card border="success" className="status" style={{ width: '18rem' }}>
            <CardTitle><h1>Status:</h1></CardTitle>
            <CardBody>
                <CardText><h4>Total Request Sent {friend.length}</h4></CardText>
                <CardText><h4>Total Income : {total}</h4></CardText>
            </CardBody>
        </Card>
    
    );
};

export default FriendRequest;