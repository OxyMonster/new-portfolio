<template>
    <div class="contact page">
        <div class="contact-content">
            <div class="contact-content__title col-9">
                <h4>04 : Contact me</h4>
            </div>
            <div class="contact-content__main d-flex">
                <div class="contact-content__main__left mt-5 col-md-6">
                    <form action="">
                        <div class="contact-content__main__left__email mt-2">
                            <input class="form-control" type="text" placeholder="Email">
                        </div>
                        <div class="contact-content__main__left__subject mt-2">
                            <input class="form-control" type="text" placeholder="Subject">                        
                        </div>
                        <div class="contact-content__main__left__message mt-2">
                            <textarea class="form-control" type="text" placeholder="Enter your message"></textarea>
                        </div>
                        <button class="btn btn-primary mt-3">Send</button>
                    </form>
                </div>

                <div class="contact-content__main__right mt-5 col-md-6">
                        <div class="col-5 contact-content__main__right__phone d-flex align-items-baseline justify-content-around">
                            <div class="col-2">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="col-10">
                                <p>+995 599 12 32 70</p>
                            </div>
                        </div>
                        <div class="col-5 contact-content__main__right__phone d-flex align-items-baseline justify-content-around">
                            <div class="col-2">
                                <i class="fas fa-envelope-square"></i>
                            </div>
                            <div class="col-10">
                                <p>giorgizeikidze97@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-5 contact-content__main__right__phone d-flex align-items-baseline justify-content-around">
                                <div class="col-2">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="col-10">
                                    <p>Tbilisi, Georgia</p>
                                </div>
                        </div>
                        <div class="contact-content__main__right__social mt-3">
                            <div class="contact-content__main__right__social__title">
                                <h4>Follow me on social networks</h4>
                            </div>
                            <div class="contact-content__main__right__social__logos d-flex justify-content-around col-6 mt-4">
                                <a href="https://www.facebook.com/ze1ka" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://github.com/OxyMonster" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/giorgi-zeikidze/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                </div>
          

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contact'
    }
</script>

<style lang="scss" scoped>
input,textarea {
    border-color: black;
}
a {
    color: black;
}
.contact {
    width: 100%;
}
    .contact-content {
        &__title {
            text-align: center;
            h4 {
                font-size: 30px;
            }
        }

        &__main {
            &__right {
                p {
                    white-space: nowrap;
                }
                &__social__logos {
                    i {
                        font-size: 22px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>