import Multiselect from 'vue-multiselect'

export default {
  name: 'VSelect',
  components: {
    Multiselect
  },
  model: {
    prop: 'modelSelect',
    event: 'change'
  },
  props: {
    hideSelected: {
      type: Boolean,
      default: false
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    selected: {
      type: [Object, Number, String, Array],
      default: ''
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    deselectLabel: {
      type: String,
      default: ''
    },
    searchable: {
      type: Boolean,
      default: true
    },
    customLabel: {
      type: Function,
      default: params => params.title ? params.title : params
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    modelSelect: {
      type: [String, Object],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        return this.modelSelect
      },
      set(val) {
        this.$emit('change', val)
      }
    }
  },
  methods: {
    updateValue() {
      this.$emit('update', ...arguments)
    },
    onSelect() {
      this.$emit('select', ...arguments)
    }
  }
}
