<script>

</script>

<template>
    <section class="Why">
        <div class="title">
            <p>Почему мы предоставляем лучшие услуги в Сочи</p>
        </div>
        <div class="line"></div>
        <div class="reasons">
            <div class="romb_text">
                <img src="../assets/img/Romp_brown.svg" alt="">
                <p>Преимущества</p>
            </div>
            <div class="right_content">
                <div class="circles">
                    <div class="circle">
                        <p>Уникальный<br>дизайн</p>
                    </div>
                    <div class="circle brown">
                        <p>Лучшие<br>материалы</p>
                    </div>
                    <div class="circle">
                        <p>Быстрое<br>выполнение</p>
                    </div>
                </div>
                <div class="circles_mobile">
                    <img src="../assets/img/whycircles.png" alt="">
                </div>
                <div class="block_bottom">
                    <p>Ремонтируем квартиры уже более 20 лет. Имеем более 60 сотрудников в штате, которые горят своим делом.</p>
                    <button>О компании</button>
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
    .Why{
        display: flex;
        flex-direction: column;
        max-width: 1920px;
        width: 100%;
        background: #0A0A0A;
        gap: 60px;
        .title{
            max-width: 835px;
            width: 100%;
            font-size: 64px;
            font-weight: 500;
            line-height: 130%;
            letter-spacing: -2%;
            color: #FFFBFC;
            padding: 50px 0px 0px 50px;
            p{
                max-width: 835px;
                width: 100%;
            }
        }
        .line{
            max-width: 1920px;
            height: 1px;
            opacity: 10%;
            width: 100%;
            background: #FFFBFC;
        }
        .reasons{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0px 50px 100px 50px;
            .romb_text{
                display: flex;
                flex-direction: row;
                gap: 15px;
                img{
                    max-width: 18px;
                    width: 100%;
                    height: 18px;
                }
                p{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 130%;
                    letter-spacing: -2%;
                    color: #FFFBFC; 
                }
            }
            .right_content{
                display: flex;
                flex-direction: column;
                gap: 80px;
                max-width: 1365px;
                width: 100%;
                .circles{
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: row;
                        justify-content: space-between;
                        max-width: 1365px;
                        width: 100%;
                    .circle{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        max-width: 428px;
                        height: 428px;
                        width: 100%;
                        border: 1px #40362E solid;
                        border-radius: 1000px;
                        p{
                            max-width: 200px;
                            width: 100%;
                            font-size: 30px;
                            font-weight: 400;
                            line-height: 120%;
                            letter-spacing: -1%;
                            text-align: center;
                            color: #FFFBFC; 
                        }
                    }
                    .brown{
                        background: #40362E;
                    }
                }
                .circles_mobile{
                    display: none;
                }
                .block_bottom{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    max-width: 1365px;
                    width: 100%;
                    justify-content: space-between;
                    p{
                        max-width: 604px;
                        width: 100%;
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 120%;
                        letter-spacing: -1%;
                        color: #848386; 
                    }
                    button{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        max-width: 430px;
                        height: 73px;
                        width: 100%;
                        padding: 30px 141px;
                        border-radius: 1000px;
                        background: #0A0A0A;
                        border: 1px #848386 solid;
                        font-size: 18px;
                        font-weight: 500;
                        color: #848386;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    @media (max-width: 1530px) {
        .Why{
            .reasons{
                .right_content{
                    .circles{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                }
            }
        }
    }
    @media (max-width:1100px) {
        .Why{
            .reasons{
                .right_content{
                    .block_bottom{
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
        
    }
    @media (max-width:768px) {
        .Why{
            .title{
                font-size: 2.5rem;
            }
            .reasons{
                display: flex;
                flex-direction: column;
                .right_content{
                    .circles{
                        display: flex;
                        gap: 20px;
                        .circle{
                            max-width: 250px;
                            height: 250px;
                            width: 100%;
                            p{
                                font-size: 20px;
                            }
                        }
                    }
                    .block_bottom{
                        display: flex;
                        gap: 50px;
                        p{
                            font-size: 1.25rem;
                        }
                        button{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        
    }
    @media (max-width:375px) {
        .Why{
            gap: 30px;
            .title{
                max-width: 270px;
                width: 100%;
                font-size: 24px;
                line-height: 120%;
                font-weight: 500;
                padding: 30px 0px 0px 15px;
                
            }
            .reasons{
                padding: 0px 15px 30px 15px;
                gap: 50px;
                .romb_text{
                    img{
                        max-width: 14px;
                        width: 100%;
                    }
                    p{
                        font-size: 14px;
                    }
                }
                .right_content{
                    gap: 50px;
                    .circles{
                        display: none;
                    }
                    .circles_mobile{
                        display: flex;
                        max-width: 345px;
                        width: 100%;
                    }
                    .block_bottom{
                        p{
                            max-width: 345px;
                            width: 100%;
                            font-size: 20px;
                        }
                        button{
                            max-width: 345px;
                            width: 100%;
                            font-size: 14px;
                            padding: 20px 132px;
                            height: 50px;
                        }
                    }
                }
            }
        }
        
    }
</style>