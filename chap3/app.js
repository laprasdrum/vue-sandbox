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
            order: '',
            count: 0,
            categoryName: ''
        }
    },
    computed: {
        joinedTodoCategories() {
            return this.todoCategories.join(' / ')
        },
        categoryText() {
            return 'seleted categocy: ' + this.joinedTodoCategories
        },
        dataFormat() {
            // 最初の実行結果を Vue インスタンスがキャッシュする
            // 変更が検知できる値を参照していない限り、最初の1度しか実行されない
            const date = new Date()
            return date.getFullYear() + ' / ' + (date.getMonth() + 1)
        },
        canCreateTodo() {
            return this.todoTitle !== ''
        },
        canCreateCategory() {
            return this.categoryName !== ''
        }
    },
    methods: {
        // computed と違い、実行結果がキャッシュされない
        // 都度演算が必要な処理を記述する
        onClickCountUp(event) {
            console.log(event)
            this.count += 1
        },
        createTodo() {
            if (!this.canCreateTodo) {
                return
            }

            // add todo

            this.todoTitle = ''
            this.todoDescription = ''
            this.todoCategories = []
        },
        createCategory() {
            if (!this.canCreateCategory) {
                return
            }

            // add category

            this.categoryName = ''
        }
    },
}).mount('#app')