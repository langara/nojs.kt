package example

import pl.mareklangiewicz.nojs.NohElement
import pl.mareklangiewicz.nojs.NohNode

class JSTextView(val element: NohNode) : TextView {
    override var text: String
        get() = element.dom.textContent ?: ""
        set(value) {
            element.dom.textContent = value
        }
}

class JSImageView(val element: NohElement) : ImageView {
    override var imageUrl: String
        get() = element.getAttr("src")
        set(value) {
            element.attr("src", value)
        }

}
