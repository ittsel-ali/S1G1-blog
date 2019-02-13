import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
  DS: service('store'),
  attributes: {},
  
  actions: {
    submit: function() {
      this.get('func')(this.DS, this.get("attributes"));
    }
  }
});
