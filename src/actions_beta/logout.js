import lscache from 'lscache'

export const logout = () => {
    return function () {
        lscache.flush() // Destroy localStorage
        window.location.reload() // Sometimes needed
    }
}