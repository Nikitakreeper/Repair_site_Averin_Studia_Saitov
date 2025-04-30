<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import img1 from '../assets/img/Best1.png'
import img2 from '../assets/img/Best2.png'
import img3 from '../assets/img/Best3.png'

import arrowLeft from '../assets/img/arrow_left_best.svg'
import arrowRight from '../assets/img/arrow_right_best.svg'

const slides = [
  { image: img1, text: 'Капитальный ремонт' },
  { image: img2, text: 'Офисный ремонт' },
  { image: img3, text: 'Черновой ремонт' }
]

const activeIndex = ref(0)

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

const handleSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
}
</script>

<template>
  <section class="Best">
    <div class="title">Лучшие решения по ремонту и отделке для жителей Сочи!</div>

    <!-- Desktop Slider -->
    <div class="slider-wrapper desktop-slider">
      <div class="left">
        <div class="romb_text">
          <img src="../assets/img/Romp_black.svg" alt="" />
          <p>Виды работ</p>
        </div>
        <div class="navigation-buttons">
          <div class="custom-prev nav-btn" @click="prevSlide">
            <img :src="arrowLeft" alt="prev" />
          </div>
          <div class="custom-next nav-btn" @click="nextSlide">
            <img :src="arrowRight" alt="next" />
          </div>
        </div>
      </div>
      <div class="slides-container">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="{ active: index === activeIndex }"
        >
          <img :src="slide.image" alt="Slide Image" class="slide-img" />
          <p class="slide-text">{{ slide.text }}</p>
        </div>
      </div>
    </div>

    <!-- Mobile Slider -->
    <div class="mobile-slider">
  <swiper
    :space-between="20"
    :slides-per-view="1.2"
    grab-cursor
    :loop="true"
    @slideChange="handleSlideChange"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="swiper-custom-slide"
      :class="{ active: index === activeIndex }"
    >
      <img :src="slide.image" class="slide-img" />
      <p class="slide-text">{{ slide.text }}</p>
    </swiper-slide>
  </swiper>
</div>

    <div class="button_container">
      <button class="button_pc">Заказать ремонт</button>
      <button class="button_mobile">Смотреть всё</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  list-style-type: none;
  outline: none;
  font-family: 'Manrope', sans-serif;
}

.Best {
  max-width: 120rem;
  width: 100%;
  padding: 0rem 3.125rem;

  .title {
    max-width: 59.375rem;
    width: 100%;
    font-size: 4rem;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -2%;
    color: #40362E;
  }

  .slider-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    position: relative;
    border-top: 0.0625rem #E8E8E8 solid;
    border-bottom: 0.0625rem #E8E8E8 solid;
    padding: 3.75rem 0rem;

    .left {
      display: flex;
      flex-direction: column;
      gap: 25.75rem;

      .romb_text {
        display: flex;
        flex-direction: row;
        gap: 0.9375rem;
        align-items: center;

        img {
          width: 1.125rem;
          height: 1.125rem;
        }

        p {
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 130%;
        }
      }

      .navigation-buttons {
        display: flex;
        flex-direction: row;
        gap: 0.9375rem;

        .nav-btn {
          width: 4.5625rem;
          height: 4.5625rem;
          background: white;
          border-radius: 50%;
          border: 0.0625rem #848386 solid;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }

    .slides-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.5rem;
      max-width: 85.3125rem;
      width: 100%;

      .slide {
        max-width: 26.75rem;
        width: 100%;
        min-height: 33.9375rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: start;
        border-radius: 0.1875rem;
        opacity: 40%;
        transition: opacity 0.3s ease;
        padding: 1.25rem;

        .slide-img {
          max-width: 26.75rem;
          width: 100%;
          height: auto;
          border-radius: 0.1875rem;
          object-fit: cover;
        }

        .slide-text {
          margin-top: 0.9375rem;
          font-size: 1.125rem;
          color: #848386;
          text-decoration: underline;
          text-align: center;
        }

        &.active {
          opacity: 100%;
        }
      }
    }
  }

  .button_container {
    display: flex;
    padding: 3.75rem 0rem;
    justify-content: end;

    .button_pc {
      display: flex;
      max-width: 28.4375rem;
      justify-content: center;
      width: 100%;
      padding: 1.25rem 0rem;
      border: 0.0625rem #848386 solid;
      border-radius: 62.5rem;
      background: #fff;
      color: #848386;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 120%;
    }
    .button_mobile {
      display: none;
      max-width: 28.4375rem;
      width: 100%;
      padding: 1.25rem 0rem;
      border: 0.0625rem #848386 solid;
      border-radius: 62.5rem;
      background: #fff;
      color: #848386;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 120%;
    }
  }

  // Mobile Swiper container (hidden by default)
  .mobile-slider {
    display: none;
  }
}

// Tablet styles
@media (max-width: 768px) {
  .Best {
    .title {
      font-size: 2.5rem;
    }

    .slider-wrapper {
      flex-direction: column;

      .left {
        flex-direction: row;
        gap: 6.25rem;
      }
    }
  }
}

// Mobile styles (375px and below)
@media (max-width: 375px) {
  .slides-container,
  .navigation-buttons {
    display: none !important;
  }

  .mobile-slider {
    display: block !important;
  }
  .slide-img{
    width: 280px;
  }
  .slide-text{
    font-size: 14px;
    color: #848386;
    text-decoration: underline  ;
  }
  .swiper-custom-slide {
  opacity: 0.4;
  transition: opacity 0.3s ease;

  &.active {
    opacity: 1;
  }
}
}
@media (max-width: 375px) {
  .Best{
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    gap: 30px;
    .title{
      font-size: 24px;
      max-width: 262px;
      width: 100%;
    }
    .slider-wrapper {
      flex-direction: column;
      align-items: start;
      border-bottom:none;
      max-width: 375px;
      padding: 32px 0px ;
      width: 100%;
      .left {
        justify-content: flex-start; // добавь это
        align-items: flex-start;     // и это, чтобы romb_text ушёл влево

        .romb_text {
          justify-content: flex-start; // на всякий случай
        }
      }

    }
    .button_container{
      display: flex;
      padding: 30px 15px 0px 15px;
      border-top: 0.0625rem #E8E8E8 solid;
      .button_pc{
        display: none;
      }
      .button_mobile{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 12px;
        max-width: 345px;
        width: 100%;
        height: 50px;
        font-size: 14px;
      }
    }
  }
}
</style>

