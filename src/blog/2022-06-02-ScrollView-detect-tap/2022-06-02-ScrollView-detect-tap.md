---
title: "Detect Tap and Its Position on UIScrollView"
date: "2022-06-20"
intro: "How do we detect a tap on a content inside a UIScrollView? How do we find out the tap's position?"
featuredImage: ./swift-square-orange.png
tags: ["UIKit",]
path: "tap-on-uiscrollview"
publish: false
---

* A `tap` is not the same as a `scroll`.
* Detecting a `tap` on `UIScrollView` is not natively supported through UIScrollView delegate, although detecting a `scroll` is supported.
* It gets trickier when the tap is touched on a content that exceeds the UIScrollView's frame coordinates.
* In this post, we use 
* In this post, we use a custom UITapGestureRecognizer & ContentView to solve this. 

### The Approach.
* Use UITapGestureRecognizer to detect a tap.
* Use ContentView to get the coodinate of the tap on the UIScrollView's content space coordinate. 

### Attaching UITapGestureRecognizer to UIScrollView.
```swift
let scrollViewTap = UITapGestureRecognizer(target:self, action: #selector(scrollViewTapped))
self.scrollView.addGestureRecognizer(scrollViewTap)


```








self.scrollViewTap = UITapGestureRecognizer(target: self, action: #selector(scrollViewTapped))
//        scrollView.content
        self.scrollView.addGestureRecognizer(scrollViewTap)







* A `tap` is not the same as a `scroll`. 
* Detecting a `tap` on `UIScrollView` is not natively supported through UIScrollView delegate, although detecting a `scroll` is supported.
* It gets trickier when the tap is touched on a content that exceeds the UIScrollView's frame coordinates. 


### Using a custom UITapGestureRecognizer & ContentView
* We use UITapGestureRecognizer to detect a tap on our UIScrollView.
* We use a ContentView that is UIView type to keep track of the tap's position in UIScrollView's content area. 



























### Definition
---
```swift
func sorted(by areInIncreasingOrder: (Element, Element) throws -> Bool) 
			rethrows -> [Element]
```

**`areInIncreasingOrder` :** A predicate that returns `true` if its first argument should be ordered before its second argument; otherwise, `false`.

### 해석
---
- [ lhs ] > [ rhs ]
    - lhs가 rhs보다 큼이 true 일 때 first item을 second item보다 앞에 두자.
    - 따라서 `$0 > $1`  로 정의하면 *$0이 $1보다 크면 $0를 앞에 두자* 이므로 descending order sorting 이 됨.
- [ lhs ] < [ rhs ]
    - lhs가 rhs보다 작음이 true 일 때 first item을 second item보다 앞에 두자.
    - 따라서 $0 < $1  로 정의하면 ascending order sorting 이 됨.
- Example:
    - first string ($0)을 second string ($1) 앞에 두었을 때의 값이 ($0 + $1)
    - second string ($1)을 first string ($0) 앞에 두었을 때의 값보다 ($1 + $0)
    - 크면 $0를 $1보다 앞에 두자.

    ```swift
    someStringArray.sorted { $0 + $1 > $1 + $0 }
    ```

<!-- ![Hopper The Rabbit](./flowi_big.png) -->