<script>

</script>

<template>
    <section class="Repair">
        <div class="items">
            <div class="item brown">
                <div class="first">
                    <div class="romb_text">
                        <img src="/src/assets/img/Romb.svg" alt="">
                        <p class="type">По виду</p>
                    </div>
                    <p class="name">Черновой ремонт</p>
                </div>
                <img class="repair-photo" src="/src/assets/img/RepairPhoto.png" alt="">
                <div class="second">
                    <p class="price">от 6.000 ₽ за м<sup>2</sup></p>
                    <p class="details brown_detail">Подробнее</p>
                </div>
            </div>
            <div class="item white">
                <div class="first">
                    <div class="romb_text">
                        <img src="/src/assets/img/Romp_black.svg" alt="">
                        <p class="type">По виду</p>
                    </div>
                    <a href="/Kap_repair" class="name">Капитальный ремонт</a>
                </div>
                <div class="second">
                    <p class="price">от 14.000 ₽ за м<sup>2</sup></p>
                    <p class="details">Подробнее</p>
                </div>
            </div>
            <div class="item white">
                <div class="first">
                    <div class="romb_text">
                        <img src="/src/assets/img/Romp_black.svg" alt="">
                        <p class="type">По виду</p>
                    </div>
                    <p class="name">Декоративный ремонт</p>
                </div>
                <div class="second">
                    <p class="price">от 8.000 ₽ за м<sup>2</sup></p>
                    <p class="details">Подробнее</p>
                </div>
            </div>
            <div class="item white">
                <div class="first">
                    <div class="romb_text">
                        <img src="/src/assets/img/Romp_black.svg" alt="">
                        <p class="type">По виду</p>
                    </div>
                    <p class="name">Евроремонт</p>
                </div>
                <div class="second">
                    <p class="price">от 14.000 ₽ за м<sup>2</sup></p>
                    <p class="details">Подробнее</p>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button>Пред.</button>
            <p class="pc">1</p>
            <p class="mobile">1стр.</p>
            <button>След.</button>
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

    .Repair{
        display: flex;
        flex-direction: column;
        gap: 60px;
        .items{
            display: flex;
            flex-direction: column;
            border-bottom: 1px #EAEAEA solid;
            .item{
                max-width: 1920px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 61px 50px 61px 50px;
                border-top: 1px #EAEAEA solid;
                position: relative; // Обязательно, чтобы абсолютное позиционирование работало внутри
                overflow: visible;
                .first{
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    max-width: 772px;
                    width: 100%;
                    .romb_text{
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        img{
                            width: 18px;
                        }
                        p{
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 130%;
                        }
                    }
                    .name{
                        display: flex;
                        align-items: center;
                        max-width: 322px;
                        width: 100%;
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 120%;
                        cursor: pointer;
                    }
                    a{
                        display: flex;
                        align-items: center;
                        max-width: 322px;
                        width: 100%;
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 120%;
                        cursor: pointer;
                        color: #0a0a0a;
                    }

                }
                .second{
                    display: flex;
                    flex-direction: row;
                    max-width: 455px;
                    width: 100%;
                    justify-content: space-between;
                    .price{
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                    }
                    .details{
                        color: #848386;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                        text-decoration: underline;
                    }
                    .brown_detail{
                        color: #FFFBFC;
                    }
                }
                
                img.repair-photo {
                  position: absolute;
                  bottom: -80px; // Насколько выглядывает вниз (регулируйте по необходимости)
                  right: 580px;      // Или left, в зависимости от нужного расположения
                  z-index: 10;
                  height: 322px; // ограничение по размеру (опционально)
                }
                
            }
            .brown{
                background: #40362E;
                color: #FFFBFC;
            }
        }
        .buttons{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end   ;
            padding: 0px 50px 0px 0px;
            gap: 51px;
            button{
                padding: 30px 60px;
                background: #ffffff;
                border: 1px #848386 solid;
                border-radius: 1000px;
                opacity: 40%;
                font-size: 18px;
                font-weight: 500;
                line-height: 120%;
                &:hover{
                    opacity: 100%;
                }
            }
            .pc{
                font-size: 30px;
                font-weight: 400;
                line-height: 120%;
                letter-spacing: -1%;
                color: #0a0a0a;
            }
            .mobile{
                display: none;
            }
        }
    }
    @media (max-width:1790px) {
        .Repair{
            .items{
                .item{
                    .repair-photo{
                        display: none;
                    }
                }
            }
        }
        
    }
    @media (max-width:768px) {
        .Repair{
            .items{
                .item{
                    .first{
                        .name{
                            font-size: 20px;
                        }
                        a{
                            font-size: 20px;
                        }
                    }
                    .second{
                        .price{
                            font-size: 14px;
                        }
                        .details{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        
    }
    @media (max-width:375px) {
        .Repair{
            .items{
                .item{
                    display: flex;
                    flex-direction: column;
                    padding: 30px 15px 31px 15px;
                    gap: 74px;
                    .first{
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                        .romb_text{
                            img{
                                width: 14px;
                            }
                            p{
                                font-size: 14px;
                            }
                        }
                        
                    }
                    .second{
                        gap: 150px;
                    }
                }
            }
            .buttons{
                padding: 0px 15px 0px 0px;
                gap: 29px;
                button{
                    padding: 20px 40px;
                    font-size: 14px;
                    
                }
                .pc{
                    display: none;
                }
                .mobile{
                    display: flex;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 120%;
                    letter-spacing: -1%;
                    color: #0a0a0a;
                }
            }
        }
        
    }
</style>