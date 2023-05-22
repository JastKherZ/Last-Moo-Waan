<template>
    <div class="flex flex-col border bg-gray-100 h-[800px] w-full">
        <div class="flex flex-col items-center my-8">
            <h1 class="text-xl font-bold">SHOPPING BAG</h1>
            <p class="text-sm underline mt-8">ตะกร้าสินค้า (0)</p>
        </div>
        <div class="flex bg-gray-400 w-[1600px] h-[1px] mx-16 mt-12">
        </div>

        <!-- สินค้าที่จะซื้อ -->


        <div class="flex bg-gray-400 w-[1600px] h-[1px] mx-16 mt-12">
        </div>
        
        <div class="flex justify-between border h-full m-8">
            <router-link to="/decoration">
                <button class="text-sm m-4 underline underline-offset-1">
                    เลือกซื้อสินค้าต่อ
                </button>
            </router-link>
            <router-link to="/#">
                <button class="bg-black text-sm m-4 text-white font-bold h-10 w-60 border">
                    CREATE AN ACCOUNT
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>