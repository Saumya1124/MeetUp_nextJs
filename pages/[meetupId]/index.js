import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupPage () {

    return (
        <MeetupDetails 
            id='m1'
            title='A First Meetup'
            image='https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            address='Some address 5,12345 some city'
            description='This is a first meetup!'
        />
    )
}
export default MeetupPage;