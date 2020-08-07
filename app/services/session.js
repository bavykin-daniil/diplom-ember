import Service from '@ember/service';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  firebaseApp: service(),

  currentUser: null,

  isAuthenticated: false,

  isAdmin: computed('currentUser.uid', {
    get() {
      return this.get('currentUser.uid') === 'Uu1EiiTl36UWnwKC64UUvNCcV5l1'
    }
  }),

  authRef: computed({
    get() {
      return this.firebaseApp.auth()
    }
  }),

  async fetch() {
    const auth = await this.authRef

    return new RSVP.Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.set('currentUser', null)
          this.set('isAuthenticated', false)
          reject()
          return
        }

        this.set('currentUser', user)
        this.set('isAuthenticated', true)

        resolve()
      });
    })
  },

  async signIn(email, password) {
    const auth = await this.authRef
    return auth.signInWithEmailAndPassword(email, password)
  },

  async signInAdmin(email, password) {
    const auth = await this.authRef
    return auth.signInWithEmailAndPassword(email, password)
  },

  async signUp(email, password){
    const auth = await this.authRef
    return auth.createUserWithEmailAndPassword(email, password)
  },

  async signOut(){
    const auth = await this.authRef
    return auth.signOut()
  },

  async updateProfile(displayName, phoneNumber){
    const auth = await this.authRef
    return auth.updateProfile(displayName, phoneNumber)
  },

  async updateEmail(email){
    const auth = await this.authRef
    return auth.updateEmail(email)
  },

  async updatePassword(password){
    const auth = await this.authRef
    return auth.updatePassword(password)
  },

  async updatePasswordWithEmail(email){
    const auth = await this.authRef
    return auth.sendPasswordResetEmail(email)
  }

});
