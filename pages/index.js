import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from "mongodb";
import { Fragment } from 'react';


const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://images.pexels.com/photos/3855951/pexels-photo-3855951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        address:'Some address 5,12345 some city',
        description:'This is a first meetup!'
    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:'https://images.pexels.com/photos/2041928/pexels-photo-2041928.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        address:'Some address 10,12345 some city',
        description:'This is a Second meetup!'
    },
]

function HomePage (props) {


    return (   
        <Fragment>
            <Head>
                <title>NextJs MeetUps</title>
                <meta name='description' content='Browse a huge list of highly active react meetups'/>
            </Head>
            
            <MeetupList meetups={props.meetups} /> 
        </Fragment>        
    )
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://Saumya_24:Saumya_123@cluster0.6o5hkxs.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();

      const meetupsCollection = db.collection('meetups')
      const meetups = await meetupsCollection.find().toArray();
      console.log(meetups)
      client.close();

    //   res.status(201).json({message:'meetup fetched!'});

    return {
        props : {
            meetups: meetups.map(meetup => ({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString(),
            }))
        },
        revalidate : 10
    }

}

// export async function getServerSideProps (context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props : {
//             meetups : DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage
