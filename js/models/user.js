define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var UserModel = Backbone.Model.extend({
        defaults: {
            username: "user"
        }
    });

    return UserModel;
});
