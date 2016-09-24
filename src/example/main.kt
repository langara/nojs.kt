package example

import kotlin.browser.document

import pl.mareklangiewicz.nojs.*

fun main(args: Array<String>) {


    // old basic stuff: just plain javascript:

    val el = document.createElement("h2")
    el.setAttribute("id", "hello")
    el.appendChild(document.createTextNode("Hello!"))
    document.body!!.appendChild(el)


    // using simple kotlin class Counter:

    val counterDiv = document.createElement("h3")
    val counterText = document.createTextNode("Counter!")
    counterDiv.appendChild(counterText)
    document.body!!.appendChild(counterDiv)
    val counter = Counter(counterText)
    counter.start()


    // trying jquery (click on hello)
    jquery("#hello").on("click") {
        js("console.log('hello clicked');")
        alert("hello clicked")
    }


    // And now.. awesome stuff: our new DSL:

    val tree = div {
        +div {
            +"counter controls "
            +button {
                +"start"
                on("click") {
                    counter.start()
                }
            }
            +button {
                +"stop"
                on("click") {
                    counter.stop()
                }
            }
        }
        +h3("class" to "fancy") { +"Minimalist DSL in Kotlin for NOH library" }
        +div("style" to "margin: 10px;") {
            +"Hi there"
        }
        +div {
            +"what else.. "
            +br()
            +i { +"some italic sentence.. " }
            +br()
            +strong { +"and some strong sentence! " }
        }

        +p { +"some paragraph" }

        +p { +"some other paragraph" }

        +"click on table"
        +table {
            on("click") {
                println(it)
                alert("click on table - event: $it")
            }
            css("border", "solid")
            +tr {
                +th { +"head1" }
                +th { +"head2" }
                +th { +"head3" }
            }
            +tr {
                +td { +"row1col1" }
                +td {
                    css("border", "double")
                    +"row1col2"
                }
                +td { +"row1col3" }
            }
            +tr {
                +td {
                    css("border", "solid")
                    +"row2col1"
                }
                +td { +"row2col2" }
                +td { +"row2col3" }
            }
        }
        +h4("class" to "fancy") { +"some math computations" }
        +p {
            +table("style" to "border: double") {
                +tr {
                    +th { +"x" }.css("border", "solid 1px")
                    +th { +"sin(x)" }.css("border", "solid 1px")
                    +th { +"cos(x)" }.css("border", "solid 1px")
                    +th { +"x*x" }.css("border", "solid 1px")
                }
                (1..20).map { it / 10.0 }.forEach {
                    +tr {
                        +td { +it.toString() }
                        +td { +Math.sin(it).toString() }
                        +td { +Math.cos(it).toString() }
                        +td { +(it * it).toString() }
                    }
                }
            }

        }
        +p {
            +img("http://mareklangiewicz.pl/face_slajd2.png") {}
        }
        +p {
            +a("http://mareklangiewicz.pl") { +"Marek Langiewicz" }
        }
        +p {
            +a("mailto:marek.langiewicz@gmail.com") { +"email: marek.langiewicz@gmail.com" }
        }
        +div("style" to "border: solid 1px; margin: 15px; padding: 15px;") {
            +h3 { +"Simple kotlin views" }
            +generateSimpleKotlinViews()

        }
    }
    tree.attachToDOM(document.body!!)
}


fun test(name: String, content: NohNode, vararg actions: Pair<String, () -> Unit>): NohElement
        = div("style" to "border: double; margin: 5px; padding: 5px;") {
    +h4 { +name }
    +div("style" to "border: solid 1px; margin: 10px; padding: 10px;") {
        +content
    }
    +div {
        for (action in actions)
            +button {
                +action.first
                on("click") { action.second() }
            }
    }
}

fun generateSimpleKotlinViews(): NohElement {

    val root = div {

        val tvDiv = div { +"initial value" }
        val jstv = JSTextView(tvDiv)
        +test("JSTextView test", tvDiv,
                "println(jstv.text)" to { println(jstv.text) },
                "jstv.text = \"bla1\"" to { jstv.text = "bla1" },
                "jstv.text = \"XXXX\"" to { jstv.text = "XXXX" },
                "jstv.text = \"YYYY\"" to { jstv.text = "YYYY" }
        )

        val ivImg = img("http://placehold.it/350x150") {}
        val jsiv = JSImageView(ivImg)
        +test("JSImageView test", ivImg,
                "println(jsiv.imageUrl)" to { println(jsiv.imageUrl) },
                "jsiv.imageUrl = \"http://placehold.it/350x150\"" to { jsiv.imageUrl = "http://placehold.it/350x150" },
                "jsiv.imageUrl = \"http://placehold.it/250x250\"" to { jsiv.imageUrl = "http://placehold.it/250x250" },
                "jsiv.imageUrl = \"http://placehold.it/150x350\"" to { jsiv.imageUrl = "http://placehold.it/150x350" }
        )
        val udDiv = div {}
        val jsud = JSUserDetailsView(udDiv)
        jsud.loginView.text = "langara"
        jsud.pictureView.imageUrl = "http://mareklangiewicz.pl/face_slajd2.png"
        jsud.nameView.text = "Marek Langiewicz"
        jsud.locationView.text = "Warszawa"
        jsud.emailView.text = "marek.langiewicz@gmail.com"

        +test("JSUserDetailView test", udDiv,
                "jsud.pictureView.imageUrl = \"http://placehold.it/350x150\"" to { jsud.pictureView.imageUrl = "http://placehold.it/350x150" }
        )



        val udDiv2 = div {}
        val jsud2 = JSUserDetailsView(udDiv2)
        jsud2.loginView.text = "langara"
        jsud2.pictureView.imageUrl = "http://mareklangiewicz.pl/face_slajd2.png"
        jsud2.nameView.text = "Marek Langiewicz"
        jsud2.locationView.text = "Warszawa"
        jsud2.emailView.text = "marek.langiewicz@gmail.com"


        val ovly = noh.overlay().add(udDiv2.addclass("smooth").addclass("pretty")).addclass("right bottom").addclass("smooth").addclass("pretty")

        +test("Overlay test", ovly,
                "show" to { ovly.show() },
                "hide" to { ovly.hide() }
        ).addclass("smooth")

    }
    return root
}
