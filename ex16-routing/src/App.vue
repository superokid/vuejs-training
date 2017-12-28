<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-offset-2 col-md-12 col-md-offset-3">
                <h1>Routing</h1>
            </div>
            <hr>
            <app-header></app-header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import Header from './components/Header.vue';
    export default {
    	components: {
    		appHeader: Header
    	}
    }
</script>

<style>
</style>
