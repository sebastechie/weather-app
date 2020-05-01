import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import NavItems from "../NavItems";


export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.navbarContain}>
                <NavItems route="/cardlist" name="Weather Cards"/>
                <NavItems route="/quizpage" name="One Question Quiz"/>
                <NavItems route="/fto" name="Football Team Organiser"/>
            </section>
        )
    }
}