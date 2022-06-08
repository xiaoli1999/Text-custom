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
            },
            {
                path: '/css/background',
                name: 'background',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Background.vue')
            },
            {
                path: '/css/shadow',
                name: 'shadow',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Shadow.vue')
            },
            {
                path: '/css/threeD',
                name: 'threeD',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/ThreeD.vue')
            },
            {
                path: '/css/stroke',
                name: 'stroke',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Stroke.vue')
            },
            {
                path: '/css/skew',
                name: 'skew',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Skew.vue')
            },
            {
                path: '/css/fire',
                name: 'fire',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Fire.vue')
            },
            {
                path: '/css/stripe',
                name: 'stripe',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Stripe.vue')
            },
            {
                path: '/css/embed',
                name: 'embed',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Embed.vue')
            },
            {
                path: '/css/back',
                name: 'back',
                meta: {},
                component: () => import(/* webpackChunkName: "Home" */'../views/css/Back.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/home',
        meta: {}
    }
]
