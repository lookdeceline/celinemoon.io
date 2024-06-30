---
title: "SwiftUI List의 visible rows 실시간 트래킹하기"
date: "2024-06-29"
intro: "현재 화면에 노출된 List의 row를 알아내는 방법"
# featuredImage: ./swift-square-orange.png
tags: ["SwiftUI"]
path: "swiftui-list-visible-rows"
publish: true
---

## 기본 코드 셋업
- 우선 아래와 같이 0부터 29까지 숫자가 적힌 List가 있다. 
- 스크롤을 하면 매번 현재 스크린에 보이는 숫자가 바뀐다. 

```Swift
struct Item {
    var id = UUID()
    var value: Int
}

struct ContentView: View {
    var items = Array(0..<30).map { Item(value: $0) }

    var body: some View {
            List(items, id: \.id) { item in
                HStack {
                    Text("\(item.value)")
                        .foregroundStyle(.white)
                        .padding(32)
                    Spacer()
                }
                .background(Color.indigo)
            }
    }
}
```

- 스크롤 하면서 보이는 row의 숫자들을 나타낼 `HStack`을 화면 하단에 추가한다.
- 보이는 숫자들을 담고 있을 변수 `visibleItems`도 추가한다. 

```Swift
struct ContentView: View {
    // ...
    @State var visibleItems = [Item]()

   var body: some View {
    
        // ...

        HStack {
            Spacer()
            VStack(spacing: 6) {
                Text("Visible Items")
                    .padding(.top, 25)
                Text(visibleItems.map { String($0.value)}.joined(separator: " / "))
                    .foregroundStyle(.red)
                Spacer().frame(height: 1)
            }
            .padding()
            Spacer()
        }
            .background(Color.indigo.opacity(0.2))
   }
}
```

## 현재 보이는 row 알아내기 
- 핵심 원리는 각 row View가 스크린에 노출될때는 그 View의 `onAppear()`, `onDisappear()`이 호출된다는 점이다. 
- 각 row의 View에 `onAppear()`에서는 visibleItems에 해당 item을 추가,
- 각 row의 View에 `onDisappear()`에서는 visibleItems에 해당 item을 제거한다. 
- 이제 화면을 스크롤하면 매번 보이는 row에 대한 정보가 업데이트된다. 

```Swift
struct ContentView: View {

    // ...

    var body: some View {
            List(items, id: \.id) { item in
                HStack {
                    Text("\(item.value)")
                        .foregroundStyle(.white)
                        .padding(32)
                        .onAppear { self.visibleItems.append(item) }  // <- onAppear()
                        .onDisappear { self.visibleItems.removeAll { $0.id == item.id } }  // <- onDisappear()
                    Spacer()
                }
                .background(Color.indigo)
            }

            // ....
    }
}
```

<video width="100%" style="border-radius: 19px; overflow: hidden;" controls>
  <source src="./visibleRows.mov" type="video/mp4">
</video>


## Full Code
```Swift
import SwiftUI

struct Item {
    var id = UUID()
    var value: Int
}

struct ContentView: View {
    var items = Array(0..<30).map { Item(value: $0) }
    @State var visibleItems = [Item]()

    var body: some View {
            List(items, id: \.id) { item in
                HStack {
                    Text("\(item.value)")
                        .foregroundStyle(.white)
                        .padding(32)
                        .onAppear { self.visibleItems.append(item) }
                        .onDisappear { self.visibleItems.removeAll { $0.id == item.id } }
                    Spacer()
                }
                .background(Color.indigo)
            }
            
            HStack {
                Spacer()
                VStack(spacing: 6) {
                    Text("Visible Items")
                        .padding(.top, 25)
                    Text(visibleItems.map { String($0.value)}.joined(separator: " / "))
                        .foregroundStyle(.red)
                    Spacer().frame(height: 1)
                }
                .padding()
                Spacer()
            }
                .background(Color.indigo.opacity(0.2))
    }
}
```