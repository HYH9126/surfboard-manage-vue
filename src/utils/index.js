'use strict'

const router = (requires) => {
    let cache = {};
    let _route = [];
    requires.keys().forEach(key => {
        let cacheKey = key.match(/\.\/(.*)\.js/)[1];
        cache[cacheKey] = requires(key).default;
        if (/\//.test(cacheKey)) {
            cache[cacheKey].parent = cacheKey.match(/(.*)\//)[1];
        }
    });
    for (let key in cache) {
        if (!cache[key].parent) continue;
        cache[cache[key].parent].children = cache[cache[key].parent].children || [];
        cache[cache[key].parent].children.push(cache[key]);
    }
    for (let key in cache) {
        _route.push(cache[key]);
    }
    return _route;
}

const js = (requires) => {
    let _js = [];
    requires.keys().forEach(key => {
        let cacheKey = key.match(/\.\/(.*)\.js/)[1].replace(/\//g, '_');
        _js[cacheKey] = requires(key).default;
    });
    return _js;
}

module.exports = {
    router: router,
    js: js
}