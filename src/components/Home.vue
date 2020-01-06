<template>
    <div class="home">
        <img src="../assets/images/cool.jpg" alt="">
        <div id="typed-strings">
            <vue-typed-js :strings="['I am Giorgi Zeikidze', 'Self taughted', 'Front-End Developer', 'Working as Angular Developer']"
                          :loop="true"
                          :fadeOut="true"
                          >
                <h1>Hello, :) <br> <span class="typing"></span></h1>
            </vue-typed-js>
        </div>
       
    </div>
</template> 

<script>
import Typed from 'typed.js';

    export default {
        name: 'Home'
    }

 

</script>

<style lang="scss" scoped>


.home {
    width: 100vw;
    height: 89.6vh;
    // background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    background: black;

    img {
        width: 100%; 
        height: 100%;
        background-size: cover;
    }
}
        #typed-strings {
            position: absolute;
            top: 40%;
            left: 5%;
            background: black;
            padding: 16px;
            border-radius: .5rem;
            
            h1 {
                font-size: 40px;
                color: white;
            }
        }

</style>