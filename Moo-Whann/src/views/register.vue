<template>
    <div class="flex justify-center items-center h-screen" style="background: #FFDEB9;">
        <div class="w-96 p-6 shadow-lg rounded-md" style="background: #FC2947;">
            <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Register</h1>
            <hr class="mt-3">
            <div class="mt-3">
                <label for="username" class="block text-base mb-2">Username</label>
                <input type="text" id="username"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Username" />
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input :type="password" id="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Password" />
            </div>
            <div class="mt-3">
                <label for="password" class="block text-base mb-2">Confirm Password</label>
                <input :type="password" id="password"
                    class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter Password" />
            </div>
            <div class="control">
                <div class="mt-3 flex justify-between items-center">
                    <div>
                        <input type="checkbox" @click="toggleShow">
                        <label> Show Password</label>
                    </div>
                    <div>
                        <a href="#" class="text-indigo-800 font-semibold">Forgot Password</a>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <button
                    class="border-2 border-indigo-700 bg-indigo-700 py-1 w-full rounded-md hover:bg-sky-700 font-semibold"
                    style="background: #FFDEB9; border: #FFDEB9;">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPassword: true,
            password: 'password'
        }
    },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
      console.log(this.showPassword);
      return this.showPassword ? this.password = 'password' : this.password = 'text'
    }
  }
};
</script>