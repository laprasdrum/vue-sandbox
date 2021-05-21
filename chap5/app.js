Vue.createApp({
    // local component (.component は global component)
    // 同じ定義が global にもある場合、local が優先される
    components: {
        'my-title': {
            data() {
                return {
                    title: '2',
                }
            },
            template: '#title-template',
        }
    }
})
.component('my-title', {
    data() {
        return {
            title: 'text here',
        }
    },
    template: `<input type="date" v-model="title" />`,
}).mount('#app')