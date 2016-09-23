package example

import rx.Observable

interface View

interface TextView {
    var text: String
}

interface EditText : TextView {
    fun changes(): Observable<String>
}

interface ImageView {
    var imageUrl: String
}

interface StartView : View {
    fun clearUsers()
    fun addUser(login: String, name: String, pictureUrl: String)
    fun loginSelects(): Observable<String>
}

interface UserDetailsView : View {
    val loginView: TextView
    val pictureView: ImageView
    val nameView: TextView
    val locationView: TextView
    val emailView: TextView
}

