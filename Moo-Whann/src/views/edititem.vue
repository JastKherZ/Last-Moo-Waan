<template>

    <div class="flex flex-col justify-center items-center border bg-gray-100">
        <div class="font-bold text-center py-10">
            <h1 class="text-lg">edit item</h1>
        </div>
        <div class="flex flex-col border bg-red-500 h-[500px] w-[850px] mb-28">
           <!-- loop item -->
           <div class="flex justify-center">
               <select name="cars" id="cars" class="flex bg-yellow-500 h-[100px] w-[400px] mt-5 mb-5 ml-[28px]">
                   <option value="volvo">Volvo</option>
                   <option value="saab">Saab</option>
                   <option value="mercedes">Mercedes</option>
                   <option value="audi">Audi</option>
               </select>
           </div>
            <div class="flex justify-end">
                <div class="flex">
                    <button class="bg-yellow-500 mr-5">Finish</button>
                </div>
            </div>
        </div>
        
    </div>



</template>

<script>
    export default {
    name: 'edititem',
}
</script>