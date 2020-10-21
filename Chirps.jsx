import React, {Fragment} from 'react';


const Chirp = (props) => {
     
    let chirp = props.chirp;
    let timeStyle = {
        position: "relative",
        bottom: "1em"
    }
    return (
        <Fragment>
            <li className="list-group-item">
                <small className="d-block" style={timeStyle}>
                    {chirp.user} on {chirp.time.toLocaleString()}
                </small>
                <span className="ml-5">{chirp.content}</span>
            </li>
        </Fragment>
    );
}

export default Chirp;
