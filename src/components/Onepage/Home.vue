<script setup>
import Header_main from '@/components/Header_main.vue'
import Heroblock from '@/components/Heroblock.vue'
import Realize from '@/components/Realize.vue'
import Ready from '@/components/Ready.vue'
import Why from '@/components/Why.vue'
import Our_projects from '@/components/Our_projects.vue'
import Wanna from '@/components/Wanna.vue'
import Text from '@/components/Text.vue'
import Footer from '@/components/Footer.vue'
import Best from '@/components/Best.vue'

</script>

<template>
  <RouterView />
  <div class="Hero_header">
    <Header_main />
    
  </div>
  <main>
    <Heroblock />
    <Best />
    <Realize />
    <Ready />
    <Why />
    <Our_projects />
    <Wanna />
    <Text />
  </main>
    <Footer />
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
  
template{
  display: flex;
  justify-content: center;
  align-items: center;
  
}

  .Hero_header{
      display: flex;
      flex-direction: column;
      gap: 8.375rem;
  }

  main{
    display: flex;
    flex-direction: column;
    gap: 180px;
    padding: 0rem 0rem 11.25rem 0rem ;
  }
  @media (max-width:375px) {
    main{
      gap: 80px;
    }
    
  }
</style>