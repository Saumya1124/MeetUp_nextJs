import { ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient } from "mongodb";

function MeetupPage (props) {

    return (
        <MeetupDetails 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths(){

    const client = await MongoClient.connect(
        "mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const meetupsCollection = db.collection("meetups");
      const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
      client.close();
      return {
        fallback: true,
        paths: meetups.map((meetup) => ({
          params: { meetupId: meetup._id.toString() },
        })),
      };
}
    


export async function getStaticProps(context){

    const meetupId = context.params.meetupId

    console.log(meetupId)

      const client = await MongoClient.connect(
        "mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();
    
      const meetupsCollection = db.collection("meetups");
      const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
      });
      console.log(selectedMeetup);
      client.close();

    return {
        props: {
            meetupData : {
               id : selectedMeetup._id.toString(),
               title : selectedMeetup.title,
               address : selectedMeetup.address,
               image : selectedMeetup.image,
               description : selectedMeetup.description

            }
        }
    }
}
export default MeetupPage;