import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    save1() {
      var params = {
        user: this.get('user'),
        body: this.get('body'),
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }
  }
});
