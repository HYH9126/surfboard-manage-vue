let envConfig = {}

/* @if NODE_ENV=='production' */
envConfig = {
    DEV: 'http://localhost:8000'
}
/* @endif */

/* @if NODE_ENV=='development' */
envConfig = {
    DEV: 'http://localhost:8000'
}
/* @endif */

/* @if NODE_ENV=='build' */
envConfig = {
    DEV: 'http://localhost:8000'
}
/* @endif */

export default {
    envConfig
}
