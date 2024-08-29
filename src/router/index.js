import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/homePage.vue'; 
import App from '@/App.vue'; 
import randomGirl from '@/components/randomGirl'; 
import fashionGirl from '@/components/fashionGirl.vue';
import weiboGirl from '@/components/weiboGirl.vue';
import cosGirl from '@/components/cosGirl.vue';
import beautyGirl from '@/components/beautyGirl.vue';
import mmGirl from '@/components/mmGirl.vue';
import lastGirl from '@/components/lastGirl.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash', // 使用 HTML5 History 模式（可选）
  routes: [
    { path: '/', 
        component: App,
        children: [
          { path: '/', component: homePage },
          { path: '/randomGirl', component: randomGirl },
          { path: '/fashionGirl', component: fashionGirl },
          { path: '/weiboGirl', component: weiboGirl },
          { path: '/cosGirl', component: cosGirl },
          { path: '/beautyGirl', component: beautyGirl },
          { path: '/mmGirl', component: mmGirl },
          { path: '/lastGirl', component: lastGirl },
        ]
       } 
  ]
});
