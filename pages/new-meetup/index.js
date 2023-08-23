import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage () {

    const router = useRouter()

    async function addMeetupHandler (enteredData){

        console.log(enteredData)

        const response = await fetch('/api/new-meetup',{
            method : 'POST',
            body : JSON.stringify(enteredData),
            headers : {
                'Content-type' : 'application/json'
            }
        })

        const data = await response.json()
        console.log(data)

        router.push('/')

    }

    return (
       
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
       
    )
}
export default NewMeetupPage;