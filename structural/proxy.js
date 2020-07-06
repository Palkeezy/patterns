function netFetch(url) {
    return `${url} - відповідь сервера`
}

const cache = new Set()
const proxyFetch = new Proxy(netFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0]
        if (cache.has(url)) {
            return `${url} - відповідь з кешу`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, argArray)
        }
    }
})

console.log(proxyFetch('angular.io'));
console.log(proxyFetch('react.com'));
console.log(proxyFetch('react.com'));
