import React from 'react'

export default function Alert(props) {
    function cap(str){
        let f = (str.slice(0,1)).toUpperCase();
        return(f+str.slice(1))
    }
  return (
    props.alert && <div>
      <div class={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlinkHref="#info-fill"/></svg>
  <div>
  <strong>{cap(props.alert.type)}</strong>
    :{props.alert.msg}
  </div>
  </div>
    </div>
  )
}
