package rx


/**
 * Some minimalist Observable implementation
 */

interface Observer<T> {
    fun onNext(item: T)
    fun onCompleted()
    fun onError(e: Throwable)
}

abstract class Observable<T> {
    abstract fun subscribe(observer: Observer<T>)
}


