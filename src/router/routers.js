import Layout from '@/views/Layout.vue'

export default [
    {
        path: '/',
        name: 'index',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue')
            },
            {
                path: '/css/gradient',
                name: 'gradient',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Gradient.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/home',
        meta: {}
    }
]
