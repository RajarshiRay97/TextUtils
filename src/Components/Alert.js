import React from 'react';

export default function Alert(props) {
    return (
    props.alertObj && <div id="alertDiv" className={`alert alert-${props.alertObj.type} alert-dismissible fade show ${props.alertObj.displayClass}`} role="alert" style={{marginBottom: 0, position: "absolute", width: "100%"}}>
        <strong>{props.alertObj.type.toUpperCase()}!</strong> {props.alertObj.msg}
        <button type="button" className="btn-close" onClick={props.closeAlert} aria-label="Close"></button>
    </div>
    );
}
