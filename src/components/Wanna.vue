<script>

</script>

<template>
    <section class="Realize">
        <div class="text">
            <h1>Захочется приглашать гостей каждый день</h1>
            <h1 class="title_mobile">Вам захочется приглашать гостей каждый день</h1>
            <div class="romb_text">
                <img src="../assets/img/Romb.svg" alt="">
                <p class="pc">Скидка 20% при первом заказе</p>
                <p class="romb_mobile">Только для вас</p>
            </div>
        </div>
        <div class="buttons_container">
            <div class="buttons">
                <div class="button_circle">
                    <img src="../assets/img/arrow_up.svg" alt="">
                </div>
                <div class="button_container">
                    <button>Заказать ремонт</button>
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
    .Realize{
        display: flex;
        flex-direction: column;
        max-width: 1920px;
        width: 100%;
        background-image: url("../assets/img/WannaFon.png");
        background-repeat: no-repeat;
        gap: 570px;
        .text{
            display: flex;
            flex-direction: column;
            gap: 60px;
            padding: 50px 0px 0px 50px;
            h1{
                max-width: 950px;
                width: 100%;
                font-size: 64px;
                font-weight: 500;
                line-height: 130%;
                letter-spacing: -2%;
                color: #FFFBFC;
            }
            .title_mobile{
                display: none;
                font-size: 24px;
                font-weight: 500;
                line-height: 120%;
                letter-spacing: -2%;
                color: #FFFBFC;
            }
            .romb_text{
                display: flex;
                flex-direction: row;
                gap: 15px;
                .pc{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #FFFBFC;
                }
                .romb_mobile{
                    display: none;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #FFFBFC;
                }
            }
        }
        .buttons_container{
            display: flex;
            justify-content: end;
            .buttons{
                display: flex;
                
                flex-direction: row;
                justify-content: space-between;
                max-width: 947px;
                width: 100%;
                .button_circle{
                    max-width: 73px;
                    max-height: 73px;
                    width: 100%;
                    width: 100%;
                    background: #FFFBFC;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 28px;
                    border-radius: 1000px;
                    border: 1px #848386 solid;
                    cursor: pointer;
                }
                .button_container{
                    display: flex;
                    padding: 0px 50px 50px 0px;
                    button{
                        display: flex;
                        align-items: center;
                        max-width: 455px;
                        width: 100%;
                        padding: 30px 153px;
                        border-radius: 1000px;
                        background: #FFFBFC;
                        font-size: 18px;
                        font-weight: 500;
                        color: #848386;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    @media (max-width:768px) {
        .Realize{
            .text{
                h1{
                    font-size: 2.5rem;
                }
            }
            .buttons_container{
                display: flex;
                justify-content: center ;
                align-items: center;
                .buttons{
                    display: flex;
                    justify-content: center;
                    .button_circle{
                        display: none;
                    }
                    .button_container{
                        padding: 0px 0px 50px 0px;
                        button{
                            font-size: 1rem;
                        }
                        
                    }
                }
            }
        }
        
    }

    @media (max-width:375px) {
        .Realize{
            background-image: none;
            background-image: url(../assets/img/WannaMobile.png);
            gap: 330px;
            .text{
                padding: 30px 0px 0px 15px;
                gap: 30px;
                h1{
                    display: none;
                }
                .title_mobile{
                    display: flex;
                }
                .romb_text{
                    img{
                        max-width: 14px;
                        width: 100%;
                    }
                    .pc{
                        display: none;
                    }
                    .romb_mobile{
                        display: flex;
                    }
                }
            }
            .buttons_container{
                display: flex;
                justify-content: center ;
                align-items: center;
                .buttons{
                    display: flex;
                    justify-content: center;
                    .button_circle{
                        display: none;
                    }
                    .button_container{
                        padding: 0px 0px 15px 0px;
                        button{
                            font-size: 1rem;
                            font-size: 14px;
                            padding: 20px 115px;
                            max-width: 345px;
                            width: 100%;
                            height: 50px;
                        }
                        
                    }
                }
            }
        }
        
    }
</style>