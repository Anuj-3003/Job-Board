import { getUser } from "@workos-inc/authkit-nextjs";

export default async function NewListingPage () {
    const {user}= await getUser()
    return (
        <div className="container">
            
            {!user && (<div>You need to be logged in to post a job</div>)}

            
            {
            user && 
            (
            <div>

            <form action="" >
                <h2>Create a new company</h2>
                <p> You need to register a company before you list a job</p>
            <button className="flex-gap-2 bg-blue-200 px-4 py-2 rounded-md">
                Create a Company
                
            </button>

            </form>

            

            </div>)
            }
            
            <div>
                {JSON.stringify(user)}
            </div>
        </div>
    );
}