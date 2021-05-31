const myTitle = {
  data() {
    return {
      title: '2',
    }
  },
  props: {
    name: {
      type: String, // String | Number | Boolean | Array | Object | Date | Function | Symbol
      default: '', // props としてデーターが返ってこなかったときの初期値。type: Object or Array のときは必ずその型を返す必要がある。
      validator(value) { // props で指定した型の値が引数に入る
        return value.length > 0
      },
      required: true, // 親 component から必ず props を渡されなくてはいけないか
    },
  },
  computed: {
    upperCaseName() {
      return this.name.toUpperCase()
    },
  },
  template: '#title-template',
}
const countUpButton = {
  template: '#btn-template',
  methods: {
    onClick() {
      this.$emit('count-up', 3)
    },
  },
}

Vue.createApp({
  data() {
    return {
      authorName: 'yamada',
      count: 0,
    }
  },
  // local component (.component は global component)
  // 同じ定義が global にもある場合、local が優先される
  components: {
    'my-title': myTitle,
    'count-up-button': countUpButton,
  },
  computed: {
    authorFullName() {
      return `shingo ${this.authorName}`
    },
  },
  // methods: {
  //   countUpValue(value) {
  //     this.count += value
  //   },
  // },
})
// こちらは global
.component('my-title', {
  data() {
    return {
      title: 'text here',
    }
  },
  template: `<input type="date" v-model="title" />`,
}).mount('#app')