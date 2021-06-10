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
  props: {
    count: {
      type: Number,
      required: true,
    }
  },
  methods: {
    onClick() {
      this.$emit('update:count', this.count + 1)
    },
  },
}

const updateAuthor = {
  template: '#update-author-template',
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClickAge() {
      this.$emit('update:age', this.age + 1)
    },
    onInput($event) {
      this.$emit('update:name', $event.target.value)
    }
  },
}

Vue.createApp({
  data() {
    return {
      authorName: 'yamada',
      totalCount: 0,
      author: {
        name: 'Jobs',
        age: 23,
      },
      isShow: false,
      filterDone: false,
      items: [
        {
          title: 'title - 1',
          done: false,
        },
        {
          title: 'title - 2',
          done: true,
        },
        {
          title: 'title - 3',
          done: true,
        },
        {
          title: 'title - 4',
          done: false,
        },
      ]
    }
  },
  // local component (.component は global component)
  // 同じ定義が global にもある場合、local が優先される
  components: {
    'my-title': myTitle,
    'count-up-button': countUpButton,
    'update-author': updateAuthor,
  },
  computed: {
    authorFullName() {
      return `shingo ${this.authorName}`
    },
    filteredItems() {
      if (this.filterDone) {
        return this.items.filter(item => item.done)
      }
      return this.items
    }
  },
  methods: {
    beforeEnter(el) {
      // 表示される前の状態を element 使って？定義
      console.log(`before enter: ${el}`)
    },
    enter(el, done) {
      // el に出現・表示されるアニメーションを実行
      // done: callback
      console.log(`enter: ${el}`)
    },
    afterEvent(el) {
      // 表示されたあとの定義
      console.log(`after enter: ${el}`)
    },
    enterCancelled(el) {
      // 表示アニメーションキャンセル時
      console.log(`enter cancelled: ${el}`)
    },
    beforeLeave(el) {
      console.log(`before leave: ${el}`)
    },
    leave(el, done) {
      console.log(`leave: ${el}`)
    },
    afterLeave(el) {
      console.log(`after leave: ${el}`)
    },
    leaveCancelled(el) {
      console.log(`leave cancelled: ${el}`)
    },
  },
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