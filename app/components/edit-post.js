import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
  DS: service('store'),

  init(){
    this._super(...arguments);
    this.set("prunedRecord", (({ id, title, body }) => ({ id, title, body }))(this.get('record')));
  },

  updateRecord: function(DS, fields){
    DS.findRecord('post', fields.id).then(function(post){
      post.set('title', fields.title);
      post.set('body', fields.body);
      post.save();
    });
  }
});
