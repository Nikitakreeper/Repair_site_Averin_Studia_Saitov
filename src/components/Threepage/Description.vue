<script>

</script>

<template>
    <section class="Description">
        <div class="up">
            <a href="/Catalog">Назад</a>
            <p class="title">Капитальный ремонт</p>
        </div>
        
        <div class="down_container">
            <div class="down">
                <div class="romb_text">
                    <img src="/src/assets/img/Romp_brown.svg" alt="">
                    <p>Для всех видов недвижимости</p>
                </div>
                <p class="gray">Первым делом осуществляется выравниванием стен, а также потолка и полов. Затем выполняется полный демонтаж полового покрытия, а также перегородок и стенок. После выполнения всех этих работ дело доходит до замены сантехники и электрики. Капитальный ремонта в Сочи завершается укладкой паркета, монтажом плинтусов и бытового оборудования, а также многими другими финальными ремонтными работами.</p>
                <div class="right">
                    <p>от 20.000 ₽ за м<sup>2</sup></p>
                    <button>Заказать ремонт</button>
                </div>
            </div>
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
      font-family: 'Manrope', sans-serif;
    }

    .Description{
        display: flex;
        flex-direction: column;
        .up{
            display: flex;
            justify-content: space-between;
            max-width: 1637px;
            padding-left: 50px;
            padding-bottom: 60px;
            width: 100%;
            a{
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #848386;
                text-decoration: underline;
            }
            p{
                font-size: 120px;
                font-weight: 500;
                letter-spacing: -2%;
                line-height: 0.8;
                color: #40362E;
            }
        }
        .down_container{
            max-width: 1920px;
            width: 100%;
            border-top: 1px #EAEAEA solid;
            .down{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 60px 50px 0px 50px;
                .romb_text{
                    display: flex;
                    flex-direction: row;
                    gap: 15px;
                    img{
                        width: 18px;
                        height: 18px;
                    }
                    p{
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                        color: #0a0a0a;
                        max-width: 262px;
                        width: 100%;
                    }
                }
                .gray{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    color: #848386;
                    max-width: 714px;
                    width: 100%;
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    p{
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                        color: #0a0a0a;
                    }
                    button{
                        max-width: 455px;
                        width: 100%;
                        padding: 25px 154px;
                        background: #ffffff;
                        border-radius: 1000px;
                        border: 1px #848386 solid;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 120%;
                        color: #848386;
                        cursor: pointer;
                    }
                }
            }
        }
        
    }
    @media (max-width:900px) {
        .Description{
            .up{
                display: flex;
                flex-direction: column;
                .title{
                    font-size: 48px;
                }
            }
            .down_container{
                .down{
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
            }
        }
    }
    @media (max-width:560px) {
        .Description{
            .down_container{
                .down{
                    .right{
                        button{
                            padding: 20px 100px;
                        }
                    }
                }
            }
        }
        
    }
    @media (max-width:375px) {
        .Description{
            .up{
                gap: 50px;
                padding-left: 15px;
                padding-bottom: 30px;
            }
            .down_container
            {
                .down{
                    padding: 30px 15px 0px 15px;
                    .romb_text{
                        img{
                            width: 14px;
                            height: 14px;
                        }
                        p{
                            font-size: 14px;
                        }
                    }
                    .gray{
                        font-size: 14px;
                    }
                    .right{
                        gap: 38px;
                        flex-direction: row;
                        align-items: center;
                        p{
                            font-size: 14px;
                            sup{
                                font-size: 8px;
                            }
                        }
                        button{
                            max-width: 195px;
                            width: 100%;
                            padding: 20px 40px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        
    }
</style>