import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        console.log("Value route");
        console.log("Params for dimension: ");
        console.log(this.paramsFor("dimension"));
        console.log(this.paramsFor("dimension").dimension_id);
        return {};
    }
});
