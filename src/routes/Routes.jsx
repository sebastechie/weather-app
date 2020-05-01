import React, { Component } from "react";
import { Router } from "@reach/router";
import CardList from "../components/CardList/CardList";
import Quiz from "../components/Quiz/Quiz";

import styles from "./Routes.module.scss";

export default class Routes extends Component {
    render() {
        return (
            <Router className={styles.routeContain}>

                <CardList path="cardlist" />
                <Quiz path="quizpage" />

            </Router>
        )
    }
}