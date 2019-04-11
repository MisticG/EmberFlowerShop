import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel() {
        //replaceWith används endast för index. transitionTo() för historik
        this.replaceWith('flowers')
    }
});
