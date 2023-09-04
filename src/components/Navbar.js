import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }
    render() {
        let onChange = (e) => {
            this.setState({
                query: e.target.value
            })
        }
        let onClick = (e) => {
            e.preventDefault();
            this.props.parentCallback(this.state.query);
        };

        return (
            <div>
                <nav className="navbar-dark navbar navbar-expand-lg bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item " >
                                    <a className="nav-link active" href="/">About</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" onChange={onChange} type="search" placeholder="Search" aria-label="Search" />
                                <button disabled={this.state.query == "" ? true : false} className="btn btn-outline-success my-2 my-sm-0" onClick={onClick} style={{ "float": "right" }} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar