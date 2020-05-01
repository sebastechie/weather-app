import React, { Component } from "react";
import styles from "./CardList.module.scss"
import Cards from "../Cards";
export default class CardList extends Component {

    state = {
        allCities: [],
        cityName: ["2643744,", "4749005,", "4219762"],
        cities: []
    }

    componentDidMount() {
        let string = "";
        this.state.cityName.forEach(city => string += `${city}`)
        console.log(`api.openweathermap.org/data/2.5/group?id=${string}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${string}&appid=0f33f5c78acf44e7d38b5f6706f6f59d`)
            .then(response => response.json())
            .then(cities => {
                this.setState({
                    cities: cities.list
                });
            })
    }

    render() {
        console.log(this.state.cities)
        return (
            <>
                <section className={styles.listContain}>
                    <div className={styles.title}>Weather Cards</div>
                    {this.state.cities.map((city, index) => (
                        <div>
                            <Cards city={city} key={index} />
                        </div>
                    ))}
                </section>
            </>
        )
    }
}
