package pl.mareklangiewicz.nojs

@native("$") val jquery : dynamic = noImpl
@native val noh : dynamic = noImpl


@native("Node") class DOMNode

@native("noh.Node") open class Node() {
    fun add(node: Node)
    fun rem()
    fun attachToDOM(root: DOMNode)
    fun detachFromDOM(root: DOMNode)
}

@native("noh.Text") class Text(text: String) : Node()

@native("noh.Element") class Element(tag: String) : Node() {

}

fun body(init: Element.() -> Unit) = Element("body").apply(init)
fun div(init: Element.() -> Unit) = Element("div").apply(init)
fun br() = Element("br")
fun text(text: String) = Text(text)
operator fun String.unaryPlus() = text(this)

fun Node.add_body(init: Element.() -> Unit) = add(body(init))
fun Node.add_div(init: Element.() -> Unit) = add(div(init))
fun Node.add_text(text: String) = add(text(text))
fun Node.add_br() = add(br())


