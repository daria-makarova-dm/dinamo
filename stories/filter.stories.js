import TheFilter from '~/components/TheFilter/TheFilter.vue'

export default {
  title: 'Pages/Catalog/Filter'
}

const Template = (args, { argTypes }) => ({
  components: { TheFilter },
  template: '<TheFilter />'
})

export const Basic = Template.bind({})
