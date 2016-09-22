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
fun text(text: String) = Text(text)
operator fun String.unaryPlus() = text(this)
operator fun Node.unaryPlus() = add(this)
