<template>

    <div class="flex flex-col justify-center items-center border bg-gray-100">
        <div class="font-bold text-center py-10">
            <h1 class="text-lg">edit item</h1>
        </div>
        <div class="flex flex-col place-items-center border bg-red-500 h-[500px] w-[850px] mb-28">
           <!-- loop item -->
            <select name="cars" id="cars" class="flex justify-center item-center bg-yellow-500 h-[100px] w-[400px] mt-5 mb-5">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            
                <div class="flex bg-orange-50 h-[40px] w-[70px]">
                    <button class="text-center">Edit</button>
                </div>
            
        </div>
        
    </div>



</template>

<script>
    export default {
    name: 'edititem',
}
</script>