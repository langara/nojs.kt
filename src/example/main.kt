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
        add(text("fjdkls"))
        add(div {
            add(text("costam"))
            add(text("costamjeszcze"))
        })
        add(div {
            add(text("costam"))
            add(text("costamjeszcze"))
        })

        adiv {
            adiv {
                atext("nowe1")
                abr()
                atext("nowe2")
            }
            adiv {
                atext("nowe21")
                abr()
                atext("nowe22")
            }
        }
    }.attachToDOM(jquery("#div666")[0])
}
