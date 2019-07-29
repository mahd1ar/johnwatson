const axios = require('axios');
// const Vue = require('vue/dist/vue.runtime.common.prod')


window.onload = function () {

  axios.get('JSON.txt')
    .then(function (resp) {

      new Vue({
        el: '#main-container',
        data: { ...resp.data, pic: 'profile.jpg' },
        components: {
          'contact': httpVueLoader('js/contact.vue'),
          'skill': httpVueLoader('js/skill.vue'),
          'personal': httpVueLoader('js/personal.vue'),
          'education': httpVueLoader('js/education.vue'),
          'xp': httpVueLoader('js/xp.vue'),
          'ref': httpVueLoader('js/ref.vue')
        },

        methods: {
          getPicAddress() {
            return this['Pic Address']
          }
        },
        created() {

          let sp = document.querySelector('.sp-cont');
          sp.style.opacity = 1;

          let time = setInterval(() => {
            sp.style.opacity -= 0.01;
            if (sp.style.opacity == 0) {
              clearInterval(time)
              sp.style.display = 'none';
            }
          }, 10);
        }

      });


    })
    .catch(function (error) {
      console.log(error);
    })


}