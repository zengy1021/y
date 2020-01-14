<template>
    <div class="hasFooter hasNav minView">
        <NavBarComponent :leftArrow="false" :title="'环环相扣'" />
        <Footer  :active="{name:'search'}" />
    </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
