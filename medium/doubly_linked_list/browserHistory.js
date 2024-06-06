// 🚀 Doubly Linked List structure 🚀
class ListNode {
    constructor(url) {
        this.url = url
        this.next = null
        this.prev = null
    }
}

var BrowserHistory = function (homepage) {
    // pointer for the current url
    this.curr = new ListNode(homepage)
};

BrowserHistory.prototype.visit = function (url) {
    const newUrl = new ListNode(url)
    newUrl.prev = this.curr
    this.curr.next = null // clear forward history 
    this.curr.next = newUrl
    this.curr = newUrl
};

BrowserHistory.prototype.back = function (steps) {
    // check if pointer reached the beginning of the list && if steps is done
    while (steps > 0 && this.curr.prev !== null) {
        this.curr = this.curr.prev
        steps--
    }
    return this.curr.url
};

BrowserHistory.prototype.forward = function (steps) {
    while (steps > 0 && this.curr.next !== null) {
        this.curr = this.curr.next
        steps--
    }
    return this.curr.url
};