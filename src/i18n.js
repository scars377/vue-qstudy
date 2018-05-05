import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Ready translated locale messages
const messages = {
  tw: {
    products: '產品',
    member: '會員中心',
    game: '遊戲',
    username: '帳號',
    password: '密碼',
  },
  en: {
    products: 'Product',
    member: 'Member',
    game: 'Game',
    username: 'Username',
    password: 'Password',
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'tw', // set locale
  messages, // set locale messages
});

export default i18n;

