import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
  DS: service('store'),

  actions: {
    submit: function() {
      this.get('func')(this.DS, this.get("fields"));
    }
  }
});
