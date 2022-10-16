<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {defineComponent} from "vue";

defineComponent({
    Link
})
</script>

<template>
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/users">Users</Link>
        </li>
        <li>
            <Link href="/settings">Settings</Link>
        </li>
    </ul>
</template>
