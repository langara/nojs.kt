package example

import org.w3c.dom.Text
import kotlin.browser.*
import kotlin.dom.on

class Counter(val el: Text) {

    var started = false

    fun step(n: Int) {
        println(n)
        document.title = "Counter: ${n}"
        el.textContent = n.toString()
        if (started)
            window.setTimeout({ step(n + 1) }, 1000)
    }

    fun start() {
        started = true
        step(0)
    }

    fun stop() {
        started = false
    }
}

