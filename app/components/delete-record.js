import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
  DS: service('store'),

  actions: {
    submit: function(){
      this.get('record').deleteRecord();
      
      if (this.get('record').get('isDeleted'))
        this.get('record').save();
      
      else
        console.error("Could not delete record");
    }
  }
});
