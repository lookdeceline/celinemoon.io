(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"57CW":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),r=a("Tgzh"),i=a.n(r);t.a=function(e){var t=e.tag,a=e.isSelected;console.log("^^ tagTile: ",t,"isSelected: ",a);var n=a?"#0061f2":null,r=a?"600":null;return o.a.createElement(l.Link,{to:"/tags/"+t.fieldValue,className:i.a.pillbox,style:{color:n,fontWeight:r}},t.fieldValue)}},J0nY:function(e,t,a){e.exports={containerContainer:"pagesTitle-module--containerContainer--2OUVa",container:"pagesTitle-module--container--3MuUx",h1:"pagesTitle-module--h1--uyrh-",h2:"pagesTitle-module--h2--3C5Ry"}},MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a("q1tI"),o=a.n(n),l=(a("Wbzz"),a("9eSz"),a("Bl7J"),a("LbRr")),r=a("W/9C"),i=a("vrFN"),d=a("evcH"),c=a("YxQw"),m=(a("57CW"),a("bf0c")),s=a("pyUO"),u=a.n(s);function C(e){var t=e.pageContext,a=e.data,n=t.tag,s=a.allMarkdownRemark,C=s.edges,g=s.totalCount;return console.log("### tag: ",n),console.log("### edges: ",C),console.log("### totalCount: ",g),o.a.createElement("div",null,o.a.createElement(l.a,null),o.a.createElement(i.a,{title:"Tags"}),o.a.createElement(d.a,{title:"Dev Blog",titleIntro:"I mostly write about iOS development."}),o.a.createElement(m.a,{selectedTag:n}),o.a.createElement("div",{className:u.a.postsSectionBackground},o.a.createElement("div",{className:u.a.pageContainer},C.map((function(e){var t=e.node;return o.a.createElement(c.a,{node:t})})))),o.a.createElement(r.a,null))}},NqGc:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M47.9746 42.7461C47.9746 42.1276 47.8525 41.5498 47.6084 41.0127C47.3643 40.4756 47.0143 39.9791 46.5586 39.5234L7.8867 1.63278C7.00777 0.786449 5.93354 0.363281 4.664 0.363281C3.8502 0.363281 3.1015 0.558588 2.4179 0.949188C1.7343 1.33985 1.1972 1.86882 0.806602 2.53609C0.416002 3.20342 0.220703 3.96025 0.220703 4.80659C0.220703 6.01105 0.643869 7.06902 1.4902 7.98048L37.0371 42.7461L1.4902 77.5117C0.643869 78.4232 0.220703 79.4811 0.220703 80.6855C0.220703 81.5319 0.416002 82.2887 0.806602 82.956C1.1972 83.6234 1.7343 84.1523 2.4179 84.543C3.1015 84.9336 3.8502 85.1289 4.664 85.1289C5.93354 85.1289 7.00777 84.6894 7.8867 83.8105L46.5586 45.9688C47.0143 45.5131 47.3643 45.0166 47.6084 44.4795C47.8525 43.9424 47.9746 43.3646 47.9746 42.7461Z"}))}o.defaultProps={width:"48",height:"86",viewBox:"0 0 48 86",fill:"none"},e.exports=o,o.default=o},Tgzh:function(e,t,a){e.exports={tile:"tagTile-module--tile--3SXpx",pillbox:"tagTile-module--pillbox--2AWKf"}},XDVu:function(e,t,a){e.exports={cardsContainer:"smallThumbnailPost-module--cardsContainer--1DWVB",cardItem:"smallThumbnailPost-module--cardItem--3Qnxe",chevron:"smallThumbnailPost-module--chevron--aI0zV",blogpostImageContainer:"smallThumbnailPost-module--blogpostImageContainer--3j454",image:"smallThumbnailPost-module--image--3nxsg",cardWrapper:"smallThumbnailPost-module--cardWrapper--2sE9j",cardContent:"smallThumbnailPost-module--cardContent--3wsQ6",cardHeader:"smallThumbnailPost-module--cardHeader--2mW49",cardContentDate:"smallThumbnailPost-module--cardContentDate--2X_qY",cardContentTitle:"smallThumbnailPost-module--cardContentTitle--3aK7T",cardContentIntro:"smallThumbnailPost-module--cardContentIntro--YZ4Tn",tagsAndArrow:"smallThumbnailPost-module--tagsAndArrow--1ga7z",chevronDiv:"smallThumbnailPost-module--chevronDiv--21Y1N",appStore:"smallThumbnailPost-module--appStore--1u4nE",smallTagsContainer:"smallThumbnailPost-module--smallTagsContainer--3Q0N2"}},YxQw:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),r=(a("9eSz"),a("xFqC")),i=a("XDVu"),d=a.n(i),c=(a("dbgZ"),a("eK0S")),m=a.n(c);a("NqGc");t.a=function(e){var t=e.node;return o.a.createElement(l.Link,{to:"/blog/"+t.frontmatter.path,key:t.id,className:d.a.cardItem},o.a.createElement("div",{className:d.a.cardWrapper},o.a.createElement("div",{className:d.a.cardContent},o.a.createElement("div",{className:d.a.cardContentTitle},t.frontmatter.title),o.a.createElement("div",{className:d.a.cardContentIntro},t.frontmatter.intro),o.a.createElement("div",{className:d.a.smallTagsContainer},t.frontmatter.tags?t.frontmatter.tags.map((function(e,t){return o.a.createElement(r.a,{tag:e})})):null)),o.a.createElement("div",{className:d.a.chevronDiv},o.a.createElement(m.a,{className:d.a.chevron}))))}},bf0c:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),o=a.n(n),l=a("Wbzz"),r=a("57CW"),i=a("pyUO"),d=a.n(i);function c(e){var t=e.selectedTag,a=Object(l.useStaticQuery)("168701078");console.log("$$ data: ",a);var n=a.allMarkdownRemark.group;return console.log("$$ selectedTag: ",t),o.a.createElement("div",null,o.a.createElement("div",{className:d.a.pillboxContainer},n.map((function(e){return o.a.createElement(r.a,{tag:e,isSelected:e.fieldValue===t})}))))}},dbgZ:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M58.1972 51.7442C58.1972 51.1583 58.0996 50.6456 57.9043 50.2061C57.709 49.7666 57.3997 49.3516 56.9765 48.961L6.43943 1.50008C5.72329 0.783884 4.84439 0.425781 3.80272 0.425781C3.11912 0.425781 2.50063 0.58042 1.94723 0.889687C1.39389 1.19895 0.954459 1.63025 0.628925 2.18359C0.303392 2.73699 0.140625 3.35549 0.140625 4.03909C0.140625 5.01569 0.482425 5.86205 1.16603 6.57819L49.2617 51.7442L1.16603 96.8614C0.482425 97.5775 0.140625 98.4238 0.140625 99.4004C0.140625 100.117 0.303392 100.751 0.628925 101.305C0.954459 101.858 1.39389 102.289 1.94723 102.599C2.50063 102.908 3.11912 103.063 3.80272 103.063C4.84439 103.063 5.72329 102.704 6.43943 101.988L56.9765 54.5274C57.3997 54.1368 57.709 53.7136 57.9043 53.2579C58.0996 52.8022 58.1972 52.2976 58.1972 51.7442Z"}))}o.defaultProps={width:"59",height:"104",viewBox:"0 0 59 104",fill:"none"},e.exports=o,o.default=o},eK0S:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("path",{d:"M33 1L43 11M43 11L33 21M43 11H0",strokeWidth:"2"}))}o.defaultProps={width:"45",height:"22",viewBox:"0 0 45 22"},e.exports=o,o.default=o},evcH:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=(a("Wbzz"),a("9eSz"),a("J0nY")),r=a.n(l);t.a=function(e){return o.a.createElement("div",{className:r.a.containerContainer},o.a.createElement("div",{className:r.a.container},o.a.createElement("h1",{className:r.a.h1},e.title),o.a.createElement("h2",{className:r.a.h2},e.titleIntro)))}},pyUO:function(e,t,a){e.exports={abountContainerContainer:"index-module--abountContainerContainer--MEmbC",aboutContainer:"index-module--aboutContainer--3VZZ2",aboutTextContainer:"index-module--aboutTextContainer--1E1lL",intro:"index-module--intro--1svyt",introLinks:"index-module--introLinks--3jWno",pageLink:"index-module--pageLink--3rYFP",cvLink:"index-module--cvLink--1q-Wh",subSectionTitle:"index-module--subSectionTitle--37uux",profileImage:"index-module--profileImage--1Cd9z",body:"index-module--body--AmiUw",blogSection:"index-module--blogSection--2Kq68",cardsContainer:"index-module--cardsContainer--Njzax",cardItem:"index-module--cardItem--3Qdx5",cardContentTitle:"index-module--cardContentTitle--3tPVC",image:"index-module--image--LHmLZ",imageContainer:"index-module--imageContainer--Prvoh",cardContent:"index-module--cardContent--bxX4J",cardContentDate:"index-module--cardContentDate--292vG",cardContentIntro:"index-module--cardContentIntro--1e_vM",appStore:"index-module--appStore--2w3kP",smallTagsContainer:"index-module--smallTagsContainer--1ZUDD",projectsPageCardsContainer:"index-module--projectsPageCardsContainer--22t3S",background:"index-module--background--6CJ6G",tagTilesSection:"index-module--tagTilesSection--2Tktp",tagTilesContainer:"index-module--tagTilesContainer--K8bIY",pillboxContainer:"index-module--pillboxContainer--1i8r1",pageContainer:"index-module--pageContainer--3H4Su"}},q0rH:function(e,t,a){e.exports={tag:"smallTagBox-module--tag--43eY2"}},xFqC:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=(a("Wbzz"),a("q0rH")),r=a.n(l);t.a=function(e){return o.a.createElement("div",{className:r.a.tag},e.tag)}}}]);
//# sourceMappingURL=component---src-templates-tags-js-3fffc44fa3a0666e49bd.js.map