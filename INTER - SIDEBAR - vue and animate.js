/**
 * INTER - SIDEBAR - VUE & ANIMATE
 * - simple to use animation in css style
 */
 
<template>
    <div>
        <button type="button" class="btn btn-default btn-primary" aria-label="Left Align" v-on:click="show = !show">
            <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
        </button>
        <transition name="fade">
            <div class="my-nav" v-show="show">
                Navigation goes here
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style>
    .my-nav {
        height: 500px;
        width: 100%;
        background-color: #BEC6F8;
        position: fixed;
        bottom: 0;
    }
    .fade-enter-active {
        animation: bounceInUp .8s;
    }
    .fade-leave-active {
        animation: bounceOutDown .8s;
    }
</style>