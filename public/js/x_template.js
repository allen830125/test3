Vue.component('CustomMain', {
    template: "#customMain",
    components: {
    	CustomBlock
    }
});

Vue.component('CustomBlock', {
	template: "#customBlock"
})


Vue.component('CustonHeader', {
    template: "#customHeader"
});

Vue.component('CustomAside', {
    template: "#customAside"
});
new Vue({
    el: "#x_template"
});