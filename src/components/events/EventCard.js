import React from "react";
import "./Event.css";
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Moment from "react-moment";


const EventCard = props => {
const eventDate = props.event.date
const eventTime = props.event.date



    return (
        
            <div className="eventCard">
            <div className="flex">
            
            <CardBody>
            <div className="eventCard-content">
                <CardTitle><h3>{props.event.eventName}</h3></CardTitle>
                <CardText><Moment format="MM/DD/YYYY">{eventDate}</Moment></CardText>
                <CardText><Moment format="HH:mm">{eventTime}</Moment></CardText>
                <CardText>{props.event.eventLocation}</CardText>
                <Button color="success" className="padding2" type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</Button>
                <Button color="danger" className="padding2" type="button"
                onClick={() => props.deleteEvent(props.event.id)}>Remove Event</Button>
            </div>
            </CardBody>
            
            </div>
            </div>
        
    )
}

export default EventCard