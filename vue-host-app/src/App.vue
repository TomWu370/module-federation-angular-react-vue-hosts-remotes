<template>
    <div>
        <!-- Provide the app root for the angular web components but don't display it -->
        <app-root style="display: none"></app-root>

        <h1>Vue Host App</h1>

        <!-- Angular main app web component -->
        <angular-app-component></angular-app-component>

        <!-- Angular test component -->
        <app-component></app-component>
    </div>
</template>

<script>

    import { mount } from 'angularRemoteApp/angularRemoteApp';

    // mount the angular app
    mount();

    export default {

    }
</script>

<style>
@import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";
</style>
