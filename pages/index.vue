<template>
    <div class="drawer drawer-mobile bg-slate-100">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <!-- Page content here -->
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                <!-- Sidebar content here -->
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>

        </div>
    </div>
</template>
<style lang="postcss" scoped>
    .drawer-side .menu li{
        @apply bg-primary text-primary-content
    }
    .drawer-side .menu li:first-child{
        @apply rounded-t-lg
    }
    .drawer-side .menu li:last-child{
        @apply rounded-b-lg
    }
</style>