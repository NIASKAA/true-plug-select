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
            <footer className="text-center">
                <div className="text-center text-dark p-1">
 avi_branch
                    © 2021 Copyright:
                    <p className="text-dark">ThePlugSelect.com</p>
                    <Link style={{textDecoration: "underline", color: "black"}} onClick={redirect}> Contact Us</Link>

             
                </div>
            </footer>
        </>
    )
}

export default Footer
