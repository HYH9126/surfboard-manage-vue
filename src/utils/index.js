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

const component = (requires) => {
    let _components = [];
    requires.keys().forEach(key => {
        let cacheKey = key.replace(/^\.\/(.*)\.\w+$/, '$1')
        if (cacheKey.includes('-')) {
            cacheKey = cacheKey.replace(/-(\w)/g, function (x) { return x.slice(1).toUpperCase(); })
        }
        if (!/[A-Z]/.test(cacheKey.substring(0, 1))) {
            cacheKey = cacheKey.substring(0, 1).toUpperCase() + cacheKey.substring(1)
        }
        _components[cacheKey] = requires(key).default
    })
    return _components
}

module.exports = {
    router: router,
    js: js,
    component: component
}