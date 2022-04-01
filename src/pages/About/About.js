import React from 'react'
import { useHistory } from 'react-router-dom'
import {toast } from 'react-toastify';


const About = () => {
 const history =  useHistory()

if(history.location.pathname) {
  toast.success('Вы перешли на страницу About', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

  return (
    <div className='container'>
        About
    </div>
  )
}

export default About