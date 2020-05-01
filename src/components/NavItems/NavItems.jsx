import React, { Component } from "react";
import styles from "./NavItems.module.scss";
import { Link } from "@reach/router";


export default class NavItems extends Component{
    render() {
        return (
            <section>
                
                <Link to={this.props.route}>{this.props.name}</Link>

            </section>
        )
    }
}