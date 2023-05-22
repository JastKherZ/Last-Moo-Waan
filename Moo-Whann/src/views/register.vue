<template>
    <div class="flex flex-col justify-center items-center bg-gray-100">
      <div class="font-bold mt-[50px]">
        <h1 class="text-4xl">REGISTRATION</h1>
      </div>
      <div class="w-96 p-6 text-sm">
        <div class="w-full"></div>
        <div class="flex flex-col">
          <label for="fname" class="mt-1 font-bold">First Name</label>
          <input type="text" class="px-2 border rounded mt-1 w-full h-8" placeholder=" Please enter your First Name" v-model="register.fname">
          <label for="lname" class="mt-1 font-bold">Last Name</label>
          <input type="text" class="border px-2 rounded mt-1 w-full h-8" placeholder=" Please enter your Last Name" v-model="register.lname">
          <label for="username" class="mt-1 font-bold">Username</label>
          <input type="text" class="px-2 border rounded mt-1 w-full h-8" id="username" placeholder=" Please enter your Username" v-model="register.username">
          <label for="password" class="mt-1 font-bold">Password</label>
          <input :type="password" class="px-2 border rounded mt-1 w-full h-8" id="password" placeholder=" Please enter your new Password" v-model="register.password">
          <label for="password" class="mt-1 font-bold">Confirm Password</label>
          <input :type="password" class="px-2 border rounded mt-1 w-full h-8" placeholder=" Please confirm your new Password" v-model="register.repassword">
          <div class="flex items-center mb-4">
            <input type="checkbox" @click="toggleShow">
            <label for="default-checkbox" class="mt-1 ml-2 text-sm font-medium">Show Password</label>
          </div>
          <div class="text-center">
            <button @click="register1()" class="bg-black text-white font-bold border w-40 h-16">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        showPassword: true,
        password: 'password',
        register: {
          fname: '',
          lname: '',
          username: '',
          password: '',
          repassword: ''
        },
      }
    },
    methods: {
      toggleShow() {
        this.showPassword = !this.showPassword;
        console.log(this.showPassword);
        return this.showPassword ? this.password = 'password' : this.password = 'text'
      },
      async register1() {
        // Validate the form before registration
        if (!this.validateForm()) {
          return;
        }
  
        try {
          const res = await axios.post("http://localhost:3000/api/user/register", {
            fname: this.register.fname,
            lname: this.register.lname,
            username: this.register.username,
            password: this.register.password,
            repassword: this.register.repassword
          });
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.fname))
          // this.$router.push("/login")
        }
        catch (err) {
          console.log(err);
        }
      },
      validateForm() {
        if (this.register.fname.trim() === '') {
          alert('Please enter your First Name');
          return false;
        }
        if (this.register.lname.trim() === '') {
          alert('Please enter your Last Name');
          return false;
        }
        if (this.register.username.trim() === '') {
          alert('Please enter a Username');
          return false;
        }
        if (this.register.password.trim() === '') {
          alert('Please enter a Password');
          return false;
        }
        if (this.register.password !== this.register.repassword) {
          alert('Password and Confirm Password do not match');
          return false;
        }
        return true;
      }
    }
  };
  </script>
  