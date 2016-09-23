package example

import pl.mareklangiewicz.nojs.NohNode

class JSTextView(val element: NohNode) : TextView {
    override var text: String
        get() = element.dom.textContent ?: ""
        set(value) {
            element.dom.textContent = value
        }
}

