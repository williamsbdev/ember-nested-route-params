import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params, transition) {
        console.log("Value route");
        console.log(params);
        console.log(transition);
        console.log(transition.params["dimensions.dimension"].dimension_id);
        console.log(transition.resolvedModels["dimensions.dimension"].dimension_id);
        console.log("Params for dimension: ");
        console.log(this.paramsFor("dimension"));
        console.log(this.paramsFor("dimension").dimension_id);
        return {};
    }
});
