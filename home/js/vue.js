const { createApp, defineComponent } = Vue;

const Slider = defineComponent({
    data() {
        return {
            currentSlide: 0,
            images: [
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo1.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo2.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo3.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo4.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo5.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo6.jpg?raw=true'},
                { src: 'https://github.com/apcciesguerra/webprog-vuejs/blob/main/images/photo7.jpg?raw=true'}
            ]
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
        }
    },
    template: `
        <div class="slider">
            <button class="slider-button" @click="nextSlide">NEXT</button>
            <img :src="images[currentSlide].src" :alt="images[currentSlide].text">
            <button class="slider-button" @click="prevSlide">PREVIOUS</button>
            <p>{{ images[currentSlide].text }}</p>
        </div>
    `
});

const app = createApp({});
app.component('slider', Slider);
app.mount('#app');
