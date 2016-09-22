package example

import org.w3c.dom.Text
import kotlin.browser.*
import kotlin.dom.on

class Counter(val el: Text) {

    fun step(n: Int) {
        println(n)
        document.title = "Counter: ${n}"
        el.textContent = n.toString()
        window.setTimeout({step(n+1)}, 1000)
    }

    fun start() {
        step(0)
    }
}

