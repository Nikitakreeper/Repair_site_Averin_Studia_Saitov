<script>

</script>

<template>
    <div class="heroblock">
        <div class="herotext_first">
            <h1>Ремонт и<br>отделка в Сочи</h1>
            <div class="line"></div>
            <div class="romb_text">
                <img src="../assets/img/Romb.svg" alt="">
                <p>Отремонтируем ваш дом,<br>квартиру или комнату</p>
            </div>
        </div>
        <div class="herotext_second">
            <h2>Все виды услуг по ремонту,<br>отделке и проектированию</h2>
            <button>Заказать ремонт</button>
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
      }

    .heroblock{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-repeat: no-repeat;
        padding: 194px 0px 50px 0px;
        gap: 288px;
        background-image: url(../assets/img/HeroFon.png);
        .herotext_first{
            display: flex;
            gap: 50px;
            flex-direction: column;
            h1{
                max-width: 983px;
                padding: 0px 0px 0px 50px;
                width: 100%;
                font-size: 120px;
                font-weight: 500;
                line-height: 100%;
                letter-spacing: -2%;
                color: #FFFBFC;
            }
            .line{
                max-width: 1920px;
                height: 1px;
                opacity: 10%;
                width: 100%;
                background: #FFFBFC;
            }
            .romb_text{
                max-width: 308px;
                width: 100%;
                padding: 0px 0px 0px 50px;
                display: flex;
                flex-direction: row;
                gap: 15px;
                color: #FFFBFC;
                p{
                    line-height: 130%;
                    font-size: 18px;
                }
            }
        }   
    .herotext_second{
        display: flex;
        flex-direction: row;
        gap: 41px;
        justify-content: end;
        padding: 0px 50px 50px 0px;
        h2{
            color: #FFFBFC;
            font-size: 30px;
            font-weight: 400;
            letter-spacing: -1%;
            line-height: 120%;
            max-width: 439px;
            width: 100%;
        }
        button{
            display: flex;
            align-items: center;
            max-width: 430px;
            height: 73px;
            width: 100%;
            padding: 30px 141px;
            border-radius: 1000px;
            background: #FFFBFC;
            font-size: 18px;
            font-weight: 500;
            color: #848386;
            cursor: pointer;
        }
    }
    }
    @media (max-width:950px) {
        .heroblock{
            .herotext_first{
                h1{
                    font-size: 60px;
                }
            }
        }
        
    }
    @media (max-width:768px) {
        .heroblock{
            .herotext_second{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
    }
    @media (max-width:375px) {
        .heroblock{
            display: flex;
            gap: 330px;
            background-image: none;
            background-image: url(../assets/img/HeroMobile.png);
            padding: 127px 0px 0px 0px;
            .herotext_first{
                h1{
                    font-size: 2.25rem;
                    padding: 0px 0px 0px 15px;
                }
                .romb_text{
                    padding: 0px 0px 0px 15px;
                    p{
                        font-size: .875rem;
                    }
                }
            }
            .herotext_second{
                display: flex;
                gap: 30px;
                padding: 0px 15px 15px 15px;
                h2{
                    font-size: 20px;
                }
                button{
                    max-width: 345px;
                    width: 100%;
                    height: 50px;
                    font-size: 14px;
                    padding: 20px 115px

                }
            }
        }
        
    }
</style>