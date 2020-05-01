import React, { Component } from "react";
import { Router } from "@reach/router";
import CardList from "../components/CardList/CardList";

export default class Routes extends Component {
    render() {
        return (
            <Router>

                <CardList path="cardlist" />


            </Router>
        )
    }
}