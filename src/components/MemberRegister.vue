<template>
  <div>
    <div>
      <label>Username</label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" v-model="password" />
      <label>{{passwordLengthEnough?'':'密碼過短'}}</label>
    </div>
    <div>
      <label>Verify Password</label>
      <input type="password" v-model="password2" />
      <label>{{passwordSame?'':'密碼不一致'}}</label>
    </div>

    <div>
      <label>Year of birth</label>
      <select v-model="year">
        <option
          v-for="i in 100"
          :value="startYear-i"
          :key="i"
        >
          {{startYear-i}}
        </option>
      </select>
    </div>

    <div>
      <div>Summary</div>
      <textarea v-model="summary"/>
    </div>

    <div>
      <label>Time</label>
      <br/>
      <input type='checkbox' value="morning" v-model='time'/>
      <label>Morning</label>
      <input type='checkbox' value="afternoon" v-model='time'/>
      <label>Afternoon</label>
      <input type='checkbox' value="evening" v-model='time'/>
      <label>Evening</label>
    </div>
    <div>
      <label>Gender</label>
      <br/>
      <input type='radio' value="male" v-model='gender'/>
      <label>Male</label>
      <input type='radio' value="female" v-model='gender'/>
      <label>Female</label>
    </div>
    <div>
      <label>Picture</label>
      <input
        type="file"
        accept="image/*"
        @change="fileSelected"
      />
      <br/>
      <img :src="picture"/>
    </div>

    <hr/>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      year: 0,
      summary: '',
      time: [],
      gender: '',
      picture: '',
      errorMessage: '',
    };
  },
  computed: {
    startYear() {
      return (new Date()).getFullYear() - 17;
    },
    passwordLengthEnough() {
      return this.password.length >= 8;
    },
    passwordSame() {
      return this.password === this.password2;
    },
  },
  methods: {
    submit() {
      // const data = {
      //   username: this.username,
      //   password: this.password,
      //   year: this.year,
      //   time: this.time,
      //   gender: this.gender,
      //   picture: this.picture,
      // };

      const form = new FormData();
      form.append('username', this.username);
      form.append('password', this.password);
      form.append('year', this.year);
      form.append('time', this.time);
      form.append('gender', this.gender);
      form.append('picture', this.picture);

      // axios.post(API_URL, data).then((rs) => {
      axios.post(API_URL, { form }).then((rs) => {
        const { success, message } = rs.data;
        if (!success) {
          this.errorMessage = message;
        } else {
          this.$router.push(
            `/${this.$i18n.locale}/member`,
          );
        }
      });
    },
    fileSelected(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', this.fileLoaded);
      reader.readAsDataURL(file);
    },
    fileLoaded(e) {
      this.picture = e.target.result;
    },
  },
  created() {
    this.year = this.startYear - 1;
  },
};
</script>

<style scoped>
img{
  width: 300px;
}
</style>
