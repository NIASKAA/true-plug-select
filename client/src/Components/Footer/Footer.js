import React from 'react'
import {useHistory, Link} from 'react-router-dom'
import './styles.css'
const Footer = () => {
    let history = useHistory()
    const redirect = () => {
        history.push('/support')
    }
    return (
        <>
            <footer class="text-center">
                <div class="text-center text-dark p-1">
                    © 2021 Copyright:
                    <a class="text-dark" href="#">ThePlugSelect.com</a>
                    <Link style={{textDecoration: "none", color: "black"}} onClick={redirect}> Contact Us</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer
