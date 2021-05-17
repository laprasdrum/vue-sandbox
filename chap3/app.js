const app = Vue.createApp({
    data() {
        return {
            title: 'ToDoアプリ',
            todoTitle: '',
            todoDescription: '',
            searchWord: '',
            todoCategory: false,
            todoCategories: [],
            seletedCategory: '',
            todos: [],
            categories: [],
            hideDoneTodo: false,
            author: '',
            order: 'desc',
            count: 0,
            categoryName: '',
            imgSrc: 'https://wonwon-eater.com/wp-content/uploads/2020/03/solarized-yinyang.png',
            disabled: true,
            className: 'from-data-class-name',
            classArr: ['class-name-1', 'class-name-2'],
            isActive: false,
            defaultColor: 'blue',
            isShow: false,
            value: 5.01,
            items: ['item1', 'item2'],
        }
    },
    watch: {
        title(next, prev) {
            console.log(`${prev} -> ${next}`)
        },
        titleText(next, prev) {
            console.log(`computed: ${prev} -> ${next}`)
        },
        todos: {
            handler(next) {
                window.localStorage.setItem('todos', JSON.stringify(next))
            },
            deep: true
        },
        categories: {
            handler(next) {
                window.localStorage.setItem('categories', JSON.stringify(next))
            },
            deep: true
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
            return this.categoryName !== '' && !this.existsCategory
        },
        existsCategory() {
            const categoryName = this.categoryName
            return this.categories.indexOf(categoryName) !== -1
        },
        titleText() {
            return `todoTitle: ${this.title}`
        },
        classNameComputed() {
            return 'from-computed-class-name'
        },
        mockClass() {
            return {
                'is-active': this.isActive,
                'is-inactive': !this.isActive,
            }
        },
        hasTodos() {
            return this.todos.length > 0
        }
    },
    mounted() {
        // this.reset()
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
            this.todos.push({
                id: `todo-${Date.now()}`,
                title: this.todoTitle,
                description: this.todoDescription,
                categories: this.todoCategories,
                dateTime: Date.now(),
                done: false,
            })

            this.todoTitle = ''
            this.todoDescription = ''
            this.todoCategories = []
        },
        createCategory() {
            if (!this.canCreateCategory) {
                return
            }

            // add category
            this.categories.push(this.categoryName)

            this.categoryName = ''
        },
        changeTitle() {
            console.log('ok')
            this.todos[0].title = 'TITLE WAS CHANGED'
            console.log(this.todos[0].title)
        },
        onClick() {
            this.imgSrc = 'https://opengraph.githubassets.com/ffd57577a9276a54bfd836f93fc0adbb540ff400f2d329c620c8943645d1685c/braver/vscode-solarized'
        },
        classNameMethod() {
            return 'from-methods-class-name'
        },
        reset() {
            window.localStorage.clear()
        }
    },
    created() {
        const todos = window.localStorage.getItem('todos')
        const categories = window.localStorage.getItem('categories')

        if (todos) {
            this.todos = JSON.parse(todos)
        }
        if (categories) {
            this.categories = JSON.parse(categories)
        }
    },
}).mount('#app')