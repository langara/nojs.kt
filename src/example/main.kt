package example

import kotlin.browser.document

import pl.mareklangiewicz.nojs.*

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

    div {
        add(+"fjdkls")
        add(div {
            add(+"costam")
            add(+"costamjeszcze")
        })
        add(div {
            add(+"costam")
            add(+"costamjeszcze")
        })
        add_div {
            add_div {
                +"nowe1"
                add_br()
                add_text("nowe2")
            }
            add_div {
                add_text("nowe21")
                add_br()
                add_text("nowe22")
            }
        }
    }.attachToDOM(jquery("#div666")[0])
}
