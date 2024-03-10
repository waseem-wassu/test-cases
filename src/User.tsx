import React from 'react'

export interface IUserProps {
  name:string,
  status:boolean
  changeStatus: () => void;
}

const User = ({name,status,changeStatus}:IUserProps) => {
     
  return (
    <div>
      <p>User name is {name}</p> 
      <p>{status ? 'Online' : 'Offline'}</p>
      <button data-testid="toggleButton"  onClick={changeStatus}>
        {status ? 'Go Offline' : 'Go Online'}
      </button>
    </div>
  )
}

export default User
