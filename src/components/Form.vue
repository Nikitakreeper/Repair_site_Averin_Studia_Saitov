<script>
  export default {
    name: "PopupForm",
    data() {
      return {
        isModalOpen: false,
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      closeModal() {
        this.isModalOpen = false;
      },
      submitForm() {
        console.log('Форма отправлена:', this.name, this.email, this.message);
        this.closeModal();
      }
    }
  };
  </script>

<template>
    <div>
      <!-- Кнопка открытия формы -->
      <button @click="isModalOpen = true">Открыть форму</button>
  
      <!-- Модальное окно -->
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal">
          <h2>Форма заявки</h2>
          <form @submit.prevent="submitForm">
            <input v-model="name" type="text" placeholder="Ваше имя" required />
            <input v-model="email" type="email" placeholder="Email" required />
            <textarea v-model="message" placeholder="Сообщение"></textarea>
            <button type="submit">Отправить</button>
          </form>
          <button class="close-btn" @click="closeModal">Закрыть</button>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .modal {
    background: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>