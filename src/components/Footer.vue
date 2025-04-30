<script>

</script>

<template>
    <section class="Footer">
        <div class="first">
            <img src="../assets/img/FooterLogo.svg" alt="">
            <div class="text">
                <p class="one">Политика конфиденциальности</p>
                <p class="two">© 2017 - 2023 Сочи-Ремонт. Все права защищены. </p>
                <p class="three">Разработано Студией Сайтов</p>
            </div>
        </div>
        <div class="second">
            <nav>
                <ul>
                  <li><a href="">Все услуги</a></li>
                  <li><a href="">Капитальный ремонт</a></li>
                  <li><a href="">Офисный ремонт</a></li>
                  <li><a href="">Черновой ремонт</a></li>
                  <li><a href="">Евроремонт</a></li>
                </ul>
            </nav>
        </div>
        <div class="third">
            <nav>
                <ul>
                  <li><a href="">Акции</a></li>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Отзывы</a></li>
                  <li><a href="">Вопрос-ответ</a></li>
                  <li><a href="">Блог</a></li>
                  <li><a href="">Контакты</a></li>
                  <li><a href="">Карта сайта</a></li>
                </ul>
            </nav>
        </div>
        <div class="fourth">
            <div class="up">
                <div class="text">
                    <p class="black">E-mail</p>
                    <p class="gray">sochi-repair@gmail.com</p>
                </div>
                <div class="text">
                    <p class="black">Номер телефона</p>
                    <p class="gray">+7 (931) 724 09 42</p>
                </div>
                <div class="networks">
                    <img src="../assets/img/vk.svg" alt="">
                    <img src="../assets/img/tg.svg" alt="">
                    <img src="../assets/img/whatsup.svg" alt="">
                    <img src="../assets/img/youtube.svg" alt="">
                    <img src="../assets/img/odnokl.svg" alt="">
                </div>
            </div>
            <button>Обратный звонок</button>
        </div>
    </section>
    <div class="mobile">
        <div class="first_mobile">
            <img src="../assets/logo/logo_brown.svg" alt="">
            <nav>
                <ul>
                  <li><a href="">Услуги</a></li>
                  <li><a href="">Акции</a></li>
                  <li><a href="">О нас</a></li>
                  <li><a href="">Отзывы</a></li>
                  <li><a href="">Вопрос-ответ</a></li>
                  <li><a href="">Блог</a></li>
                  <li><a href="">Контакты</a></li>
                </ul>
            </nav>
        </div>
        <div class="second_mobile">
            <div class="up">
                <div class="text">
                    <p class="black">E-mail</p>
                    <p class="gray">sochi-repair@gmail.com</p>
                </div>
                <div class="text">
                    <p class="black">Номер телефона</p>
                    <p class="gray">+7 (931) 724 09 42</p>
                </div>
                <div class="networks">
                    <img src="../assets/img/vk.svg" alt="">
                    <img src="../assets/img/tg.svg" alt="">
                    <img src="../assets/img/whatsup.svg" alt="">
                    <img src="../assets/img/youtube.svg" alt="">
                    <img src="../assets/img/odnokl.svg" alt="">
                </div>
            </div>
            <button>Обратный звонок</button>
            <div class="gray_text">
                <p>Политика конфиденциальности</p>
                <p>© 2017 - 2023 Сочи-Ремонт. Все права защищены. </p>
                <p>Разработано Студией Сайтов</p>
            </div>
        </div>
    </div>
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
    
      .Footer{
        display: flex;
        flex-direction: row;
        padding: 80px 50px;
        gap: 95px;
        .first{
            max-width: 360px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 212px;
            img{
                max-width: 125px;
                width: 100%;
            }
            .text{
                display: flex;
                flex-direction: column;
                gap: 30px;
                .one{
                    max-width: 273px;
                    width: 100%;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #CECECE;
                }
                .two{
                    max-width: 247px;
                    width: 100%;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #CECECE;
                }
                .three{
                    max-width: 254px;
                    width: 100%;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #CECECE;
                }
            }
        }
        .second{
            max-width: 360px;
            width: 100%;
            display: flex;
            flex-direction: column;
            nav{
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    li{
                        
                        a{
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 120%;
                            letter-spacing: -1%;
                            color: #0a0a0a;
                        }
                    }
                }
            }
        }
        .third{
            max-width: 360px;
            width: 100%;
            display: flex;
            flex-direction: column;
            nav{
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    li{
                        
                        a{
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 120%;
                            letter-spacing: -1%;
                            color: #0a0a0a;
                        }
                    }
                }
            }
        }
        .fourth{
            max-width: 455px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 161px;
            .up{
                display: flex;
                flex-direction: column;
                gap: 50px;
                .text{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    .black{
                        color: #0a0a0a;
                    }
                    .gray{
                        color: #848386;
                    }
                }
                .networks{
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                }
            }
            button{
                max-width: 455px;
                width: 100%;
                padding: 30px 60px;
                background: #ffff;
                border: 1px #848386 solid;
                border-radius: 1000px;
                font-size: 18px;
                font-weight: 500;
                line-height: 120%;
                color: #848386;
                cursor: pointer;
            }
        }
      }
      .mobile{
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 80px;
        .first_mobile{
            display: flex;
            flex-direction: column;
            gap: 71px;
            img{
                max-width: 153px;
                width: 100%;
            }
            nav{
                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    li{
                        a{
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 120%;
                            letter-spacing: -1%;
                            color: #0a0a0a;
                        }
                    }
                }
            }
        }
        .second_mobile{
            display: flex;
            flex-direction: column;
            gap: 50px;
            .up{
                display: flex;
                flex-direction: column;
                gap: 30px;
                .text{
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 130%;
                    .black{
                        color: #0a0a0a;
                    }
                    .gray{
                        color: #848386;
                    }
                }
                .networks{
                    display: flex;
                    flex-direction: row;
                    max-width: 40px;
                    width: 100%;
                    gap: 15px;
                }
            }
            button{
                max-width: 345px;
                width: 100%;
                padding: 20px 60px;
                background: #ffff;
                border: 1px #848386 solid;
                border-radius: 1000px;
                font-size: 14px;
                font-weight: 500;
                line-height: 120%;
                color: #848386;
                cursor: pointer;
            }
            .gray_text{
                display: flex;
                flex-direction: column;
                gap: 30px;
                max-width: 328px;
                width: 100%;
                p{
                    font-size: 14px ;
                    font-weight: 400 ;
                    line-height: 130%;
                    color: #0a0a0a;
                    opacity: 20%;
                }
            }
        }
      }
    @media (max-width: 1200px) {
        .mobile{
            display: flex;
        }
    }
    @media (max-width: 1200px) {
        .Footer{
            display: none;
        }
    }
    @media (max-width:375px) {
        .mobile{
            display: flex;
            .first_mobile{
                max-width: 375px;
                width: 100%;
                padding: 15px 0px 0px 15px;
                display: flex;
                justify-content: start;
            }
        }
        
    }
</style>