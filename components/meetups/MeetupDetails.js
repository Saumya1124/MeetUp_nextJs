import { Fragment } from "react";
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupDetails (props){


    return(
        <Fragment>
            <section className={classes.detail}>
                <img src={props.image} alt={props.title} />
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </section>
        </Fragment>
    )
}
export default MeetupDetails;