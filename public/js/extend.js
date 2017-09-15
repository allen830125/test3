var CustomBlock = Vue.extend({
    template: '<div class="block">B</div>',
});

var CustomMain = Vue.extend({
    template: '<div class="main">' +
        '<div style="margin: 10px;">MAIN</div>' +
        '<custom-block></custom-block>' +
        '<custom-block></custom-block>' +
        '<custom-block></custom-block>' +
        '</div>',
    components: {
        CustomBlock
    }
});

var CustomHeader = Vue.extend({
    template: '<div class="header">Header</div>',
});

var CustomAside = Vue.extend({
    template: '<div class="aside">Aside</div>',
});

new Vue({
    el: '#app'
});