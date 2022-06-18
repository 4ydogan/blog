import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                <section className="page-header">
                    <div className="container-xl">
                        <div className="text-center">
                            <h1 className="mt-0 mb-2">{this.props.title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
