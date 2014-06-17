define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'models/project'
], function(_, Backbone, ProjectModel) {
    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel
    });

    // You don't usually return a collection instantiated
    return ProjectsCollection
});
