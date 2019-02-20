import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/demo/product",
            name: "Demo product",
            component: () => import("@/views/view.product-details.vue")
        },
        {
            path: "/",
            name: "homepage",
            component: () => import("@/views/view.homepage.vue"),
            meta: {
                title: "Homepage",
                metaTags: [
                    {
                        name: "description",
                        content: ""
                    },
                    {
                        name: "og:description",
                        content: ""
                    }
                ]
            }
        },
        {
            path: "/sign-up",
            name: "sign-up",
            component: () => import("@/views/view.sign-up.vue"),
            meta: {
                title: "Welcome to AVE",
                subtitle: "Sign in or register",
                metaTags: [
                    {
                        name: "description",
                        content: ""
                    },
                    {
                        name: "og:description",
                        content: ""
                    }
                ]
            }
        },
        {
            path: "/search/:query",
            name: "search",
            component: () => import("@/views/view.search.vue"),
            meta: {
                title: null,
                subtitle: "Your search results",
                metaTags: [
                    {
                        name: "description",
                        content: ""
                    },
                    {
                        name: "og:description",
                        content: ""
                    }
                ]
            }
        },
    {
        path: "/brand",
        name: "brand",
        component: () => import("@/views/view.brand.vue"),
        meta: {
            title: "The brand",
            subtitle: "Company slogan goes here",
            metaTags: [
                {
                    name: "description",
                    content: ""
                },
                {
                    name: "og:description",
                    content: ""
                }
            ]
        }
    },
    {
        path: "/local-stores",
        name: "local-stores",
        component: () => import("@/views/view.local-stores.vue"),
        meta: {
            title: "Local stores",
            subtitle: "Find a store near you",
            metaTags: [
                {
                    name: "description",
                    content: ""
                },
                {
                    name: "og:description",
                    content: ""
                }
            ]
        },
        children: [
            {
                path: "london",
                name: "local-store-london",
                components: {
                    'store-detail': () => import('@/views/view.local-stores-detail.vue')
                },
                meta: {
                    locationTitle: "London",
                    locationAddress: "180-182 Regent Street, London, W1B 5BT",
                    locationDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.",
                    locationContact: [
                        {
                            icon: 'fa fa-',
                            content: 'c',
                        }
                    ],
                    locationOpeningHours: "Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm",
                    locationSocialMedia: [
                        {
                            icon: 'fab fa-facebook-f',
                            title: 'Facebook',
                            url: 'https://www.facebook.com/ave-page-london'
                        },
                        {
                            icon: 'fab fa-twitter',
                            title: 'Twitter',
                            url: 'https://www.twitter.com/ave-page-london'
                        },
                        {
                            icon: 'fab fa-instagram',
                            title: 'Instagram',
                            url: 'https://www.instagram.com/ave-page-london'
                        },
                        {
                            icon: 'fab fa-pinterest',
                            title: 'Pinterest',
                            url: 'https://www.pinterest.com/ave-page-london'
                        },
                    ]
                }
            },
            {
                path: "new-york",
                name: "local-store-new-york",
                components: {
                    'store-detail': () => import('@/views/view.local-stores-detail.vue')
                },
                meta: {
                    locationTitle: "New York",
                    locationAddress: "109 Columbus Circle, New York, NY 10023",
                    locationDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.",
                    locationContact: {

                    },
                    locationOpeningHours: "Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm",
                    locationSocialMedia: [
                        {
                            icon: 'fab fa-facebook-f',
                            title: 'Facebook',
                            url: 'https://www.facebook.com/ave-page-new-yowkr'
                        },
                        {
                            icon: 'fab fa-twitter',
                            title: 'Twitter',
                            url: 'https://www.twitter.com/ave-page-new-york'
                        },
                        {
                            icon: 'fab fa-instagram',
                            title: 'Instagram',
                            url: 'https://www.instagram.com/ave-page-new-york'
                        },
                        {
                            icon: 'fab fa-pinterest',
                            title: 'Pinterest',
                            url: 'https://www.pinterest.com/ave-page-new-york'
                        },
                    ]
                }
            },
            {
                path: "local-store-paris",
                name: "local-store-paris",
                components: {
                    'store-detail': () => import('@/views/view.local-stores-detail.vue')
                },
                meta: {
                    locationTitle: "Paris",
                    locationAddress: "2133 Rue Saint-Honoré, 75001 Paris",
                    locationDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.",
                    locationContact: {

                    },
                    locationOpeningHours: "Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm",
                    locationSocialMedia: [
                        {
                            icon: 'fab fa-facebook-f',
                            title: 'Facebook',
                            url: 'https://www.facebook.com/ave-page-paris'
                        },
                        {
                            icon: 'fab fa-twitter',
                            title: 'Twitter',
                            url: 'https://www.twitter.com/ave-page-paris'
                        },
                        {
                            icon: 'fab fa-instagram',
                            title: 'Instagram',
                            url: 'https://www.instagram.com/ave-page-paris'
                        },
                        {
                            icon: 'fab fa-pinterest',
                            title: 'Pinterest',
                            url: 'https://www.pinterest.com/ave-page-paris'
                        },
                    ]
                }
            }
        ]
    }
  ]
});
