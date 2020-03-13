import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './TimeLine.css';
import People from '../People/People';
import FriendRequest from '../FriendRequest/FriendRequest';
import { Clearfix } from 'react-bootstrap';

const TimeLine = () => {
    const first15 = fakeData.slice(0, 15);
    const [people, setPeople] = useState(first15);
    const[friend,setFriend]=useState([]);

    const handelFriendRequest = (props)=>{
        console.log('product added',props);
        const newFriend = [...friend,props];
        setFriend(newFriend) 
    }
    
    return (
        <div className="container">
            <div className="people-container">
                {

                    people.map(friendData => <People
                        handelFriendRequest = {handelFriendRequest}
                        people={friendData}
                        >
                    </People>)
                }
            </div>
            <div className="status">
                    
                     <FriendRequest friend={friend} ></FriendRequest>
            </div>
        </div>
    );
};

export default TimeLine;