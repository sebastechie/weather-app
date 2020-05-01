import React, { Component } from "react";
import styles from "./Quiz.module.scss";



export default class Quiz extends Component {

    confirmAnswer = () => {
        const result = document.getElementById('result');
        const submit = document.getElementById('submit');

        submit.onclick = (event) => {
            event.preventDefault();
            if (result.value === "pink") {
                alert("Correctoooo");
            } else {
                alert("Close! Try again.");
            }
        }
    }

    render() {
        return (
            <section className={styles.quizContain}>
                <div className={styles.quizWrap}>
                    <div className={styles.questionContain}>
                        Guess my favourite color.
                    </div>
                    <div className={styles.mid}>
                        <input type="text" id="result" />
                        <input type="submit" id="submit" className={styles.button} onClick={this.confirmAnswer} />
                    </div>
                    <div className={styles.hint}>
                        Hint: <span>Pink</span>.
                    </div>
                </div>
            </section>
        )
    }
}