function Contact(props){

    return (

        <div class="contactCard">
            <img class="contactImage" src={props.results.picture.medium} />
            <h2 class="contactName">{props.results.name.first} {props.results.name.last}</h2>
            <h3 class="contactHome">Home: {props.results.phone}</h3>
            <h3 class="contactCell">Cell: {props.results.cell}</h3>

        </div>
    )
}

export default Contact