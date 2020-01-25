Vue.config.devtools = true;

Vue.component('progress-view', {
    data() {
        return { completionRate: 0 };
    }
})

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }
    fire(event, data = null) {
        this.vue.$emit(event, data);
    }
    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            Event.fire('applied');
        }
    }
})

Vue.component('modal', {
    template: `
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <slot name="footer">aa</slot>
    </footer>
  </div>
</div>
    `
})

Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active' : tab.selected}">
                    <a href="#">{{ tab.name }}</a>  
                </li>
            </ul>
        </div>
        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
    `,
    data() {
        return {
            tabs: [

            ]
        }
    },
    created() {
        this.tabs = this.$children;
    }
})

Vue.component('tab', {
    template: `
    <div><slot></slot></div>
    `,
    props: {
        name: { required: true },
        selected: { default: false }
    }
})
Vue.component('comment-abc1', {
    template: '<div><comment-abc2 v-for="task in tasks">{{ task.description }}</comment-abc2></div>',
    data() {
        return {
            tasks: [
                { id: 1, description: "pqr1" },
                { id: 2, description: "pqr2" }
            ]
        }
    }
})

Vue.component('comment-abc2', {
    template: '<li><slot></slot></li>'
})

Vue.component('comment-abc3', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
    <article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="delete" aria-label="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `
})

Vue.component('comment-abc', {
    props: ['title4'],
    template: '<h2>{{ title4 }}</h2>',
    data() {
        return {
            selected: false
        }
    },
    methods: {
        select() {
            this.selected = true
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Gold',
            required: true
        }
    }
})

//local component
var userpost = {
    template: '<h2>hello local component</h2>'
}

Vue.component('todo-item', {
    template: '<li>This is a to do</li>'
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">you have clicked me {{ count }} times.</button>'
})

Vue.component('todo-new', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

Vue.component('comment-post', {
    props: ['title3'],
    template: '<a>{{ title3 }}</a>'
})

Vue.component('post-class', {
    props: ['post'],
    template: `
    <div class="post-class">
        <h1>{{ post.title }}</h1>
        <h3>{{ post.content }}</h3>
    </div>
    `
})

Vue.component('custom-input', {
    props: ['value'],
    template: `
    <div class="custom-input">
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
    <span>{{ value }}</span>
    </div>
    `
})

Vue.component('tab-home', {
    template: '<div>home tab</div>'
})

Vue.component('tab-posts', {
    template: '<div>posts tab</div>'
})

Vue.component('tab-archive', {
    template: '<div>archive tab</div>'
})

const Foo = {
    template: '<div>foo</div>'
}
const Bar = { template: '<div>bar</div>' }
const Test = { template: '<div>{{ $route.params.id }}</div>' }
const User = { template: '<div>{{ $route.params.pathMatch }}</div>' }
const Employee = {
    template: `
    <div id="employee">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
    `
}
const Home = { template: '<div>Home</div>' }
const Profile = { template: '<div>Profile</div>' }
const Post = { template: '<div>Post</div>' }
const Comment = { template: '<div>comment</div>' }
const Abc1 = { template: '<div>ABC1</div>' }
const Abc2 = { template: '<div>ABC2</div>' }
const Abc3 = { template: '<div>ABC3</div>' }
const Abc4 = { template: '<div>ABC4</div>' }
const Abc5 = { template: '<div>ABC5</div>' }
const Abc6 = { template: '<div>ABC6</div>' }
const Abc7 = { template: '<div>ABC7</div>' }
const Abc8 = { template: '<div>ABC8</div>' }
const Abc9 = { template: '<div>ABC9</div>' }
const UserSetting = {
    template: `
    <div>
        <h2>User settings</h2>
        <router-view />
        <router-view name="helper" />
    </div>
    `
}

const routes = [
    { path: '/human', component: Abc7 },
    { path: '/people', redirect: '/human' },
    { path: '/dd', name: 'cc', component: Abc8 },
    { path: '/pqr', redirect: { name: 'cc' } },
    { path: '/pqr1', alias: '/pqr2', component: Abc9 },
    { path: '/foo/(aa)?', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/test/:id(\\d+)', component: Test },
    { path: '/user-*', component: User },
    {
        path: '/employee/:id', component: Employee,
        children: [
            { path: '/', component: Home },
            { path: 'profile', component: Profile },
            { path: 'post', component: Post }
        ]
    },
    { path: '/comment/:id', name: 'post', component: Comment },
    {
        path: '/aa',
        components: {
            default: Abc1,
            a: Abc2,
            b: Abc3
        }
    },
    {
        path: '/email',
        component: UserSetting,
        children: [
            { path: 'settings', component: Abc4 },
            {
                path: 'profile',
                components: {
                    default: Abc5,
                    helper: Abc6
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
var app = new Vue({
    el: '#parent',
    router,
    components: {
        'local-component': userpost
    },
    data: {
        aa1: "riya",
        plans: ['premium', 'silver'],
        currentTab: 'home',
        tabs: ['home', 'posts', 'archive'],
        abc21: 'aaa11',
        msg: "Hello World!",
        food_items: ["item_1", "item_2"],
        seen: false,
        contents: [
            { text: 'aa' },
            { text: 'bb' }
        ],
        items4: [
            { id: 1, text: 'aa' },
            { id: 2, text: 'bb' },
            { id: 3, text: 'cc' }
        ],
        items5: [
            { id: 1, title: 'a1', content: 'a1 content' },
            { id: 2, title: 'a2', content: 'a2 content' },
            { id: 3, title: 'a3', content: 'a3 content' },
        ],
        items6: [
            { id: 1, title: 'comment1' },
            { id: 2, title: 'comment2' },
            { id: 3, title: 'comment3' },
        ],
        groceryList: [
            { id: 0, text: 'veg' },
            { id: 1, text: 'cheeze' },
            { id: 2, text: 'sugar' }
        ],
        msg1: "you loaded this page on " + new Date().toLocaleString(),
        eventname: 'click',
        keyname: 'href',
        abc: true,
        def: true,
        pqr: true,
        classObject: {
            red: true,
            blue: true
        },
        styleObject: {
            color: 'green'
        },
        styleObject1: {
            color: 'yellow'
        },
        styleObject2: {
            height: '50px'
        },
        editSpan: false,
        message11: 'aa',
        checked: true,
        picked: '',
        selected1: '',
        couponApplied: false
    },
    methods: {
        buttonClick: function () {
            alert('button has been clicked');
        },
        reverseMessage: function () {
            this.msg = this.msg.split('').reverse().join('');
        },
        reverseClass: function (abc) {
            this.def = !this.def;
        },
        method1: function () {
            alert('key pressed');
        },
        method2: function () {
            alert('space entered');
        },
        method3: function () {
            alert('alt c');
        }

    },
    computed: {
        method1: function () {
            return {
                red: true,
                blue: true
            }
        },
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    beforeCreate: function () {
        console.log('before create');
    },
    created: function () {
        Event.listen('applied', () => alert('handling'));
        console.log('created');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeDestroy: function () {
        console.log('before destroy');
    },
    destroyed: function () {
        console.log('destroyed');
    },
    mounted() {
        document.querySelector('#button').addEventListener('click', () => {
            let name = document.querySelector('#input').value;
            app.food_items.push(name);
            name.value = '';

        })
    }
})

//app.msg = "aa";