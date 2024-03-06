import Link from 'next/link'
import styles from '../page.module.css'

export default function About(){
    return(
        <main className={styles.main}>
            <div className="About">
                <h1>About</h1>
                <p>This is my Mini Project 2 for my Institute of Data Software Engineering Class.
                    The object is to create a react app with at least three pages. I am taking my Mini Project 1 and recreating it in react.
                    For my Mini Project 1, I created a Storefront website unitizing the <a href="https://fakestoreapi.com/">Fake Store API</a>. 
                </p>
            </div>
        </main>
    )
}