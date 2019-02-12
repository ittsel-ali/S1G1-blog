import Component from '@ember/component';

export default Component.extend({
	logoIsShowing: false,
	
	actions: {
		showLogo: function() {
			this.set("logoIsShowing", true);
		},
		hideLogo: function() {
			this.set("logoIsShowing", false);
		}
	}
});
