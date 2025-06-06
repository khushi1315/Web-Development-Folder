import React from 'react'

export default function Alert(props) {
  const Capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
  }
    return (

         props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{Capitalize(props.alert.type)}</strong>:{props.alert.msg}
        <button type="button" className="btn-close"  aria-label="Close"  onClick={props.onClose}>
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>

    )
}
