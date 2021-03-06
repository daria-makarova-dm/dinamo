import ModalTableSize from '~/components/ModalTableSize/ModalTableSize.vue'

export default {
  component: ModalTableSize,
  title: 'Pages/All/ModalTableSize',
  argTypes: {
    table: {
      type: Object,
      required: true
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { ModalTableSize },
  props: Object.keys(argTypes),
  template: '<ModalTableSize v-bind="$props" v-on="$props" />'
})

// π Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  table: {
    caption: 'ΡΠ°Π±Π»ΠΈΡΠ° ΡΠ°Π·ΠΌΠ΅ΡΠΎΠ²',
    row: [
      ['XS', '42β44', '166β170', '88', '76'],
      ['S', '44β46', '170β176', '92', '80'],
      ['M', '46β48', '176β182', '96', '84'],
      ['L', '48β50', '182β186', '100', '88'],
      ['XL', '50β52', '184β186', '104', '92'],
      ['2XL', '52β54', '186β188', '108', '96'],
      ['3XL', '54β56', '188β190', '112', '100'],
      ['4XL', '56β58', '190β192', '116', '104'],
      ['5XL', '58β60', '192β194', '120', '108']
    ]
  }
}
