/*

!! BASIC - EVENTS - METHODS - CALL 2 METHODS ON CLICK !!

> call multiple methods on 1 click

*/

/*Component*/
<template>
    <div class="container">
		<h2>Multiple Methods on Button</h2>
		<hr>
		<el-button type="primary" v-on:click="method1(); method2();">Primary Button</el-button>
    </div>
</template>

<script>
    export default {
        methods: {
            method1() {
                console.log('Marko');
            },
            method2() {
                console.log('Darko');
            }
        }
    }
</script>