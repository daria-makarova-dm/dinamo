<template lang="pug">
  .ui-kit
    h4 Чек бокс
    div(style="background: #2c6cc9;")
      BaseCheckbox(v-model="checked" id="test") XS
      BaseCheckbox(v-model="checked" id="test2") XS
      span {{ checked ? 'true' : 'false' }}
    BaseCheckbox(v-model="checked" id="test3").b-checkbox--light Весна/лето 2020
    BaseCheckbox(v-model="checked" id="test4").b-checkbox--light.b-checkbox--nouppercase Весна/лето 2020
    span {{ checked ? 'true' : 'false' }}

    br
    br
    br
    h4 Радио кнопки
    div(style="background: #2c6cc9;")
      BaseRadiobutton(v-model="radioCheckValue" value="1" name="radioCheck") по популярности
      BaseRadiobutton(v-model="radioCheckValue" value="2" name="radioCheck") новинки
      BaseRadiobutton(v-model="radioCheckValue" value="3" name="radioCheck") сначала дороже
      span {{ radioCheckValue }}

    br
    br
    br

    h4 Select
    vSelect(v-model="selectValue" :options="selectOption" placeholder="18" :searchable="false")
    vSelect(v-model="selectValue" :options="selectOption" placeholder="18" :searchable="false").b-select--large
    vSelect(v-model="selectValue" :options="selectOption" placeholder="18" :searchable="false" labelText="сезон").b-select--big
    br
    br
    br
    br
    br
    br

    h4 range slider
    v-range(v-model="modelRange" :step="5" :min-max-value="minMaxRange")
    br
    br
    br

    h4 Аккордеон
    Accordion
      template(#link)
        |спортивные костюмы
      template(#content)
        ul
          li Футболки и олимпийки
          li штаны
          li комплекты
    br
    br
    br

    h4 Модульное окно или же Попап
    Modal(title="ВОЙТИ В АККАУНТ")
      template(#content)
        div контент
    br
    br
    br

    h4 Тултип
    button(v-tooltip.right-start="'You have new messages.'") Hover me
    br
    Tooltip
      template(#link)
        button Click me
      template(#content)
        NuxtLink(to="/") Показать
    br
    br
    br

    h4 Фильтр
    TheFilter

</template>

<script>

// Components
const TheFilter = () => import('~/components/TheFilter/TheFilter.vue')

export default {
  name: 'UiKit',
  components: {
    TheFilter
  },
  data () {
    return {
      checked: false,
      radioCheckValue: '1',
      modelRange: [0, 100],
      minMaxRange: { min: 0, max: 500 },
      selectOption: ['18', '19', '20', '25', '18', '19', '20', '25', '18', '19', '20', '25'],
      selectValue: ''
    }
  }
}
</script>

<style></style>
