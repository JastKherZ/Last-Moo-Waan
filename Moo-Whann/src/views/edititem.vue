<template>

    <div class="flex flex-col justify-center items-center border bg-gray-100">
        <div class="font-bold text-center py-10">
            <h1 class="text-lg">Edit item</h1>
        </div>
        <div class="flex flex-col border-2 border-black  h-[500px] w-[850px] mb-28">
           <!-- loop item -->
           <div class="flex justify-center">
               <select name="cars" id="cars" v-model="temp" class="flex bg-white border border-black text-black font-bold h-[50px] w-[400px] mt-5 mb-40 ml-[28px]" @change="keep($event.target.selectIndex)">
                   <option v-for="(items, index) in items" :value="index" :key="index" @click="keep(items.id)" >{{items.name}}</option> this.
               </select>
           </div>
           <div class="flex justify-center ">
                <div class="flex">
                    <p class="bg-white border border-black text-center text-black h-[30px] w-[140px] font-bold mr-5">PRICE PER ITEM :</p>
                </div>
                <div class="flex">
                     <input v-model="price" class ="border border-black" type="number">
                </div>
            </div>

            <div class="flex justify-center mt-10 ml-10">
                <div class="flex">
                    <p class="bg-white border border-black text-center text-black h-[30px] w-[100px] font-bold  mr-5">ITEM LEFT :</p>
                </div>
                <div class="flex ">
                     <input v-model="amount" class="border border-black" type="number">
                </div>
            </div>
            <div class="flex justify-end mt-10 " >
                <div class="flex">
                    <button class=" mr-5 h-[50px] w-[90px] border border-black bg-white font-bold">Finish</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
import axios from 'axios';

    export default {
    name: 'edititem',
    data(){
        return {
            items: [],
            temp: 0,
            price:0,
            amount:0,
            ids:''
        }
    },
    async beforeCreate(){
        await axios.get('http://localhost:3000/api/items')
        .then(res => {
            this.items = res.data
        })
    },
    methods:{
        keep(index){
            this.temp = document.getElementById("cars").value
            this.ids = index
            console.log(this.ids);
        }
        
    }
}
</script>