<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules' // <-- Подключаем модули

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../assets/img/our_project_slide.png'
import img2 from '../assets/img/our_project_slide_second.png'

const images = [img1, img1, img1, img1]
const imagestwo = [img2, img2, img2, img2,]
</script>

<template>
  <section class="Our_project">
    <p class="title pc">Наши проекты, выполненные за 10 лет работы</p>
    <p class="title mobile">Представляем проекты, выполненные за более 10 лет работы</p>
    <div class="apartments">
      <div class="apartment">
        <div class="info">
          <div class="romb_text">
            <img src="../assets/img/Romp_brown.svg" alt="">
            <p>Квартира</p>
          </div>
          <div class="name">32,3 м<sup>2</sup>, Дизайнерский ремонт, отельная отделка</div>
          <div class="price">234.000 ₽</div>
        </div>
        <div class="slider_container">
          <Swiper
            :modules="[Navigation, Pagination]"
            :loop="true"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :breakpoints="{
              0: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20
              }
            }"
            class="custom-swiper"
          >
            <SwiperSlide v-for="(image, index) in images" :key="index">
              <div class="slide" :style="{ backgroundImage: `url(${image})` }"></div>
            </SwiperSlide>

            <div class="swiper-pagination"></div>

            <!-- Кастомная обёртка для кнопок -->
            <div class="swiper-button-wrapper">
              <div class="swiper-button-prev">
                <img src="../assets/img/arrow_left.svg" alt="prev" />
              </div>
              <div class="swiper-button-next">
                <img src="../assets/img/arrow_right.svg" alt="next" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      <div class="apartment">
        <div class="info">
          <div class="romb_text">
            <img src="../assets/img/Romp_black.svg" alt="">
            <p>Квартира</p>
          </div>
          <div class="name">127,7 м2, Премиум ремонт, деревянная отделка</div>
          <div class="price">1.324.000 ₽</div>
        </div>
        <div class="slider_container_second">
          <Swiper
            :modules="[Navigation, Pagination]"
            :loop="true"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }"
            :breakpoints="{
              0: {
                slidesPerView: 'auto',
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20
              }
            }"
            class="custom-swiper"
          >
            <SwiperSlide v-for="(image, index) in imagestwo" :key="index">
              <div class="slide" :style="{ backgroundImage: `url(${image})` }"></div>
            </SwiperSlide>

            <div class="swiper-pagination"></div>

            <!-- Кастомная обёртка для кнопок -->
            <div class="swiper-button-wrapper">
              <div class="swiper-button-prev">
                <img src="../assets/img/arrow_left.svg" alt="prev" />
              </div>
              <div class="swiper-button-next">
                <img src="../assets/img/arrow_right.svg" alt="next" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <button class="left_button">Пред.</button>
        <p>1</p>
        <button class="left_button">След.</button>
      </div>
      <button class="right">Все проекты</button>
    </div>
  </section>
</template>




<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  list-style-type: none;
  outline: none;
}

