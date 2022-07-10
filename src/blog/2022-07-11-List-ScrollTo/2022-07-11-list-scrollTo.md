---
title: "Scrolling List With ScrollViewReader"
date: "2022-07-11"
intro: "This post explains how to programmatically scroll SwiftUI's List to a certain row."
featuredImage: ./swift-square-orange.png
tags: ["SwiftUI",]
path: "list-scrollTo"
publish: true
---
Sometimes, we want our `List` to scroll to a certain row upon a button tap, or on View's `onAppear`.
This post explains how to scroll SwiftUI's `List` to a certain row programmatically.
In particular, this post programmatically scrolls a List whose data is populated using a `ForEach`.


### Setting Up Our `List`
* First we set up our View and its ViewModel. 
* The View has a `List` whose rows are populated using `ForEach` with data provided from its ViewModel. 


```Swift
import SwiftUI

struct ContentView: View {
  @StateObject private var contentViewModel = ContentViewModel()
  
  var body: some View {
        List {
          ForEach(contentViewModel.numbers, id: \.self) { number in
            Text("Number \(number)")
          }
        }
      .onAppear() {
        contentViewModel.numbers = Array(0..<100)
      }
    }
}

class ContentViewModel: ObservableObject {
  @Published var numbers = [Int]()
}
```


### Scrolling To 60th Row On View Appear
* Use `ScrollViewReader`. This gives us `scrollTo()` of a proxy that lets us programmatically scroll a `ScrollView`. 
* Because we want the View to scroll on its appearnace, it might be tempting to add `scrollTo()` inside the `.onAppear()` of `VStack`.
* However, because the List's `ForEach` has not been rendered at the time of `VStack {} .onAppear()`, adding `scrollTo()` in `VStack`'s `onAppear()` is meaningless.
* Instead, we need to add `scrollTo()` inside .`onAppear()` of `ForEach{}`.

```Swift 
import SwiftUI

struct ContentView: View {
  @StateObject private var contentViewModel = ContentViewModel()
  
  var body: some View {
    ScrollViewReader { proxy in
      VStack {
        List {
          ForEach(contentViewModel.numbers, id: \.self) { number in
            Text("Number \(number)")
              .id(number)
          }
          .onAppear() {
            proxy.scrollTo(60)
          }
        }
      }
      .onAppear() {
        contentViewModel.numbers = Array(0..<100)
      }
    }
  }
}

class ContentViewModel: ObservableObject {
  @Published var numbers = [Int]()
}

```


### Scrolling To 30th Row On Button Tap
* Similar to the above example, we can add `scrollTo()` inside `Button`'s action closure.

```Swift
import SwiftUI

struct ContentView: View {
  @StateObject private var contentViewModel = ContentViewModel()
  
  var body: some View {
    ScrollViewReader { proxy in
      VStack {
        Button("Jump to 30") {
          proxy.scrollTo(30)
        }
        
        List {
          ForEach(contentViewModel.numbers, id: \.self) { number in
            Text("Number \(number)")
              .id(number)
          }
          .onAppear() {
            proxy.scrollTo(60)
          }
        }
      }
      .onAppear() {
        contentViewModel.numbers = Array(0..<100)
      }
    }
  }
}

class ContentViewModel: ObservableObject {
  @Published var numbers = [Int]()
}
```