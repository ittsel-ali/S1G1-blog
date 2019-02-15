import Component from '@ember/component';

export default Component.extend({
  Modelfields: {title: "", body: ""},

  createPost: function(DS, fields) {
      var new_post = DS.createRecord('post', fields);

      new_post.save().then(function(){
        return true
      });
    }
});
