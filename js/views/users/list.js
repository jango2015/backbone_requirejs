define(
    [
    'jquery',
    'underscore',
    'collections/users',
    'text!templates/user/list.html',
    'backbone'
], function($, _, UsersCollection, Backbone) {
    var UserListView = Backbone.View.extend({
        el: $("#"),
        initialize: function() {
            this.collection = UsersCollection();
            this.collection.add({username: "user_test"});

            var compiledTemplate = _.template(userListTemplate, {
                users: this.collection.models
            });
            this.$el.html(compiledTemplate);
        }
    });

    return UserListView;
});
