package example

import kotlin.browser.document

import pl.mareklangiewicz.nojs.*

fun main(args: Array<String>) {

    // old basic stuff: just plain javascript:
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
        alert("fdjksl")
    }

    div {
        + "fjdkls"
        + div {
            + "costam"
            + "costamjeszcze"
        }
        + div {
            + "costam"
            + "costamjeszcze"
        }

        + div {
            + div {
                + "nowe1"
                + br()
                + "nowe2"
            }
            + div {
                + "nowe21"
                + br()
                + "nowe22"
            }
            + p { + "some paragraph" }
            + p { + "some other paragraph" }
        }

        + "click on table"
        + table {
            css("border", "solid")
            + th {
                + td { + "head1" }
                + td { + "head2" }
                + td { + "head3" }
            }
            + tr {
                + td { + "row1col1" }
                + td { + "row1col2" }
                + td { + "row1col3" }
            }
            + tr {
                + td { + "row2col1" }
                + td { + "row2col2" }
                + td { + "row2col3" }
            }
            on("click") {
                alert("click on table - event: $it")
                println(it)
            }
        }
        + p {
            + img("http://mareklangiewicz.pl/face_slajd2.png") {}
        }
        + p {
            + a("http://mareklangiewicz.pl") { + "Marek Langiewicz" }
        }
        + p {
            + a("mailto:marek.langiewicz@gmail.com") { + "email: marek.langiewicz@gmail.com" }
        }
    }.attachToDOM(jquery("#div666")[0])
}
