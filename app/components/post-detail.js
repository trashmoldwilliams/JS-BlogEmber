import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('do you wanna delete this post?')) {
        this.sendAction('destroyPost', post)
      }
    }
  }
});
