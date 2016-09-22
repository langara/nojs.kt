package pl.mareklangiewicz.nojs

import kotlin.browser.window

fun alert(msg: Any?) { window.alert(msg.toString()) }

@native("$") val jquery : dynamic = noImpl

@native val noh : dynamic = noImpl


@native("Node") class DOMNode

@native("noh.Node") open class Node() {
    fun add(t: Node): Node
    fun rem(): Node
    fun attachToDOM(root: DOMNode): Node
    fun detachFromDOM(root: DOMNode): Node
    operator fun Node.unaryPlus(): Node
    operator fun String.unaryPlus(): Node
}



@native("noh.Text") class Text(text: String) : Node()

@native("noh.Element") class Element(tag: String) : Node() {
    fun attr(name: String, value: String): Element
    fun css(name: String, value: String): Element
    fun on(events: String, handler: (event: dynamic) -> Unit): Element
    fun addclass(aclass: String): Element
    fun hasclass(aclass: String): Boolean
    fun toggleclass(aclass: String): Element
    fun remclass(aclass: String): Element
    fun scroll(duration: Int?): Element
}


fun text(text: String) = Text(text)

fun body(init: Element.() -> Unit) = Element("body").apply(init)
fun div(init: Element.() -> Unit) = Element("div").apply(init)
fun br() = Element("br")
fun link(init: Element.() -> Unit) = Element("link").apply(init)
fun p(init: Element.() -> Unit) = Element("p").apply(init)
fun span(init: Element.() -> Unit) = Element("span").apply(init)
fun a(init: Element.() -> Unit) = Element("a").apply(init)
fun a(href: String, init: Element.() -> Unit) = Element("a").attr("href", href).apply(init)
fun img(init: Element.() -> Unit) = Element("img").apply(init)
fun img(src: String, init: Element.() -> Unit) = Element("img").attr("src", src).apply(init)
fun hr() = Element("hr")
fun table(init: Element.() -> Unit) = Element("table").apply(init)
fun tr(init: Element.() -> Unit) = Element("tr").apply(init)
fun th(init: Element.() -> Unit) = Element("th").apply(init)
fun td(init: Element.() -> Unit) = Element("td").apply(init)
fun ul(init: Element.() -> Unit) = Element("ul").apply(init)
fun ol(init: Element.() -> Unit) = Element("ol").apply(init)
fun li(init: Element.() -> Unit) = Element("li").apply(init)

