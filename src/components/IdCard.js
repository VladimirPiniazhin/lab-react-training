function IdCard(props) {
    let month;
    if (props.birth.getMonth() === 1) {
        month = "January";
    } else if (props.birth.getMonth() === 2) {
        month = "February";
    } else if (props.birth.getMonth() === 3) {
        month = "March";
    } else if (props.birth.getMonth() === 4) {
        month = "April";
    } else if (props.birth.getMonth() === 5) {
        month = "May";
    } else if (props.birth.getMonth() === 6) {
        month = "June";
    } else if (props.birth.getMonth() === 7) {
        month = "July";
    } else if (props.birth.getMonth() === 8) {
        month = "August";
    } else if (props.birth.getMonth() === 9) {
        month = "September";
    } else if (props.birth.getMonth() === 10) {
        month = "October";
    } else if (props.birth.getMonth() === 11) {
        month = "November";
    }else {
        month = "December";
    }
    let day;
    if (props.birth.getDay() === 1) {
        day = "Monday";
    } else if (props.birth.getDay() === 2) {
        day = "Tuesday";
    } else if (props.birth.getDay() === 3) {
        day = "Wednesday";
    } else if (props.birth.getDay() === 4) {
        day = "Thursday";
    } else if (props.birth.getDay() === 5) {
        day = "Friday";
    } else if (props.birth.getDay() === 6) {
        day = "Saturday";
    } else {
        day = "Sunday";
    }

    return (
        <div className="IdCard box">
            <img src={props.picture} alt={props.lastName}/>
            <div className="right">
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height/100}</p>
                <p><strong>Birth:</strong> {day} {month} {props.birth.getDate()} {props.birth.getFullYear()}</p>
            </div>
        </div>
    );

}
export default IdCard;

