import Vue from 'vue'
import Router from 'vue-router'
import gameIndex from '@/components/games/gameIndex'
import hotGameList from '@/components/games/hotGameList'
import newGameList from '@/components/games/newGameList'
import activity from '@/components/games/activity'
import user from '@/components/user/userIndex'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/game'
    },
     {
      path: '/game',
      name: 'gameIndex',
      redirect: '/game/hot',
      component: gameIndex,
      children:[
        {
          path: 'hot',
          name: 'hot',
          component: hotGameList
        },
         {
          path: 'new',
          name: 'new',
          component: newGameList
        },
        {
          path: 'activity',
          name: 'activity',
          component: activity
        }
      ]
    },
    {
      path: '/user',
      name: user,
      component: user
    }
  ]
})
