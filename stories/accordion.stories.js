import Accordion from '~/components/ui-kit/Accordion'

export default {
  title: 'UI-KIT/Accordion'
}

const Template = (args, { argTypes }) => ({
  components: { Accordion },
  template: '<Accordion><template v-slot:link><span>Ссылка</span></template><template v-slot:content><span>Контетн</span></template></Accordion>'
})

export const Basic = Template.bind({})
