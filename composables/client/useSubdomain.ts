export default () => {
    if (typeof window !== 'undefined'){
        const hostnameArray = window.location.hostname.split('.')

        // Localhost
        if (window.location.hostname.includes('localhost')){
            if (hostnameArray.length <= 1) return false
            else return hostnameArray[0]
        }
        
        // Production/Development
        if (window.location.hostname.includes('enab.app')){
            if (hostnameArray.length <= 2) return false
            else if (window.location.hostname.includes('development')) return false
            else return hostnameArray[0]
        }
    }
    return false
}