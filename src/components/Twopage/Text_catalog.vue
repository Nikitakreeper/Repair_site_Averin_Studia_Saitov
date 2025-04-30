<script>

</script>

<template>
    <section class="Text_catalog">
        <div class="up">
            <p class="title">Услуги ремонта в Сочи</p>
            <div class="right">
                <p>Современные тенденции в строительстве и дизайне интерьера в Сочи развиваются стремительно. Когда дело доходит до ремонта квартир и создания дизайн-проектов, важно найти надежного партнера, который предоставит высококачественные услуги по ремонту квартир, учтет стоимость услуг ремонта, а также сможет реализовать ваше видение идеального интерьера.</p>
                <p>Компания "Сочи-ремонт" гордится предоставлением всего спектра услуг в сфере строительства, ремонта и дизайна интерьера, а также разработки дизайн-проектов квартир</p>
            </div>
        </div>
        <div class="down">
            <div class="columns">
                <div class="column">
                    <p class="column_title">Высокое качество ремонта</p>
                    <div class="column_text">
                        <p>Оказание услуг по ремонту квартир – одна из ключевых областей деятельности "Сочи-ремонт". Мы придаем большое значение качеству и безупречному исполнению работ. Наши специалисты имеют обширный опыт и профессиональные навыки, чтобы справиться с ремонтом любой сложности. 
                        </p>
                        <p>Мы используем только высококачественные материалы и современное оборудование, чтобы каждый проект был завершен с учетом самых высоких стандартов.</p>
                    </div>
                </div>
                <div class="column">
                    <p class="column_title">Понятная стоимость услуг ремонта</p>
                    <div class="column_text">
                        <p>Мы понимаем, что прозрачность в финансовых вопросах очень важна для наших клиентов. Поэтому "Сочи-ремонт" предоставляет подробные сметы и обсуждает стоимость услуг ремонта заранее. Мы гарантируем, что вы не столкнетесь с скрытыми затратами или неприятными сюрпризами. </p>
                        <p>Мы предоставляем честные и конкурентоспособные цены, которые соответствуют качеству наших услуг.</p>
                    </div>
                </div>
                <div class="column">
                    <p class="column_title">Индивидуальный дизайн интерьера</p>
                    <div class="column_text">
                        <p>Мы также предоставляем услуги дизайна интерьера. Наша команда профессионалов в области дизайна готова воплотить ваши идеи в реальность. </p>
                        <p>Мы работаем над созданием уникальных и функциональных интерьеров, которые отражают ваш стиль и предпочтения. "Сочи-ремонт" учтет все ваши пожелания и сделает ваш интерьер уютным и стильным.</p>
                    </div>
                </div>
                <div class="column">
                    <p class="column_title">Услуги дизайн-проекта квартиры</p>
                    <div class="column_text">
                        <p>Наши услуги включают в себя не только дизайнерский ремонт, но и разработку дизайн-проектов квартир. Это важный этап перед началом ремонта, который помогает вам визуализировать будущий интерьер и сделать правильный выбор в отношении цветовых решений, мебели и аксессуаров. </p>
                        <p>Мы уделяем внимание каждой детали, чтобы ваш интерьер был идеально согласованным.</p>
                    </div>
                </div>
            </div>
            <div class="gray_container">
                <p class="gray">Выбрав компанию "Сочи-ремонт" для ремонта и дизайна вашей квартиры, вы получите выдающееся качество услуг, прозрачную стоимость и надежного партнера на каждом этапе проекта. Наши специалисты всегда готовы ответить на ваши вопросы и предложить лучшие решения. Мы работаем с любыми бюджетами и всегда гарантируем отличные результаты. </p>
        
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

    .Text_catalog{
        display: flex;
        flex-direction: column;
        gap: 120px;
        padding: 60px 50px;
        border: 1px #EAEAEA solid;
        .up{
            max-width: 1920px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .title{
                font-size: 64px;
                font-weight: 500;
                line-height: 130%;
                letter-spacing: -2%;
                max-width: 501px;
                width: 100%;
            }
            .right{
                display: flex;
                flex-direction: column;
                gap: 30px;
                max-width: 910px;
                width: 100%;
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0a0a0a;
            }
            
        }
        .down{
            display: flex;
            flex-direction: column;
            gap: 60px;
            .columns{
                display: flex;
                flex-direction: row;
                gap: 94px;
                .column{
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    max-width: 361px;
                    width: 100%;
                    .column_title{
                        font-size: 30px;
                        font-weight: 400;
                        line-height: 120%;
                        letter-spacing: -1%;
                    }
                    .column_text{
                        display: flex;
                        flex-direction: column;
                        gap: 30px;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 130%;
                        color: #0a0a0a;
                    }
                }
            }
            .gray_container{
                max-width: 1920px;
                width: 100%;
                display: flex;
                justify-content: end;
                padding: 0px 95px 0px 0px;

                .gray{
                display: flex;
                max-width: 800px;
                width: 100%;
                font-size: 18px;
                font-weight: 400;
                line-height: 130%;
                color: #0a0a0a;
                opacity: 40%;
                
                
            }
            }
        }
    }
    @media (max-width:1111px) {
        .Text_catalog{
            .up{
                align-items: center;
                    display: flex;
                    flex-direction: column;
            }
            .down{
                .columns{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                }
            }
        }
        
    }
    @media (max-width:768px) {
        .Text_catalog{
            display: none;
        }
        
    }
</style>