<script setup>
import {Head, Link} from '@inertiajs/inertia-vue3';
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})
</script>

<template>
    <Head title="Welcome" />

    <div
        class="relative flex items-top justify-content-between min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="$page.props.auth.user" :href="route('home')"
                  class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard
            </Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                <Link v-if="canRegister" :href="route('register')"
                      class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register
                </Link>
            </template>
        </div>

        <div class="max-w-full mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center items-center pt-8 sm:justify-start sm:pt-0">
                <ApplicationLogo class="w-32"/>
                <h1 class="text-5xl">Sanguis</h1>
            </div>

            <div class="mt-5 pt-5 border-t">
                <a href="https://www.svgrepo.com/" target="_blank" title="Icons by svgrepo.com">Icons by svgrepo.com</a>
            </div>
        </div>
    </div>
</template>
