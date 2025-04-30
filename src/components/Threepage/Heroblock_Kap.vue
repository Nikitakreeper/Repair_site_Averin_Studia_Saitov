<script>

</script>

<template>
 <section class="Heroblock_Kap">
    <img class="desktop" src="/src/assets/img/Kap_photo_desktop.png" alt="">
    <img class="mobile" src="/src/assets/img/Kap_photo_mobile.png" alt="">
 </section>
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
    .Heroblock_Kap{
        display: flex;
        justify-content: center;
        padding: 100px 50px;
        .desktop{
            max-width: 1820px;
            width: 100%;
        }
        .mobile{
            display: none;
        }
    }
    @media (max-width:375px) {
        .Heroblock_Kap{
            .desktop{
                display: none;
            }
            .mobile{
                display: flex;
                max-width: 345px;
                width: 100%;
            }
        }
        
    }
</style>