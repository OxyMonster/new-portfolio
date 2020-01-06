<template>
    <div class="works page">
        <div class="works-content">
            <div class="works-content__title col-9">
                <h4>02 : Works</h4>
                <p class="mt-3">Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere, venenatis dapibus urna.</p>
            </div>
            <div class="works-content__main d-flex mt-5">
                <div class="works-content__main__box">
                    <div class="works-content__main__box__img">
                        <img src="" alt="box-img">
                    </div>
                    <div class="works-content__main__title">
                        <h4>box title</h4>
                    </div>
                    <div class="works-content__main__description">
                        <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.</p>
                    </div>
                    <button class="btn btn-primary">See code</button>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    export default {
        name: 'works'
    }
</script>

<style lang="scss" scoped>
.works {
    width: 100%;
}
 .works-content {
     &__title {
         text-align: center;
         h4 {
             font-size: 30px;
         }
         p {
             font-size: 11px;
         }
     }
 }
</style>