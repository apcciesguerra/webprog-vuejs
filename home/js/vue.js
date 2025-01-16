Vue.component('slider', {
    data() {
        return {
            currentSlide: 0,
            images: [
                { src: 'https://i.imgur.com/UeLZ29L.jpeg'},
                { src: 'https://i.imgur.com/eqhnpkk.jpeg'},
                { src: 'https://i.imgur.com/KcrXxnt.jpeg'},
                { src: 'https://i.imgur.com/GKBmylR.jpeg'},
                { src: 'https://i.imgur.com/sv9Ntja.jpeg'},
                { src: 'https://i.imgur.com/a2p9Qwq.jpeg'},
                { src: 'https://i.imgur.com/gkJRjlk.jpeg'}
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

new Vue({
    el: '#app'
});