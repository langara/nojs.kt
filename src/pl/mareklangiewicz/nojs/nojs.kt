/**
 * Kotlin wrapper for noh.js
 */

package pl.mareklangiewicz.nojs

import org.w3c.dom.Node
import kotlin.browser.window

fun alert(msg: Any?) { window.alert(msg.toString()) }

@native("$") val jquery : dynamic = noImpl

@native val noh : dynamic = noImpl


@native("noh.Node") open class NohNode() {
    fun add(t: NohNode): NohNode
    fun rem(): NohNode
    fun attachToDOM(root: Node): NohNode
    fun detachFromDOM(root: Node): NohNode
    operator fun NohNode.unaryPlus(): NohNode
    operator fun String.unaryPlus(): NohNode
}



@native("noh.Text") class Text(text: String) : NohNode()

@native("noh.Element") class NohElement(tag: String) : NohNode() {
    fun attr(name: String, value: String): NohElement
    fun css(name: String, value: String): NohElement
    fun on(events: String, handler: (event: dynamic) -> Unit): NohElement
    fun addclass(aclass: String): NohElement
    fun hasclass(aclass: String): Boolean
    fun toggleclass(aclass: String): NohElement
    fun remclass(aclass: String): NohElement
    fun scroll(duration: Int?): NohElement
}


fun text(text: String) = Text(text)

fun body(init: NohElement.() -> Unit) = NohElement("body").apply(init)
fun div(init: NohElement.() -> Unit) = NohElement("div").apply(init)
fun br() = NohElement("br")
fun link(init: NohElement.() -> Unit) = NohElement("link").apply(init)
fun p(init: NohElement.() -> Unit) = NohElement("p").apply(init)
fun i(init: NohElement.() -> Unit) = NohElement("i").apply(init)
fun em(init: NohElement.() -> Unit) = NohElement("em").apply(init)
fun strong(init: NohElement.() -> Unit) = NohElement("strong").apply(init)
fun span(init: NohElement.() -> Unit) = NohElement("span").apply(init)
fun a(init: NohElement.() -> Unit) = NohElement("a").apply(init)
fun a(href: String, init: NohElement.() -> Unit) = NohElement("a").attr("href", href).apply(init)
fun img(init: NohElement.() -> Unit) = NohElement("img").apply(init)
fun img(src: String, init: NohElement.() -> Unit) = NohElement("img").attr("src", src).apply(init)
fun hr() = NohElement("hr")
fun table(init: NohElement.() -> Unit) = NohElement("table").apply(init)
fun tr(init: NohElement.() -> Unit) = NohElement("tr").apply(init)
fun th(init: NohElement.() -> Unit) = NohElement("th").apply(init)
fun td(init: NohElement.() -> Unit) = NohElement("td").apply(init)
fun ul(init: NohElement.() -> Unit) = NohElement("ul").apply(init)
fun ol(init: NohElement.() -> Unit) = NohElement("ol").apply(init)
fun li(init: NohElement.() -> Unit) = NohElement("li").apply(init)

