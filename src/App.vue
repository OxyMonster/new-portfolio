<template>
  <div id="app">
    <div :class="{'navigation-menu-stars': isHome, 'navigation-menu-white': !isHome}">
    <app-navigation></app-navigation>
    </div>
    <div :class="{'container mt-5': !isHome, 'container-fluid': isHome }">
      <div class="row">
        <transition name="router-anim" 
                    enter-active-class="animated fadeInLeft" 
                    leave-active-class="animated fadeOutLeft"
                    >
        <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from './components/Navigation'; 
export default {
  name: 'app',   
  components: {
    'app-navigation' : navigation 
  }, 
  data () {
    return {
      isHome: false, 
    }
  },
  mounted() {
    console.log(this.$route.path);
    this.isHome = this.$route.path === '/' ? true : false; 
    console.log(this.isHome);
    
  }, 

  updated() {
    console.log(this.$route.path);
    this.isHome = this.$route.path === '/' ? true : false; 
    console.log(this.isHome);
  },


}
</script>

<style lang="scss">
// @import 'src/assets/_variables.scss';
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");

html,body {
  width: 100%; 
  height: 100%;
  font-family: 'Roboto Mono', monospace;
  background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% );
  overflow-y: auto;

  *{
    color: white;
  }

}
#app {
  display: block;
  
}

.btn {
  background-color: white !important;  
  border: 1px solid black !important; 
  color: black;

  &:hover {
    background-color: black !important;
    color: white;

    transition: .4s;
  }

}
.container {
  margin:0 auto;
  
}
.page {
  position: fixed;
  width: inherit;
}
.navigation-menu-stars {
  height: 80px;
  background: black;  
  transition: .4s;
  z-index: 2;

}
.navigation-menu-white {
  height: 80px;
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
  transition: .4s;
  z-index: 2;
  
  a {
     &:hover {
                color: white !important; 
                transition: .4s;
            }
  }
}


.flex-fill {
    flex:1;
}

</style>
