import React, { Component } from "react";
import styles from "./Cards.module.scss";

export default class Cards extends Component {
    render() {
        console.log(this.props.city)
        return (
            <section className={styles.cardContain}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <div>{this.props.city.name}</div> {this.props.city.sys.country}
                    </div>
                    <div className={styles.mid}>
                        <div>Temp: {this.props.city.main.temp}</div>
                        <div>Humidity: {this.props.city.main.humidity}</div>
                    </div>
                    <div className={styles.bottom}>
                        <div>Visibility: {this.props.city.visibility}</div>
                        <div>Min temperature: {this.props.city.main.temp_min}</div>
                        <div>Max temperature: {this.props.city.main.temp_max}</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.up}></div>
                    <div className={styles.between}>Wind speed: {this.props.city.wind.speed}</div>
                    <div className={styles.down}>Wind direction: {this.props.city.wind.deg}</div>
                </div>

            </section>
        )
    }
}