const app = Vue.createApp({
    data() {
        return {
            title: 'ToDoアプリ',
            todoTitle: '',
            todoDescription: '',
            searchWord: '',
            todoCategory: false,
            todoCategories: [],
            hideDoneTodo: false,
            author: '',
            order: ''
        }
    },
}).mount('#app')