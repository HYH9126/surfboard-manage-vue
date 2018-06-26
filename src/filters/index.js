import Vue from 'vue'

// example
Vue.filter('reverseString', function (value) {
    return value.split('').reverse().join('')
})
