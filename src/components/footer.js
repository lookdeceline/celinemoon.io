import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"

import * as styles from "./styles/footer.module.css"
import GithubIcon from "../images/github.svg"
import TwitterIcon from "../images/twitter.svg"
import InstagramIcon from "../images/instagram.svg"


export default function Footer() {
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
		<div className={styles.footerBackground}>
			<div className={styles.footer} >
				<div className={styles.leftSide}>
					<div> 2023 © {data.site.siteMetadata.title} </div>
					{/* <div className={styles.comment}> Inspired by <a href="https://hohyeonmoon.com" target="_blank">Hohyeon</a></div> */}
				</div>

				{/* <div className={styles.rightSide}>
					<Link to="https://github.com/lookdeceline"> 
						<GithubIcon className={styles.icon}/> 
					</Link>
					<Link to="https://twitter.com/lookdeceline">
						<TwitterIcon className={styles.icon}/>
					</Link>
					<Link to="https://www.instagram.com/lookdeceline/">
						<InstagramIcon className={styles.icon}/>
					</Link>
				</div> */}
			</div>
		</div>
	)
}
