package example

import pl.mareklangiewicz.nojs.*
import rx.Observable

class JSTextView(val element: NohNode) : TextView {
    override var text: String
        get() = element.dom.textContent ?: ""
        set(value) {
            element.dom.textContent = value
        }
}

class JSImageView(val img: NohElement) : ImageView {
    override var imageUrl: String
        get() = img.getAttr("src")
        set(value) {
            img.attr("src", value)
        }

}

class JSStartView() : StartView {
    override fun clearUsers() {
        throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun addUser(login: String, name: String, pictureUrl: String) {
        throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun loginSelects(): Observable<String> {
        throw UnsupportedOperationException("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}

// it will populate given placeholder with necessary UI elements
class JSUserDetailsView(val element: NohElement) : UserDetailsView {

    private val loginInput = input {}
    private val userImg = img {}
    private val nameText = div {}
    private val locationText = div {}
    private val emailText = div {}

    init {
        element.apply {
            add(loginInput)
            add(userImg)
            add(nameText)
            add(locationText)
            add(emailText)
        }

    }
    override val loginView: TextView = JSTextView(loginInput)
    override val pictureView: ImageView = JSImageView(userImg)
    override val nameView: TextView = JSTextView(nameText)
    override val locationView = JSTextView(locationText)
    override val emailView = JSTextView(emailText)
}
