import React from 'react';

export default function ViewProfile() {
  return (
    <div>
      {localStorage.getItem("email") ? <p>Email : {localStorage.getItem("email")}</p> : <p>You need to login first</p>}
    </div>
  )
}
