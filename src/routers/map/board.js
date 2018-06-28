import board from '@/views/board'

export default {
    path: '/board',
    name: 'board',
    component: board
}

// import hello from '@/views/hello' // <写法一> 走正常的预编译，最终在prod环境下合入app.js
// const app = resolve => require(['@/App'], resolve) <写法二> 懒加载用这种写法，会打包成不同的chunk， 默认的chunkName：app
// const hello = r => require.ensure([], () => r(require('@/views/hello')), 'helloworld') // <写法三>按组:helloworld分块

// const app = resolve => require(['@/App'], resolve)

// export default {
//     path: '/',
//     component: app,
//     meta: {
//         transitionType: 'slide'
//     }
// }