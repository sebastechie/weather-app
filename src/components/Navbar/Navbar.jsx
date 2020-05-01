import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import NavItems from "../NavItems";


export default class Navbar extends Component {
    render() {
        return (
            <section className={styles.navbarContain}>
                <NavItems route="cardlist" name="CardList NAME"/>
            </section>
        )
    }
}