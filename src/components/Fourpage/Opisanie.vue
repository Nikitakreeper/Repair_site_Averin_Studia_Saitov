<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    function goHome() {
      router.push('/Home')
    }
</script>

<template>
    <div class="container">
        <section class="Opisanie">
            <div class="up">
                <a href="/Catalog">Назад</a>
                <p class="title">Успешно!</p>
            </div>
            <div class="down_container">
                <div class="down">
                    <div class="romb_text">
                        <img src="/src/assets/img/Romp_brown.svg" alt="">
                        <p>Ваша заявка отправлена,<br>мы скоро свяжемся с Вами</p>
                    </div>
                </div>
            </div>

        </section>
        <div class="button_container">
            <button @click="goHome">На главную</button>
        </div>
    </div>
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

    .container{
        display: flex;
        flex-direction: column;
        gap: 270px;
        .Opisanie{
        display: flex;
        flex-direction: column;
        .up{
            display: flex;
            justify-content: space-between;
            max-width: 988px;
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
                
            }
        }
        
    }
    .button_container{
        display: flex;
        justify-content: end;
        padding: 0px 50px 0px 0px;
        button{
            font-size: 18px;
            font-weight: 400;
            line-height: 120%;
            color: #848386;
            max-width: 455px;
            width: 100%;
            background: #ffffff;
            border: 1px #848386 solid;
            color: #848386;
            padding: 30px ;
            border-radius: 1000px;
            cursor: pointer;
        }
    }
    }
    @media (max-width:900px) {
        .container{
            .Opisanie{
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
    }
    @media (max-width:560px) {
        .container{
            .Opisanie{
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
        
    }
    @media (max-width:375px) {
        .container{
            .Opisanie{
            .up{
                gap: 50px;
                padding-left: 15px;
                padding-bottom: 30px;
                p{
                    font-size: 36px;
                }
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
                       
                    }
                }
            }
        }
        .button_container{
            padding: 0px 15px 0px 0px;
            button{
                padding: 15px;
                font-size: 14px;

            }
        }
    }
        
}
</style>