---
title: "SwiftUI List의 윗 방향으로 pagination 추가 시 화면이 자동 스크롤 되는 문제"
date: "2024-07-31"
intro: "SwiftUI List의 최상단 row 위로 pagination 구현하는 방법과, 이때 발생하는 스크롤 점프 문제 해결하기"
# featuredImage: ./swift-square-orange.png
tags: ["SwiftUI"]
path: "swiftui-list-maintain-scroll-position-when-appending-to-top"
publish: true
---

- pagination에는 두 가지가 있다. 
  - 이미 로딩된 데이터보다 아래 방향 데이터를 불러오는 `loadNext()`와 
  - 윗 방향 데이터를 불러오는 `loadPrevious()`가 있다. 
  - 각각을 쉽게 *아래 방향 pagination*, *윗 방향 pagination*이라고 불러보자. 
- 윗 방향 pagination이 사용되는 use case의 예로는 채팅의 메세지 리스트다.
  - 채팅은 가장 최신 메세지부터 보인다 (List의 가장 하단부터 보인다). 사용자가 예전 메세지를 보기 위해 위로 스크롤하면, 이전 데이터를 가져온다 (`loadPrevious()`).
- SwiftUI `List`로 윗 방향 pagination을 구현할때 발생할 수 있는 UI상의 문제와, 이걸 해결하는 방법에 대해 알아본다.

## SwiftUI List로 윗 방향 pagination 구현하기 
### 베이스 코드 
- 윗 방향 pagination 구현하기 전에, 먼저 베이스 코드를 만들자.
- 코드 설명: 
  - `List`로 15 ~ 30번 메세지를 보여주고, (message 30이 가장 최신 메세지다)
  - List의 가장 하단이 먼저 보이도록 했다. (message 30이 먼저 보인다)

```Swift
import SwiftUI

struct ContentView: View {
    @StateObject var viewModel = ViewModel()
    
    var body: some View {
        ScrollViewReader { proxy in
            List(viewModel.dataList, id: \.self) { number in
                Text("Message \(number)")
                    .padding()
                    .id(number)
            }
            .onAppear {
                proxy.scrollTo(viewModel.dataList.last, anchor: .bottom) // show last row first
            }
        }
    }
}

class ViewModel: ObservableObject {
    @Published var dataList = Array(15..<30)  // initially, there are messages 15 - 30
}
```
<br/>

### 윗 방향 pagination 구현 코드
- 베이스 코드를 구현했으니 이제 윗 방향 pagination을 구현해본다. 
- message 15까지 (= 최상단 row까지) 스크롤이 되면, 더 이상 보여줄 메세지가 그 위로 없으므로, 이 시점에 이전 메세지들을 불러와야한다. 
- 따라서 `List`의 row 중 message 15가 있는 row가 보일때 (= 최상단 row가 화면에 나타날때), 예전 메세지를 로딩해와야한다. 

```Swift
import SwiftUI

struct ContentView: View {
    @StateObject var viewModel = ViewModel()
    
    var body: some View {
        ScrollViewReader { proxy in
            List(viewModel.dataList, id: \.self) { number in
                Text("Message \(number)")
                    .padding()
                    .id(number)
                    // 최상단 row에 스크롤이 도달하면 loadPrevious 호출. 
                    .onAppear {
                        if number == viewModel.dataList.first {
                            print("Message \(number) appeared")
                            viewModel.loadPrevious()
                        }
                    }
            }
            .onAppear {
                proxy.scrollTo(viewModel.dataList.last, anchor: .bottom)
            }
        }
    }
}

class ViewModel: ObservableObject {
    @Published var dataList = Array(15..<30)
    var hasPrevious = true
    
    // 이전 메세지들을 로딩해오는 함수. 
    func loadPrevious() {
        if hasPrevious {
            hasPrevious = false
            let newData = Array(0..<15)
            self.dataList = newData + self.dataList
        }
    }
}
```

- 여기까지 구현하고 앱을 실행해서 List를 위로 스크롤해보자. 
- 이전 메세지들은 추가가 되고 있지만, UI상의 문제가 보인다. 
- 추가로 로딩된 메세지들이 순서대로 하나씩 보이지 않고, 중간 메세지들이 갑자기 스킵되고, message 0으로 스크롤이 점프되는 문제가 생긴다. 
<video width="100%" style="border-radius: 19px; overflow: hidden;" controls>
  <source src="./bug.mov" type="video/mp4">
</video>

## 스크롤 점프 문제 해결하기 
- 스크롤 점프 문제를 해결하기 위해서는 이 코드를 추가하면 된다. 
```Swift
// ...
List(...)
    // ...
    .onChange(of: viewModel.dataList) { oldValue, newValue in
        proxy.scrollTo(oldValue.first, anchor: .top)
    }
```

- 스크롤이 message 0으로 점프되는 이유: 
  - message 15가 화면 꼭대기에 나타남 -> `loadPrevious()` 호출 -> `viewModel.dataList`가 업데이트 됨 -> List가 re-render 됨 -> List가 re-render 되면서 List의 최상단 row부터 보여짐
  - 즉, 데이터 업데이트에 의해서 List가 다시 그려지면서 기존에 message 15가 보이던 List의 scroll 위치가 유지되지 않고, List의 최상단 row (= message 0)가 화면에 나타난 것이다. 

- 우리가 원하는 동작은 화면 꼭대기에 보이던 message 15가 계속 화면 꼭대기에서 보이는 것이다. 
- 위 코드는 `viewModel.dataList`가 업데이트 될때, 기존 `viewModel.dataList`의 첫번째 data가 화면의 꼭대기에 위치하도록 List를 스크롤한다. 


## Complete Code 
```Swift
import SwiftUI

struct ContentView: View {
    @StateObject var viewModel = ViewModel()
    
    var body: some View {
        ScrollViewReader { proxy in
            List(viewModel.dataList, id: \.self) { number in
                Text("Message \(number)")
                    .padding()
                    .id(number)
                    // pagination for prepending previous data 
                    .onAppear {
                        if number == viewModel.dataList.first {
                            print("Message \(number) appeared")
                            viewModel.loadPrevious()
                        }
                    }
            }
            .onAppear {
                proxy.scrollTo(viewModel.dataList.last, anchor: .bottom)
            }
            // prevent being scrolled to top row upon loading previous data 
            .onChange(of: viewModel.dataList) { oldValue, newValue in
                proxy.scrollTo(oldValue.first, anchor: .top)
            }
            
        }
    }
}

class ViewModel: ObservableObject {
    @Published var dataList = Array(15..<30)
    var hasPrevious = true
    
    func loadPrevious() {
        if hasPrevious {
            hasPrevious = false
            let newData = Array(0..<15)
            self.dataList = newData + self.dataList
        }
    }
}
```

<video width="100%" style="border-radius: 19px; overflow: hidden;" controls>
  <source src="./final.mov" type="video/mp4">
</video>