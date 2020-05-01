import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import NavItems from "../NavItems";


export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.navbarContain}>
                <NavItems route="/cardlist" name="Weather App"/>
                <NavItems route="/quizpage" name="Single Quiz"/>
                <NavItems route="/quizpage" name="Football Team"/>
            </section>
        )
    }
}