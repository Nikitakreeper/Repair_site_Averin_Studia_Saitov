<script>

</script>

<template>
    <section class="Realize">
        <div class="text">
            <h1>Реализуем проект в вашем помещении!</h1>
            <div class="romb_text">
                <img src="../assets/img/Romp_black.svg" alt="">
                <p class="pc">Скидка 20% при первом заказе</p>
                <p class="mobile">Только для вас</p>
            </div>
        </div>
        <div class="button_container">
            <button>Заказать ремонт</button>
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
        max-width: 120rem;
        width: 100%;
        background-image: url("../assets/img/RealizeFon.png");
        gap: 35.625rem;
        .text{
            display: flex;
            flex-direction: column;
            gap: 3.75rem;
            padding: 3.125rem 0rem 0rem 3.125rem;
            h1{
                max-width: 56.875rem;
                width: 100%;
                font-size: 4rem;
                font-weight: 500;
                line-height: 130%;
                letter-spacing: -2%;
                color: #0a0a0a;
            }
            .romb_text{
                display: flex;
                flex-direction: row;
                gap: .9375rem;
                .pc{
                    font-size: 1.125rem;
                    font-weight: 400;
                    line-height: 130%;
                    color: #0a0a0a;
                }
                .mobile{
                    display: none;
                }
            }
        }
        .button_container{
            display: flex;
            justify-content: end;
            padding: 0rem 3.125rem 3.125rem 0rem;
            button{
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 26.875rem;
            height: 4.5625rem;
            width: 100%;
            padding: 1.875rem 8.8125rem;
            border-radius: 62.5rem;
            background: #FFFBFC;
            font-size: 1.125rem;
            font-weight: 500;
            color: #848386;
            cursor: pointer;
        }
        }
    }
    @media (max-width:768px) {
        .Realize{
            .text{
                h1{
                    font-size: 2.5rem;
                }
                .romb_text{
                    p{
                        font-size: .875rem;
                    }
                }
            }
            .button_container{
                button{
                    
                    
                    font-size: 1rem;
                }
            }
        }
        
    }
    @media (max-width:375px) {
        .Realize{
            background-image: none;
            background-image: url(../assets/img/RealizeMobile.png);
            background-repeat: no-repeat;
            gap: 330px;
            .text{
                padding: 30px 0px 0px 15px;
                h1{
                    font-size: 24px;
                }
                .romb_text{
                    img{
                        max-width: 14px;
                        width: 100%;
                    }
                    .pc{
                        display: none;
                    }
                    .mobile{
                        display: flex;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 130%;
                        color: #0a0a0a;
                    }
                }
            }
            .button_container{
                display: flex;
                padding: 0px 15px 30px 0px;
                button{
                    max-width: 345px;
                    width: 100%;
                    height: 50px;
                    font-size: 14px;
                    padding: 20px 117px
                }
            }
        }
        
    }
</style>