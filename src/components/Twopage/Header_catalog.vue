<script>
export default {
  name: "HeaderWithForm",
  data() {
    return {
      isModalOpen: false,
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      console.log('Форма отправлена:', this.name, this.email, this.message);
      this.closeModal();
      this.$router.push('/Successfully'); // Программная навигация
    }
  }
};
</script>

<template>
  <div>
    <header>
      <img class="logo_desktop" src="/src/assets/logo/logo_catalog.svg" alt="">
      <img class="logo_mobile" src="/src/assets/logo/logo_mobile.svg" alt="">
      <nav>
        <ul>
          <li><a href="/Catalog">Каталог</a></li>
          <li><a href="">Портфолио</a></li>
          <li><a href="">Акции</a></li>
          <li><a href="">О компании</a></li>
          <li><a href="">Контакты</a></li>
        </ul>
      </nav>
      <p class="number">+7 (931) 724 09 42</p>
      <!-- КНОПКА ОТКРЫТИЯ МОДАЛКИ -->
      <li><a href="#" @click.prevent="openModal">Оформить заявку</a></li>
      <a class="mobile" href="">Меню</a>
    </header>

    <!-- МОДАЛЬНОЕ ОКНО -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="up_container">
          <div class="up">
            <h2>Оформить заявку</h2>
            <button class="close-btn" @click="closeModal">✖</button>
          </div>
        </div>
        <form @submit.prevent="submitForm">
         <div class="main_form">
          <div class="left">
            <div class="names">
              <div class="name">
                <p>Имя</p>
                <input v-model="name" type="text" required />
              </div>
              <div class="surname">
                <p>Фамилия</p>
                <input type="text"  required />
              </div>
            </div>
            <div class="phone">
                <p>Номер телефона</p>
                <input type="tel" id="phone" name="phone" required pattern="\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}" placeholder="+7">
                
                
            </div>
          </div>
          <div class="right">
            <div class="email">
              <p>E-mail (Почта)</p>
              <input v-model="email" type="email" placeholder="Email" required />
            </div>
            <div class="type">
              <label for="repairs">Тип услуги</label>
              <select id="repairs">
                <option value="apple">Капитальный ремонт</option>
                <option value="banana">Декоративный ремонт</option>
                <option value="orange">Евроремонт</option>
              </select>
            </div>
          </div>
         </div>
          <div class="down">
            <p>Нажимая кнопку “Отправить” вы даете согласие на обработку персональных данных</p>
            <button type="submit">Отправить</button>
          </div>
        </form>
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
    
  }

 header{ 
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  padding: 10px 50px 0px 50px;
  color: #FFFBFC;
  background: linear-gradient(
  to bottom,
  #FFFBFC 0%,   // Плотный цвет сверху
  rgba(10, 10, 10, 0) 100% // Прозрачный цвет внизу
);
  .logo_mobile{
    display: none;
  }
  .logo_desktop{
    max-width: 153px;
    width: 100%;
  }
  nav{
    ul{
      display: flex;
      flex-direction: row;
      gap: 30px;
      li{
        a{
          color: #9D9D9D;
          font-size: 18px ;
          &:hover{
            color: #0A0A0A;
          }
        }
      }
    }
  }
  p{
    font-size: 18px ;
    color: #0A0A0A;
  }
  li{
    a{
      color: #0A0A0A;
      border-bottom:#0A0A0A;
      font-size: 18px ;
    }
  }
  .mobile{
    display: none;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
    color: #0A0A0A;
  }
 }
 .modal-overlay {
  position: fixed;
  inset: 0; // аналог top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(10, 10, 10, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 60px 0px;
    gap: 60px;
    border-radius: 3px;
    width: 100%;
    max-width: 1020px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

    .up_container{
      border-bottom: 1px #EAEAEA solid;
      max-width: 1020px;
      width: 100%;
      .up{
        display: flex;
        flex-direction: row;
        max-width: 1200px;
        padding: 0px 60px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        
        h2 {
          margin-bottom: 20px;
          font-size: 64px;
          font-weight: 500;
          letter-spacing: -2%;
          color: #40362E;
        }
        .close-btn {
          font-size: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #999;

          &:hover {
            color: #0a0a0a;
          }
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 0px 60px 0px 60px;
      gap: 60px;

      .main_form{
        display: flex;
        flex-direction: row;
        gap: 50px;
        .left{
          display: flex;
          flex-direction: column;
          gap: 32px;
          .names{
            display: flex;
            flex-direction: row;
            max-width: 425px;
            width: 100%;
            gap: 25px;
            .name{
              max-width: 200px;
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 15px;
              p{
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0A0A0A;
                opacity: 40%;
                }
              input{
                height: 73px;
              }
            }
            .surname{
              max-width: 200px;
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 15px;
              p{
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0A0A0A;
                opacity: 40%;
                }
              input{
                height: 73px;
              }
            }
          }
          .phone{
            max-width: 425px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
            p{
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0A0A0A;
                opacity: 40%;
            }
            input{
                height: 73px;
            }

          }
        }
        .right{
          display: flex;
          flex-direction: column;
          max-width: 425px;
          gap: 32px;
          width: 100%;
          .email{
            max-width: 425px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 15px;
            p{
              font-size: 18px;
              font-weight: 400;
              line-height: 130%;
              color: #0A0A0A;
              opacity: 40%;
            }
            input{
              height: 73px;
              
            }
          }
          .type{
            display: flex;
            flex-direction: column;
            gap: 15px;
            label{
              font-size: 18px;
              font-weight: 400;
              line-height: 130%;
              color: #0A0A0A;
              opacity: 40%;
            }
            select{
              max-width: 425px;
              width: 100%;
              border: 1px solid #ccc;
              height: 73px;
              padding: 20px;
              border-radius: 3px;
              option{
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0A0A0A;
              }
            }
          }

        }
      }
      input,
      textarea {
        width: 100%;
        margin-bottom: 15px;
        padding: 10px 12px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 3px;
        resize: none;
        font-family: inherit;

        &:focus {
          outline: none;
          border-color: #40362E;
        }
      }

      .down{
        display: flex;
        flex-direction: row;
        max-width: 900px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        p{
          max-width: 405px;
          width: 100%;
          font-size: 18px;
          font-weight: 400;
          line-height: 130%;
          opacity: 40%;
          color: #0A0A0A;
        }
        button[type="submit"] {
          background-color: #FFFBFC;
          color: #848386;
          border: 1px #848386 solid;
          padding: 30px 165px;
          font-size: 18px;
          border-radius: 1000px;
          cursor: pointer;
        }
      }
    }

    
  }
}
 @media (max-width:1100px) {
  header{
    nav{
      display: none;
    }
    p{
      display: none;
    }
    li{
      display: none;
    }
    .mobile{
      display: flex;
    }
  }
  
 }
 @media (max-width:430px) {
  header{
    padding: 10px 15px 0px 15px;
    .mobile{
      font-size: .875rem;
    }
  }
  
 }
 @media (max-width:375px) {
  header{
    .logo_desktop{
      max-width: 107px;
      width: 100%;
    }
  }
}

 @media (max-width:375px) {

    .modal-overlay{
      .modal{
        padding: 0;
        max-width: 375px;
        width: 100%;
        .up_container{
          max-width: 345px;
          width: 100%;
          
          .up{
            max-width: 345px;
            width: 100%;
            padding: 20px 15px;
            
            h2{
              font-size: 24px;
            }
          }
        }
        form{
          padding: 0px 15px 0px 15px;
          .main_form{
            flex-direction: column;
            gap: 20px;
            .left{
              gap: 20px;
              .names{
                gap: 20px;
                .name{
                  gap: 15px;
                  p{
                    font-size: 14px;
                  }
                  input{
                    height: 50px;
                  }
                }
                .surname{
                p{
                  font-size: 14px;
                }
                input{
                  height: 50px;
                }
              }
              }
              .phone{
                p{
                  font-size: 14px;
                }
                input{
                  height: 50px;
                  input::placeholder{
                    font-size: 14px;
                  }
                }
              
              }
            }
            .right{
              gap: 20px;
              .email{
                p{
                  font-size: 14px;
                }
                input{
                  height: 50px;
                }
              }
              .type{
                label{
                  font-size: 14px;
                }
                select{
                  height: 50px;
                  padding: 10px;
                }
              }
            }
          }
          .down{
            display: flex;
            flex-direction: column;
            gap: 30px;
            p{
              font-size: 14px;
            }
            button[type="submit"] {
              padding: 15px 125px;
            }
          }
        }
      }
    }
  }

 
</style>