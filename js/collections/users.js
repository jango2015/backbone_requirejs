define([
    'underscore',
    'models/user',
    'backbone'
], function(_, UserModel, Backbone) {
    var UsersCollection = Backbone.Collection.extend({
        model: UserModel
    });

    return UsersCollection;
});
