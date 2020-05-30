// Write a function that decides whether a user has logged in. 
// Sometimes, it's called with a number of times that the user has logged in. 
// Other times, it's called with true. It's never called with false.

function hasLoggedIn(loggedIn: true | number): boolean {
    if (loggedIn === 0) {
        return false
    }
    return true
}
