import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import styles from "./styles/header.module.css"
import GithubIcon from "../images/github.svg"
import TwitterIcon from "../images/twitter.svg"
import InstagramIcon from "../images/instagram.svg"
import LinkedInIcon from "../images/linkedin.svg"

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
					<Link to="/about/" className={styles.pageLink}>about</Link>
				</div>
				
				<div className={styles.socials}>
					<Link to="https://github.com/lookdeceline" > <GithubIcon className={styles.githubIcon}/> </Link>
					<Link to="https://www.linkedin.com/in/celinemoon/"> <LinkedInIcon className={styles.otherIcons}/> </Link>
					
					{/* <TwitterIcon className={styles.otherIcons}/>
					<InstagramIcon className={styles.otherIcons}/> */}
				</div>
				
			</div>
		</div>
	)
}
