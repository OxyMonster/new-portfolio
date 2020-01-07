<template>
    <div class="aboutMe page">
        <div class="about-me">
            <div class="about-me__title col-9">
                <h4>03 : About me</h4>
            </div>
            <div class="about-me__main d-flex justify-content-around">
                <div class="about-me__main__left-content col-md-6 mt-4">
                    <div class="about-me__main__left-content__line-one">
                        <h4>Who's this guy ?</h4>
                        <p class="mt-4">Hi my name is Giorgi I'm self taught Front-End Developer, As a self-taught Front End Developer, 
                            I'm keen on getting out of my comfort zone as I love to challenge myself to improve my skills. 
                            Ever since I started coding I was connected with new technologies and industry trends, 
                            applying them into operations and personal projects. I have serious passion for UI effects, 
                            animations and creating intuitive, dynamic user experiences. Let's make something special.
                        </p>
                    </div>
                    <!-- <div class="about-me__main__left-content__line-two">
                        <h4>title2</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquid necessitatibus 
                            architecto a harum vitae dolor corrupti dolores quia nulla tempore ipsa, minus maxime laboriosam 
                            ratione fugit! Hic, aspernatur. Accusantium!
                        </p>
                    </div> -->
                    <!-- <div class="about-me__main__left-content__line-three">
                        <h4>title3</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aliquid necessitatibus 
                            architecto a harum vitae dolor corrupti dolores quia nulla tempore ipsa, minus maxime laboriosam 
                            ratione fugit! Hic, aspernatur. Accusantium!
                        </p>
                    </div> -->
                </div>

                <div class="about-me__main__right-content col-5 mt-3">
                    <!-- <div class="about-me__main__right-content_img"> -->
                        <img src="../assets/images/profil.jpg" alt="">
                    <!-- </div> -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'aboutMe'
    }
</script>

<style lang="scss" scoped>
.aboutMe {
    // width: 100%;

}
.about-me {
    &__title {
        text-align: center;
        

        h4 {
            font-size: 30px;   
        
        }
    }

    &__main {
        &__left-content {
            div {
                h4 {
                    font-size: 20px;
                    padding: 16px;  
                    border-bottom: 1px solid white; 
                    white-space: nowrap;
                    width: 230px;
                    font-weight: bold;
                }
                p {
                    font-size: 16px;
                }
            }
        }
        &__right-content {

                img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    border-radius: .4rem;

                }
        }
    }

input {
    border-color: black;
}
    
}
</style>