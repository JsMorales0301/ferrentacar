import type { RouteRecordRaw } from "vue-router";

export const authRoute: RouteRecordRaw = {
    path: '/auth',
    component: () => import('../layout/AuthLayout.vue'),
    children: [
        {
            path: 'login',
            name: 'login-user',
            component: () => import('../views/LoginView.vue')
        }
    ]
}