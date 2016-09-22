package example

import kotlin.browser.document

@native("$") val jquery : dynamic = noImpl
@native val noh : dynamic = noImpl

fun main(args: Array<String>) {
    val el = document.createElement("div")
    el.appendChild(document.createTextNode("Hello!"))
    document.body!!.appendChild(el)

    val counterDiv = document.createElement("div")
    val counterText = document.createTextNode("Counter!")
    counterDiv.appendChild(counterText)
    document.body!!.appendChild(counterDiv)

    val counter = Counter(counterText)
    counter.start()
    jquery("#idbla").on("click") {
        js("console.log('fjdskl');")
    }
}
