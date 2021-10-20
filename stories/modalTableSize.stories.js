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

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {
  table: {
    caption: 'таблица размеров',
    row: [
      ['XS', '42–44', '166–170', '88', '76'],
      ['S', '44–46', '170–176', '92', '80'],
      ['M', '46–48', '176–182', '96', '84'],
      ['L', '48–50', '182–186', '100', '88'],
      ['XL', '50–52', '184–186', '104', '92'],
      ['2XL', '52–54', '186–188', '108', '96'],
      ['3XL', '54–56', '188–190', '112', '100'],
      ['4XL', '56–58', '190–192', '116', '104'],
      ['5XL', '58–60', '192–194', '120', '108']
    ]
  }
}
