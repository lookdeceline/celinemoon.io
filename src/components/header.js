import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import styles from "./styles/header.module.css"
import GithubIcon from "../images/github.svg"
import TwitterIcon from "../images/twitter.svg"
import InstagramIcon from "../images/instagram.svg"

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
				<Link to="/" className={styles.h3}>
					<div>
						🐤 {data.site.siteMetadata.title}
					</div>
				</Link>

				<div className={styles.listLink}> 
					{/* <ListLink to="/about/">ABOUT</ListLink> */}
					<Link to="/projects/">Projects</Link>
					<Link to="/blog/" className={styles.pageLink}>Blog</Link>
					<Link to="/about/" className={styles.pageLink}>About</Link>
				</div>
				
				{/* <div className={styles.socials}>
					<GithubIcon className={styles.githubIcon}/>
					<TwitterIcon className={styles.otherIcons}/>
					<InstagramIcon className={styles.otherIcons}/>
				</div> */}
				
			</div>
		</div>
	)
}
