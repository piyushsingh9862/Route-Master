import React from 'react'
import acc from '../assets/accounts.svg'

export default function Contact() {
    return (
        <>
            <div className="container marketing jumbotron">
                <img className="img" src={acc} alt="placeholder" />
                <h2 className='name'>Piyush Singh</h2>
                <div className='d-flex justify-content-center'>
                    <p className='contact mx-2'><a className="btn btn-secondary" href="https://github.com/piyushsingh9862"><i class="bi bi-github"></i> Github</a></p>
                    <p className='contact mx-2'><a className="btn btn-secondary" href="https://www.linkedin.com/in/piyush-singh-2a0a92179"><i class="bi bi-linkedin"></i> LinkedIn</a></p>
                </div>
                <p className='contact'><i class="bi bi-envelope"></i> piyushsingh9862@gmail.com</p>
            </div>
        </>
    )
}
