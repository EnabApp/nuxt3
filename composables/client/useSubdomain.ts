export default () => {
    if (typeof window !== 'undefined'){
        return 's'
    }
    
    // // get subdomain
    // const hostnameArray = window.location.hostname.split('.')
    // const numberOfSubdomains = hostnameArray.length - 2
    // return hostnameArray.length === 2 ? window.location.hostname : hostnameArray.slice(numberOfSubdomains).join('.')
}