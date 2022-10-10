<template>
    <Layout>
      <Head title="Home" />
      <h1>Home</h1>
        <Nav />
    </Layout>
  </template>

<script>
import { Head } from "@inertiajs/inertia-vue3"
import Nav from "../Shared/Nav"

export default {
    components: {
        Head, Nav
    }
}
</script>
