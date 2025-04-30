<script>

</script>

<template>
    <section class="Ready">
        <div class="title">
            <p>Готовые пакеты услуг, в зависимости от количества м<sup>2</sup></p>
        </div>
        <div class="services">
            <div class="service">
                <div class="first">
                    <div class="romb_text">
                        <img src="../assets/img/Romp_brown.svg" alt="">
                        <p class="type">Для квартир</p>
                    </div>
                    <div class="name">
                        <p>Бюджетная отделка и ремонт квартиры</p>
                    </div>
                </div>
                <div class="second">
                    <div class="price">от 14.000 ₽ за м<sup>2</sup></div>
                    <div class="details">
                        <li><a href="">Подробнее</a></li>
                    </div>
                </div>
            </div>
            <div class="service">
                <div class="first">
                    <div class="romb_text">
                        <img src="../assets/img/Romp_brown.svg" alt="">
                        <p class="type">Любая недвижимость</p>
                    </div>
                    <div class="name">
                        <p>Уникальный дизайнерский ремонт</p>
                    </div>
                </div>
                <div class="second">
                    <div class="price">от 16.000 ₽ за м<sup>2</sup></div>
                    <div class="details">
                        <li><a href="">Подробнее</a></li>
                    </div>
                </div>
            </div>
            <div class="service">
                <div class="first">
                    <div class="romb_text">
                        <img src="../assets/img/Romp_brown.svg" alt="">
                        <p class="type">Любая недвижимость</p>
                    </div>
                    <div class="name">
                        <p>Премиум, лакшери отделка и ремонт</p>
                    </div>
                </div>
                <div class="second">
                    <div class="price">от 40.000 ₽ за м<sup>2</sup></div>
                    <div class="details">
                        <li><a href="">Подробнее</a></li>
                    </div>
                </div>
            </div>
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
      }
    .Ready{
        display: flex;
        flex-direction: column;
        gap: 60px;
        .title{
            display: flex;
            justify-content: center;
            p{ 
                max-width: 940px;
                width: 100%;
                font-size: 64px;
                font-weight: 500;
                letter-spacing: -10%;
                color: #40362E;
                sup{
                    font-size: 40px;
                }
            }
        }
        .services{
            display: flex;
            flex-direction: column;
            max-width: 1920px;
            width: 100%;
            border-bottom: 1px #E8E8E8 solid;
            .service{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 60px 50px;
                border-top: 1px #E8E8E8 solid;

                .first{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    max-width: 910px;
                    width: 100%;
                    .romb_text{
                        display: flex;
                        flex-direction: row;
                        gap: 15px;
                        img{
                            max-width: 18px;
                            height: 18px;
                            width: 100%;
                        }
                        .type{
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 130%;
                            color: #0a0a0a;
                        }
                    }
                    .name{
                        max-width: 455px;
                        width: 100%;
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 120%;
                        letter-spacing: -1%;
                        color: #0a0a0a;
                    }
                }
                .second{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between; 
                    max-width: 455px;
                    width: 100%;
                    .price{
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                        color: #0a0a0a;
                        sup{
                            font-size: 12px;
                        }
                    }
                    .details{
                        li{
                            a{
                                font-size: 18px;
                                font-weight: 400;
                                line-height: 130%;
                                color: #848386;
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:768px) {
        .Ready{
            .title{
                
                p{
                    font-size: 2.5rem;
                }
            }
            .services{
                .service{
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    .first{
                        display: flex;
                        flex-direction: column;
                        gap: 32px;
                    }
                    .second{
                        display: flex;
                        justify-content: space-between;
                    }
                }
            }
        }
        
    }
    @media (max-width:375px) {
        .Ready{
            display: flex;
            gap: 30px;
            .title{
                max-width: 280px;
                width: 100%;
                padding: 0px 0px 0px 15px;
                p{
                    font-size: 24px;
                    sup{
                        font-size: 18px;
                    }
                }
            }
            .services{
                .service{
                    padding: 30px 15px;
                    gap: 50px;
                    .first{
                        gap: 30px;
                        .romb_text{

                            img{
                                max-width: 14px;
                                width: 100%;
                            }
                            .type{
                                font-size: 14px;
                            }
                        }
                        .name{
                            max-width: 247px;
                            width: 100%;
                            font-size: 20px;
                        }
                    }
                    .second{
                        .price{
                            font-size: 14px;
                            sup{
                                font-size: 10px;
                            }
                        }
                        .details{
                            li{
                                a{
                                    font-size: 14px;

                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
</style>