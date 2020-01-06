<template>
    <div id="navigation">
        <div class="container" style="height: 100%">
                <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar">1</span>
                <span class="icon-bar">2</span>
                <span class="icon-bar">3</span>
                </button> -->
            <div class="navbar col-md-9 d-flex">
                <div class="col-md-3">
                    <a href="./index.html" title="">
                        <router-link to="/">01 : Home</router-link>  
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="./index.html" title="">
                        <router-link to="/works">02 : Works</router-link>     
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="./index.html" title="">
                        <router-link to="/aboutMe">03 : About me</router-link>   
                    </a>
                </div>
                <div class="col-md-3">
                    <a href="./index.html" title="">
                        <router-link to="/contact">04 : Contact</router-link>  
                    </a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'navigation'
    }
</script>

<style lang="scss" scoped>
@import url('~/assets/_variables.scss');
#navigation {
    height: 100%;
}
.navbar {
    height: 100%;
    &__container {
        li {
           a{
            //    color: white !important;
               text-decoration: none;
           }
        }
    }
    div {
        a {
            color: gray !important;
            text-decoration: none;

        }
    }
}
</style>