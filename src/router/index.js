import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Главная страница',
    component: () => import('../views/Home.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  },
  {
    path: '/search/:query',
    name: 'Страница поиска',
    component: () => import('../views/SearchResults.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  },
  {
    path: '/user-profile/:id',
    name: 'Cтраница пользователя',
    component: () => import('../views/UserProfile.vue'),
    meta: {
      power: {
        isAdminWatch: false
      }
    }
  },
  {
    path: '/admin',
    name: 'admin panel',
    component: () => import('../views/Admin.vue'),
    meta: {
      power: {
        isAdminWatch: true,
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Страница не найдена',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router