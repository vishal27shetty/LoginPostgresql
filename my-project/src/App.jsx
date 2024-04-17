import React, {useEffect, useState} from "react"
import Login from "./Login.jsx"
export default function App() {
  const [backendData, setBackeddata] =  useState([{}])
  
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
          setBackeddata(data)
      }
    
    )
  }, [])
  return (
    <div>
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>): (
            backendData.users.map((users,i) => {
              <p key={i}>{user}</p>
            })
        )}
      </div>
    <Login />
    </div>
  )
}