import React, { Component } from 'react'

const Advertisement = () => {
    return (
        <>
            <div className="widget no-container rounded text-md-center">
                <span className="my-advertisement-title">- Sponsored Ad -</span>
                <a href="#">
                    <img  className="my-vertical-advertisement-img" src="https://i.hizliresim.com/ouxsrxy.jpg" alt="Advertisement" />
                </a>
            </div>
        </>
    )
}

export default Advertisement;