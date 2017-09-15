Vue.component('CustomHeader', {
    template: '<div class="header">Header</div>'
});

Vue.component('CustomMain', {
    template: '<div class="main">' +
        '<div style="margin: 10px;">MAIN</div>' +
        '<custom-block></custom-block>' +
        '<custom-block></custom-block>' +
        '<custom-block></custom-block>' +
        '</div>'
});

Vue.component('CustomBlock', {
    template: '<div class="block">B</div>'
});

Vue.component('CustomAside', {
    template: '<div class="aside">Aside</div>'
});

new Vue({
    el: "#componentTest"
});