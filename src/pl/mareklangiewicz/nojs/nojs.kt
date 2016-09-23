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
    var textContent: String // TODO: check it
    val dom: Node
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

fun NohElement.attrs(vararg attrs: Pair<String, String>) = apply { for(attr in attrs) attr(attr.first, attr.second) }

fun text(text: String) = Text(text)

fun h1(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h1").attrs(*attrs).apply(init)
fun h2(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h2").attrs(*attrs).apply(init)
fun h3(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h3").attrs(*attrs).apply(init)
fun h4(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h4").attrs(*attrs).apply(init)
fun h5(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h5").attrs(*attrs).apply(init)
fun h6(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("h6").attrs(*attrs).apply(init)
fun body(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("body").attrs(*attrs).apply(init)
fun div(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("div").attrs(*attrs).apply(init)
fun br() = NohElement("br")
fun link(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("link").attrs(*attrs).apply(init)
fun p(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("p").attrs(*attrs).apply(init)
fun i(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("i").attrs(*attrs).apply(init)
fun em(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("em").attrs(*attrs).apply(init)
fun strong(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("strong").attrs(*attrs).apply(init)
fun span(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("span").attrs(*attrs).apply(init)
fun a(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("a").attrs(*attrs).apply(init)
fun a(href: String, vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("a").attr("href", href).attrs(*attrs).apply(init)
fun img(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("img").attrs(*attrs).apply(init)
fun img(src: String, vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("img").attr("src", src).attrs(*attrs).apply(init)
fun hr() = NohElement("hr")
fun table(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("table").attrs(*attrs).apply(init)
fun tr(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("tr").attrs(*attrs).apply(init)
fun th(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("th").attrs(*attrs).apply(init)
fun td(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("td").attrs(*attrs).apply(init)
fun ul(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("ul").attrs(*attrs).apply(init)
fun ol(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("ol").attrs(*attrs).apply(init)
fun li(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("li").attrs(*attrs).apply(init)
fun pre(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("pre").attrs(*attrs).apply(init)
fun button(vararg attrs: Pair<String, String>, init: NohElement.() -> Unit) = NohElement("button").attrs(*attrs).apply(init)

