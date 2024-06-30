---
title: "SwiftUI List의 윗 방향으로 pagination 추가 시 화면이 자동 스크롤 되는 문제"
date: "2024-06-30"
intro: "SwiftUi List의 top row에 pagination 구현하는 방법과, 이때 발생하는 자동 스크롤 문제를 해결하는 방법"
# featuredImage: ./swift-square-orange.png
tags: ["SwiftUI"]
path: "swiftui-list-maintain-scroll-position-when-appending-to-top"
publish: true
---

- SwiftUI List의 아래 방향으로 `loadNext()` 등을 호출해서 pagination 추가는 쉽게 구현된다.
- 그런데 List의 윗 방향으로 `loadPrevious()` 등을 호출해서 이전 데이터 페이징을 실행하면 List가 위쪽으로 자동 스크롤 되는 문제가 발생한다. 

## 