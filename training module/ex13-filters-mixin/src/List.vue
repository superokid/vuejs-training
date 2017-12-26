<template>
    <div>
        <h1>Filters & Mixins</h1>
        <!-- <p>{{ text | toUpperCase | to-lowercase}}</p> -->
        <hr>
        <input v-model="filterText">
        <ul>
        	<li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>  
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
    	mixins: [fruitMixin],
        created() {
            console.log('inside list created hook');
        }
    }
</script>

<style>

</style>
