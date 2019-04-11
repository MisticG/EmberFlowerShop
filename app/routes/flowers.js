import Route from '@ember/routing/route';

export default Route.extend({
    //model() är model: function()
    model() {
        return [{
            id: 'Lilioideae',
            title: 'Tulpaner',
            image: 'https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692_960_720.jpg',
            description: 'Fina tulpaner i olika färger'
        }, {
            id: 'Rosoideae',
            title: 'Rosor',
            image: 'https://cdn.pixabay.com/photo/2016/09/22/17/41/rose-1687884_960_720.jpg',
            description: 'Vackra rosor i olika färger'
        }, {
            id: 'Lilieae',
            title: 'Liljor',
            image: 'https://cdn.pixabay.com/photo/2013/06/19/19/54/lilac-140200_960_720.jpg',
            description: 'Vilken lilja är du?'

        }];
    }
});
