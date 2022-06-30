import React, { useState } from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import styles from "./styles/header.module.css"
import GithubIcon from "../images/github.svg"
import TwitterIcon from "../images/twitter.svg"
import InstagramIcon from "../images/instagram.svg"
import LinkedInIcon from "../images/linkedin.svg"
import MailIcon from "../images/mail.svg"

const ListLink = props => (
    // <li style={{ display: `inline`}}>   
	//  {/* display: `inline-block`, marginRight: `1rem` */}
	<Link to={props.to}>
		{props.children}
	</Link>
    // </li>
)

export default function Header() {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	const [menuActivated, setMenuActivated] = useState(false)

	function toggleNav() {
		// console.log("### toggled")
		// console.log(menuActivated)
		if(!menuActivated) {
			setMenuActivated(true)
			// menuActivated = true
		} else {
			setMenuActivated(false)
			// menuActivated = false
		}
	}
	
	return (
		<div className={styles.headerBackground}> 
			<div className={styles.header} >
				{/* <Link to="/" className={styles.h3}>
					<div>
						{data.site.siteMetadata.title}
					</div>
				</Link> */}

				<div className={styles.listLink}> 
					{/* <ListLink to="/about/">ABOUT</ListLink> */}
					{/* <Link to="/projects/" className={styles.pageLink}>Projects</Link> */}
					{/* <Link to="/blog/" className={styles.pageLink}>Blog</Link> */}
					<Link to="/" className={styles.h3}>
						<div>
							{data.site.siteMetadata.title}
						</div>
					</Link>
					{/* <div className={styles.pageLinks}> */}
						<Link to="/" className={styles.pageLink}>projects</Link>
						<Link to="/blog/" className={styles.pageLink}>blog</Link>
						<Link to="/about/" className={styles.pageLink}>about</Link>
					{/* </div> */}
				</div>
				
				<div className={styles.socials}>
					<Link to="https://github.com/lookdeceline" > <GithubIcon className={styles.socialIcon}/> </Link>
					<Link to="https://www.linkedin.com/in/celinemoon/"> <LinkedInIcon className={styles.socialIcon}/> </Link>
					<a href="mailto:celine@snu.ac.kr"> <MailIcon className={styles.socialIcon} style={{height: `16px`}}/> </a>
					
					{/* <TwitterIcon className={styles.otherIcons}/>
					<InstagramIcon className={styles.otherIcons}/> */}
				</div>
				
				<button className={styles.burger} onClick={toggleNav}>
					<div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
				</button>

				<div className={menuActivated ? styles.dropdown : styles.dropdownHide}>
					{/* "sdddd" */}
					<Link to="/" className={styles.menuPageLink}>projects</Link>
					<Link to="/blog/" className={styles.menuPageLink}>blog</Link>
					<Link to="/about/" className={styles.menuPageLink}>about</Link>
					
					<Link to="https://github.com/lookdeceline" > <GithubIcon className={styles.socialIcon}/> </Link>
					<Link to="https://www.linkedin.com/in/celinemoon/"> <LinkedInIcon className={styles.socialIcon}/> </Link>
					<a href="mailto:celine@snu.ac.kr"> <MailIcon className={styles.socialIcon} /> </a>
				</div>
				{/* {
					(menuActivated) ? (

					)
					:null
				} */}
			</div>
		</div>
	)
}
