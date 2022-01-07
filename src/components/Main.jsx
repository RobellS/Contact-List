import Contact from "./Contact";
import contacts from "../data/contacts.json";

function Main(){

    const{results} = contacts

console.log(results)

    return (

        <div class="contactList">
            {results.map((results, index)=>{
                return <Contact results={results} key={index} />
            }
            )}

        </div>
    )
}

export default Main