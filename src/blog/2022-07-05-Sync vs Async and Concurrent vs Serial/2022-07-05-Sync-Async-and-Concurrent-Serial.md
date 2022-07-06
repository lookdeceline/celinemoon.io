---
title: "DispatchQueue: Synchronous vs Asynchronous / Serial vs Concurrent"
date: "2022-07-05"
intro: "This post defines `Asnychronous vs Synchronous` and `Concurrent vs Serial`, and walks through four different combinations of the two concepts."
featuredImage: ./swift-square-orange.png
tags: ["Programming", "Swift",]
path: "sync-async-serial-concurrent"
publish: true
---

Asnychronous vs Synchronous and Concurrent vs Serial are two separate concepts.
However, it is often confused as similar concepts.

This post defines `Asnychronous vs Synchronous` and `Concurrent vs Serial`, and walks through four different combinations of the two concepts. 

### But First, What Is `DispatchQueue`
* `DispatchQueue` is an object that manages the execution of tasks serially or concurrently on your app's main thread or on a background thread. (according to [Apple](https://developer.apple.com/documentation/dispatch/dispatchqueue))
* Each task is executed in order it is added to a queue.


### Serial vs Concurrent 
* Serial vs Concurrent is about when the dispatched task can run. 

* In a **Serial Dispatch Queue**, a block can assume that it's the only block running on that queue. 
    * A serial dispath queue performs one task at a time. 

* In a **Concurrent Dispatch Queue**, a block can't assume that it's the only block running on that queue. 
    * A concurrent dispatch queue performs multiple tasks at a time. 
    * A task is started in the order it is added to the queue, but its finishing time may not be in the added order. (since they are executed *concurrently*)


### Synchronous vs Asynchronous
* Sync vs Async is about when the caller (of a task) can continue. 

* The caller of `DispatchQueue.sync` will wait for its task block to complete. It can't move onto the next line until the task to finish. 

* The caller of `DispatchQueue.async` will not wait for its task block to complete. 


### Four Cases
Let's assume we are currently on the main thread. 
This means we are calling `DispatchQueue` to run a task from the main thread.

```swift
// currently on main thread. 

// calling async or sync.
DispatchQueue.sync {
    ...  // run some task
}

DispatchQueue.async {
    ...  // run some task
}
```

* **async - concurrent**
    * Async: The task code runs on a different queue. Control returns immediately to the current queue of main thread. 
    * Concurrent: The task block may or may not be the only task running on that queue.


* **asnyc - serial**
    * Async: The code runs on a different queue. Control returns immediately to the current queue of main thread. 
    * Serial: The block is the only block running on that queue. 


* **sync - concurrent**
    * Sync: The code runs on a different queue, but the main thread waits for it to finish, blocking any updates to the UI. (UI may be unresponsive to user's inputs.)
    * Concurrent: The task block may or may not be the only task running on that queue.


* **sync - serial**
    * Sync: The code runs on a differnet queue, but the main thread waits for it to finish, blocking any updates to the UI. (UI may be unresponsive to user's inputs.)
    * Serial: The block is the only block running on that queue. 


### What About `DispatchQueue.main.async` ?
* This is dispatching asyncronously to the main thread itself. 
* While working on current task, the main thread has scheduled another task block to be executed, but current task is not blocked by scheduling a new task.

