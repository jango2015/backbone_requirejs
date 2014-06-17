define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above
    'collections/projects',
    'text!templates/project/list.html'
], function($, _, Backbone, ProjectsCollection, projectListTemplate) {
    var ProjectListView = Backbone.View.extend({
        el: $("#container"),
        initialize: function() {
            this.collection = new ProjectsCollection();
            this.collection.add({name: "Ginder Kid"});

            // Compile the template using Underscore micro-templating
            var compiledTemplate = _.template(projectListTemplate, {
                projects: this.collection.models
            });
            this.$el.html(compiledTemplate);
        }
    });
    // Our module now returns our view
    return ProjectListView;
});
