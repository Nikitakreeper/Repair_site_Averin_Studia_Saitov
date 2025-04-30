<script setup>
    import Header_catalog from './Header_catalog.vue'
    import Search from './Search.vue'
    import Repair from './Repair.vue'
    import Text_catalog from './Text_catalog.vue'
    import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header_catalog />
    <main>
        <Search />
        <Repair />
        <Text_catalog />
    </main>
    <Footer />
</template>

<style>
 main{
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 0px 0px 60px 0px;
 }
</style>