<script>

</script>

<template>
    <section class="Search">
        <div class="left">
            <a href="/Home">Главная</a>
            <p>|</p>
            <a href="/Catalog">Каталог</a>
        </div>
        <div class="right">
            <div class="title">
                <p>Каталог</p>
            </div>
            <div class="filter">
                <p>По виду</p>
                <p>По количеству комнат</p>
                <p>По типу</p>
                <p>Дизайн интерьера</p>
                <p>Ремонт коттеджей</p>
            </div>
            <div class="input-wrapper">
              <img src="/src/assets/img/search_icon.svg" alt="">
              <input type="text" placeholder="Что мы ищем?" />
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
  font-family: 'Manrope', sans-serif;
}

.Search{
    display: flex;
    flex-direction: row;
    max-width: 1920px;
    width: 100%;
    justify-content: space-between;
    padding: 227px 122px 0px 50px;
    .left{
        display: flex;
        flex-direction: row;
        gap: 10px;
        a{
            font-size: 18px;
            font-weight: 400;
            line-height: 130%;
            color: #848386;
            &:hover{
                color: #40362E;
            }
        }
        p{
            font-size: 18px;
            font-weight: 400;
            line-height: 130%;
            color: #848386;
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        gap: 100px;
        .title{
            font-size: 120px;
            font-weight: 500;
            letter-spacing: -2%;
            color: #40362E;
            line-height: 0.8;
        }
        .filter{
            display: flex;
            flex-direction: row;
            gap: 60px;
            p{
                font-size: 30px;
                font-weight: 400;
                line-height: 120%;
                letter-spacing: -1%;
                color: #848386;
                opacity: 40%;
                cursor: pointer;
                &:hover{
                    opacity: 100%;
                }
            }
        }
        .input-wrapper {
          max-width: 910px;
          width: 100%;
          gap: 15px;
          padding: 0px 0px 0px 26px;
          height: 73px;
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 1px #EBEBEB solid;
          border-radius: 3px;
                
          img {
            width: 20px;
            height: 20px;
            opacity: 30%;
          }
      
          input {
            width: 100%;
            font-size: 18px;
        
            &::placeholder {
              font-size: 18px;
              font-weight: 400;
              line-height: 130%;
              color: #aaa; // можно настроить цвет
            }
          }
        }

        

        

    }
}
@media (max-width:1030px) {
    .Search{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        .right{
            gap: 50px;
            .title{
                font-size: 80px;
            }
            .filter{
                display: flex;
                flex-direction: column;
                p{
                    font-size: 24px;
                }
            }
        }
    }
    
}
@media (max-width:375px) {
  .Search{
    display: flex;
    align-items: start;
    padding: 107px 15px 0px 15px;
    .left{
        a{
            font-size: 14px;
        }
        p{
            font-size: 14px;
        }
    }
    .right{
        max-width: 345px;
        width: 100%;
        .title{
            font-size: 36px;
        }
        .filter{
            gap: 30px;
            p{
                font-size: 20px;
            }
        }
        .input-wrapper{
            padding: 0px 0px 0px 15px;
            height: 50px;
            max-width: 345px;
            width: 100%;
        }
    }
  }
  
 }
</style>