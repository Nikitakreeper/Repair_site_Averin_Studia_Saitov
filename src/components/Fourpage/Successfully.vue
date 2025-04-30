<script setup>
    import Header_catalog from '@/components/Twopage/Header_catalog.vue'
    import Opisanie from './Opisanie.vue'
    
</script>

<template>
    <Header_catalog />
    <main>
        <Opisanie />
    </main>
</template>

<style>
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

 main{
    padding: 287px 0px 0px 50px;
 }
 @media (max-width:375px) {
    main{
        padding: 107px 0px 0px 15px;
    }
    
 }
</style>