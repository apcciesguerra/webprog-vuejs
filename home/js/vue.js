const { createApp, defineComponent } = Vue;

const Slider = defineComponent({
    data() {
        return {
            currentSlide: 0,
            images: [
                { src: 'https://i.imgur.com/UeLZ29L.jpeg', text: 'Image 1' },
                { src: 'https://i.imgur.com/eqhnpkk.jpeg', text: 'Image 2' },
                { src: 'https://i.imgur.com/KcrXxnt.jpeg', text: 'Image 3' },
                { src: 'https://i.imgur.com/GKBmylR.jpeg', text: 'Image 4' },
                { src: 'https://i.imgur.com/sv9Ntja.jpeg', text: 'Image 5' },
                { src: 'https://i.imgur.com/a2p9Qwq.jpeg', text: 'Image 6' },
                { src: 'https://i.imgur.com/gkJRjlk.jpeg', text: 'Image 7' }
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
            <button class="slider-button" @click="prevSlide">Previous</button>
            <img :src="images[currentSlide].src" :alt="images[currentSlide].text">
            <button class="slider-button" @click="nextSlide">Next</button>
            <p>{{ images[currentSlide].text }}</p>
        </div>
    `
});

const app = createApp({});
app.component('slider', Slider);
app.mount('#app');