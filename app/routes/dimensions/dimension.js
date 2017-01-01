import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        console.log("Dimension route");
        console.log(params);
        return params;
    }
});
