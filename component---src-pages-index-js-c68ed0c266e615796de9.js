(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EelP:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M2.12913 12.1197H5.6231C5.13858 11.5942 4.83149 10.8982 4.79055 10.1407H2.44305C2.10184 10.1407 1.97901 9.99055 1.97901 9.67664V2.44305C1.97901 2.12914 2.10184 1.97901 2.44305 1.97901H7.6021C7.94331 1.97901 8.06614 2.12914 8.06614 2.44305V6.85827C8.82362 6.8924 9.51969 7.19948 10.0451 7.68399V2.12914C10.0451 0.791606 9.25355 0 7.916 0H2.12913C0.791603 0 0 0.791606 0 2.12914V9.99056C0 11.3281 0.791603 12.1197 2.12913 12.1197ZM3.4189 4.13544H6.63308C6.85145 4.13544 7.01522 3.96484 7.01522 3.74646C7.01522 3.53491 6.85145 3.37113 6.63308 3.37113H3.4189C3.1937 3.37113 3.02992 3.53491 3.02992 3.74646C3.02992 3.96484 3.1937 4.13544 3.4189 4.13544ZM3.4189 5.77323H6.63308C6.85145 5.77323 7.01522 5.60262 7.01522 5.38425C7.01522 5.17271 6.85145 5.00893 6.63308 5.00893H3.4189C3.1937 5.00893 3.02992 5.17271 3.02992 5.38425C3.02992 5.60262 3.1937 5.77323 3.4189 5.77323ZM7.92966 12.1197C8.23675 12.1197 8.53019 12.0514 8.79633 11.9354L9.66298 12.7953C9.80629 12.9318 9.99055 13 10.1816 13C10.5842 13 10.8913 12.6929 10.8913 12.2835C10.8913 12.0992 10.8367 11.9218 10.6866 11.7717L9.84042 10.9255C9.9769 10.6457 10.052 10.3318 10.052 9.99738C10.052 8.8441 9.1034 7.88189 7.92966 7.88189C6.77638 7.88189 5.81417 8.8441 5.81417 9.99738C5.81417 11.1643 6.77638 12.1197 7.92966 12.1197ZM7.92966 11.0756C7.33596 11.0756 6.85145 10.6047 6.85145 9.99738C6.85145 9.40368 7.33596 8.92598 7.92966 8.92598C8.53018 8.92598 9.00788 9.40368 9.00788 9.99738C9.00788 10.6047 8.53018 11.0756 7.92966 11.0756Z",fill:"#0B70CA"}))}o.defaultProps={width:"11",height:"13",viewBox:"0 0 11 13",fill:"none"},e.exports=o,o.default=o},Ejk1:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=(a("Wbzz"),a("9eSz"),a("dXdV")),r=a.n(l),i=a("EelP"),m=a.n(i),d=a("b5NC"),c=a.n(d);t.a=function(e){var t=c.a.iconSmall,a=c.a.textSmall;"medium"===e.size&&(t=c.a.iconMedium,a=c.a.textMedium);var n=o.a.createElement(r.a,{className:t});return"research"===e.type&&(n=o.a.createElement(m.a,{className:t})),o.a.createElement("div",{className:c.a.container},n,o.a.createElement("div",{className:a},e.text))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),r=a("9eSz"),i=a.n(r),m=a("Bl7J"),d=a("vrFN"),c=a("YxQw"),s=a("Ejk1"),u=a("pyUO"),C=a.n(u);function f(e){var t=e.data,a=t.allMarkdownRemark.edges.filter((function(e){return e&&0===e.node.fields.slug.indexOf("/projects")})),n=t.allMarkdownRemark.edges.filter((function(e){return e&&0===e.node.fields.slug.indexOf("/blog")})),r=t.allFile.nodes.filter((function(e){return e&&"profile-picture.png"===e.childImageSharp.fluid.originalName}))[0];return o.a.createElement(m.a,null,o.a.createElement(d.a,{title:"Lookdeceline"}),o.a.createElement("div",{className:C.a.about},o.a.createElement("div",null,o.a.createElement("h1",{className:C.a.subSectionTitle},"About Me"),o.a.createElement("h2",{className:C.a.intro},"Hi, I’m Celine and an iOS developer. My development interest lies in the intersection of designing and writing codes to build fluid user experience on iOS. This site is to recap what I’ve learned in the process. I designed, built, and maintain this site. 👩🏻‍💻")),o.a.createElement(i.a,{className:C.a.profileImage,fluid:r.childImageSharp.fluid})),o.a.createElement("div",{className:C.a.body},o.a.createElement("div",{className:C.a.projectSection},o.a.createElement("h3",{className:C.a.subSectionTitle},"Projects"),o.a.createElement("div",{className:C.a.cardsContainer},a.map((function(e){var t=e.node;return o.a.createElement(l.Link,{to:"/projects/"+t.frontmatter.path},o.a.createElement("div",{key:t.id,className:C.a.cardItem,style:{backgroundColor:t.frontmatter.backgroundColor}},o.a.createElement("div",{className:C.a.imageContainer},o.a.createElement(i.a,{className:C.a.image,fluid:t.frontmatter.featuredImage.childImageSharp.fluid})),o.a.createElement("div",{className:C.a.cardContent},o.a.createElement("div",{className:C.a.cardContentTitle},t.frontmatter.title),o.a.createElement("div",{className:C.a.cardContentIntro},t.frontmatter.intro),o.a.createElement(s.a,{type:t.frontmatter.type,text:t.frontmatter.text,size:"small"}))))})))),o.a.createElement("div",{className:C.a.blogSection},o.a.createElement("h3",{className:C.a.subSectionTitle},"Blog Posts"),o.a.createElement("div",{className:C.a.cardsContainer},n.map((function(e){var t=e.node;return o.a.createElement(c.a,{node:t})}))))))}},XDVu:function(e,t,a){e.exports={cardsContainer:"smallThumbnailPost-module--cardsContainer--1DWVB",cardItem:"smallThumbnailPost-module--cardItem--3Qnxe",blogpostImageContainer:"smallThumbnailPost-module--blogpostImageContainer--3j454",image:"smallThumbnailPost-module--image--3nxsg",cardContent:"smallThumbnailPost-module--cardContent--3wsQ6",cardHeader:"smallThumbnailPost-module--cardHeader--2mW49",cardContentDate:"smallThumbnailPost-module--cardContentDate--2X_qY",cardContentTitle:"smallThumbnailPost-module--cardContentTitle--3aK7T",cardContentIntro:"smallThumbnailPost-module--cardContentIntro--YZ4Tn",appStore:"smallThumbnailPost-module--appStore--1u4nE",smallTagsContainer:"smallThumbnailPost-module--smallTagsContainer--3Q0N2"}},YxQw:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),r=(a("9eSz"),a("xFqC")),i=a("XDVu"),m=a.n(i);t.a=function(e){var t=e.node;return o.a.createElement(l.Link,{to:"/blog/"+t.frontmatter.path,key:t.id,className:m.a.cardItem},o.a.createElement("div",{className:m.a.cardContent},o.a.createElement("div",{className:m.a.cardContentTitle},"🗒 ",t.frontmatter.title),o.a.createElement("div",{className:m.a.cardContentIntro},t.frontmatter.intro),o.a.createElement("div",{className:m.a.smallTagsContainer},t.frontmatter.tags?t.frontmatter.tags.map((function(e,t){return o.a.createElement(r.a,{tag:e})})):null)))}},b5NC:function(e,t,a){e.exports={container:"icon-note-module--container--yVkuK",iconSmall:"icon-note-module--iconSmall--1YjjC",iconMedium:"icon-note-module--iconMedium--3YEfM",textSmall:"icon-note-module--textSmall--KGzBX",textMedium:"icon-note-module--textMedium--2ouEz"}},dXdV:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M6.4935 15.247C7.49784 16.251 8.50217 16.251 9.50649 15.247L10.4762 14.2776C10.5455 14.2084 10.5974 14.1911 10.684 14.1911H12.0606C13.4805 14.1911 14.1905 13.4727 14.1905 12.0619V10.6858C14.1905 10.5992 14.2164 10.5386 14.2771 10.478L15.2468 9.50869C16.2511 8.50469 16.2511 7.50071 15.2468 6.49672L14.2771 5.52734C14.2078 5.4581 14.1905 5.40619 14.1905 5.31963V3.94347C14.1905 2.52404 13.4719 1.81432 12.0606 1.81432H10.684C10.5974 1.81432 10.5368 1.78835 10.4762 1.72777L9.50649 0.758407C8.4935 -0.254239 7.49784 -0.25424 6.4935 0.767057L5.52381 1.72777C5.46321 1.78835 5.4026 1.81432 5.31602 1.81432H3.93939C2.51948 1.81432 1.80952 2.51539 1.80952 3.94347V5.31963C1.80952 5.40619 1.78354 5.46677 1.72294 5.52734L0.753249 6.49672C-0.251083 7.50071 -0.251083 8.50469 0.753249 9.50869L1.72294 10.478C1.78354 10.5386 1.80952 10.5992 1.80952 10.6858V12.0619C1.80952 13.4814 2.52815 14.1911 3.93939 14.1911H5.31602C5.4026 14.1911 5.45455 14.2084 5.52381 14.2776L6.4935 15.247ZM6.9264 11.5859C6.62338 11.5859 6.31168 11.482 6.07793 11.2224L4.09523 8.99803C3.93939 8.82494 3.85282 8.5826 3.85282 8.36622C3.85282 7.78633 4.25974 7.37087 4.83983 7.37087C5.16017 7.37087 5.41125 7.49205 5.60173 7.70842L6.90909 9.17979L9.70563 5.05997C9.92208 4.76571 10.1905 4.62722 10.5368 4.62722C11.1429 4.62722 11.5671 5.0167 11.5671 5.57063C11.5671 5.75238 11.4892 5.99473 11.342 6.19379L7.82685 11.1531C7.5671 11.4907 7.27273 11.5859 6.9264 11.5859Z",fill:"#0B70CA"}))}o.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=o,o.default=o},pyUO:function(e,t,a){e.exports={about:"index-module--about--jXzWA",intro:"index-module--intro--1svyt",subSectionTitle:"index-module--subSectionTitle--37uux",profileImage:"index-module--profileImage--1Cd9z",body:"index-module--body--AmiUw",blogSection:"index-module--blogSection--2Kq68",cardsContainer:"index-module--cardsContainer--Njzax",cardItem:"index-module--cardItem--3Qdx5",imageContainer:"index-module--imageContainer--Prvoh",blogpostImageContainer:"index-module--blogpostImageContainer--1pdxp",image:"index-module--image--LHmLZ",cardContent:"index-module--cardContent--bxX4J",cardContentTitle:"index-module--cardContentTitle--3tPVC",cardContentDate:"index-module--cardContentDate--292vG",cardContentIntro:"index-module--cardContentIntro--1e_vM",appStore:"index-module--appStore--2w3kP",smallTagsContainer:"index-module--smallTagsContainer--1ZUDD",projectsPageCardsContainer:"index-module--projectsPageCardsContainer--22t3S"}},q0rH:function(e,t,a){e.exports={tag:"smallTagBox-module--tag--43eY2"}},xFqC:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=(a("Wbzz"),a("q0rH")),r=a.n(l);t.a=function(e){return o.a.createElement("div",{className:r.a.tag},e.tag)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c68ed0c266e615796de9.js.map