.Our_project {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;

  .title {
    max-width: 910px;
    width: 100%;
    font-size: 64px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -2%;
    color: #40362E;
    
  }
  .mobile{
    display: none;
  }

  .apartments {
    display: flex;
    flex-direction: column;
    border-bottom: 1px #E8E8E8 solid;
    max-width: 1920px;
    width: 100%;
    .apartment {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-top: 1px #E8E8E8 solid;
      padding: 60px 50px;
      max-width: 1920px;
      width: 100%;
      .info {
        max-width: 423px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 60px;

        .romb_text {
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;

          img {
            width: 18px;
          }

          p {
            font-size: 18px;
            font-weight: 400;
            line-height: 130%;
            color: #0a0a0a;
          }
        }

        .name {
          font-size: 30px;
          font-weight: 400;
          line-height: 120%;
          line-height: -1%;
          color: #0a0a0a;

          sup {
            font-size: 18px;
          }
        }

        .price {
          font-size: 18px;
          font-weight: 400;
          line-height: 130%;
          color: #0a0a0a;
        }
      }

      .slider_container {
          max-width: 910px;
          width: 100%;
        .custom-swiper {
          max-width: 910px;
          width: 100%;
          height: 420px;
          position: relative;

          .slide {
            max-width: 910px;
            height: 100%;
            background-size: cover;
            background-position: center;
          }

          .swiper-pagination {
            position: absolute;
            bottom: 20px;
            left: 20px;
            display: flex;
            gap: 15px;
            z-index: 10;

            .swiper-pagination-bullet {
              max-width: 13px;
              width: 100%;
              min-height: 13px;
              background: transparent;
              position: relative;
              transform: rotate(45deg);

              &::before {
                content: '';
                position: absolute;
                inset: 0;
                background-color: white;
                transition: transform 0.3s ease, background-color 0.3s ease;
              }

              &-active::before {
                background-color: white;
              }
            }
          }

          
          .swiper-button-wrapper {
            max-width: 123px;
            width: 100%;
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 15px;
            z-index: 10;

            .swiper-button-prev,
            .swiper-button-next {
              display: flex;
              width: 54px;
              height: 32px;
              background: none;
              border: none;
              cursor: pointer;
              position: relative;

              &::after {
                display: none;
              }

              img {
                width: 100%;
                height: auto;
                display: block;
              }
            }
          }


        }
      }
      .slider_container_second {
          max-width: 910px;
          width: 100%;
        .custom-swiper {
          max-width: 910px;
          width: 100%;
          height: 420px;
          position: relative;

          .slide {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
          }

          .swiper-pagination {
            position: absolute;
            bottom: 20px;
            left: 20px;
            display: flex;
            gap: 15px;
            z-index: 10;

            .swiper-pagination-bullet {
              max-width: 13px;
              width: 100%;
              min-height: 13px;
              background: transparent;
              position: relative;
              transform: rotate(45deg);

              &::before {
                content: '';
                position: absolute;
                inset: 0;
                background-color: white;
                transition: transform 0.3s ease, background-color 0.3s ease;
              }

              &-active::before {
                background-color: white;
              }
            }
          }

          // Обёртка для кнопок
          .swiper-button-wrapper {
            max-width: 123px;
            width: 100%;
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 15px;
            z-index: 10;

            .swiper-button-prev,
            .swiper-button-next {
              display: flex;
              width: 54px;
              height: 32px;
              background: none;
              border: none;
              cursor: pointer;
              position: relative;

              &::after {
                display: none;
              }

              img {
                width: 100%;
                height: auto;
                display: block;
              }
            }
          }


        }
      }
    }
  }
  .bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1920px;
    width: 100%;
    padding: 60px 50px;
    .left{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      max-width: 455px;
      width: 100%;
      .left_button{
        max-width: 170px;
        width: 100%;
        padding: 30px 60px;
        border: 1px #848386 solid;
        background: #fff;
        border-radius: 1000px;
        opacity: 40% ;
        font-size: 18px;
        font-weight: 500;
        line-height: 120%;
        cursor: pointer;
        &:hover{
          opacity: 100%;

        }
        }
      p{
        font-size: 30px;
        font-weight: 400;
        line-height: 120%;
      }
    }
    .right{
      max-width: 455px;
      width: 100%;
      border: 1px #848386 solid;
      background: #fff;
      border-radius:1000px ;
      color: #848386;
      font-size: 18px;
      font-weight: 500;
      line-height: 120%;
      cursor: pointer;
    }
  }
}
@media (max-width:1170px) {
  .Our_project{
    display: flex;
    gap: 30px;
    
    .apartments{
      .apartment{
        display: flex;
        flex-direction: column;
        align-items: center;
        .info{
          display: flex;
          max-width: none;
          gap: 32px;
          .name{
            font-size: 24px;
          }
          
        }
      }
    }
    .bottom{
      display: flex;
      justify-content: center;
      .left{
        display: none;
      }
      .right{
        padding: 20px 130px;
      }
    }
  }
}
@media (max-width:768px) {
  .Our_project{
    .title{
      font-size: 2.5rem;
    }
  }
  
}
@media (max-width: 375px) {
  .slider_container,
  .slider_container_second {
    width: 100%;
    overflow: hidden;

    .custom-swiper {
      width: 100%;
      height: 240px !important;
      overflow: visible; // <--- !!! нужно, чтобы выглядывало
      .swiper-slide {
        width: 310px !important;
        flex-shrink: 0;
      }
      .slide {
        width: 310px !important; // фиксируем ширину — ключ к success
        height: 240px !important;
        border-radius: 10px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
      }

      .swiper-pagination,
      .swiper-button-wrapper {
        display: none !important;
      }
    }
  }
}
@media (max-width: 375px) {
  .Our_project{
    display: flex;
    align-items: start;
    
    .pc{
      display: none;
    }
    .mobile{
      display: flex;
      font-size: 24px;
      max-width: 277px;
      width: 100%;
      margin: 0px 0px 0px 15px;
    }
    .apartments{
      .apartment{
        padding: 30px 0px 30px 15px ;
        gap: 30px;
        .info{
          gap: 30px;
          .romb_text{
            img{
              width: 14px;
            }
            p{
              font-size: 14px;
            }
          }
          .name{
            font-size: 20px;
            sup{
              font-size: 14px;
            }
          }
          .price{
            font-size: 14px;
          }
        }
      }
    }
    .bottom{
      padding: 0px 15px;
      
      .right{
        padding: 20px 130px;
        font-size: 14px;
      }
    }
  }
}
</style>
