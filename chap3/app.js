const app = Vue.createApp({
    data() {
        return {
            title: 'ToDoアプリ',
            todoTitle: '',
            todoDescription: '',
            searchWord: '',
            todoCategory: false,
            todoCategories: [],
        }
    },
}).mount('#app')