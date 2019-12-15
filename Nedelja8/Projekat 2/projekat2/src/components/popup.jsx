import React from 'react'

export const Popup = ({message, reject, accept}) => {
    return (
      <div>
        <div>
          <p>{message}</p>
          <div>
            <button onClick={accept}>Yes</button>
            <button onClick={reject}>No</button>
          </div>
        </div>
      </div>
    );
}