<template>
    <div id="app" class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title">International Meeting Planner</span>
            </md-app-toolbar>

            <md-app-drawer md-permanent="full">
                <md-toolbar class="md-transparent" md-elevation="0">
                    Navigation
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <md-icon>move_to_inbox</md-icon>
                        <span class="md-list-item-text">Inbox</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>send</md-icon>
                        <span class="md-list-item-text">Sent Mail</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>delete</md-icon>
                        <span class="md-list-item-text">Trash</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>error</md-icon>
                        <span class="md-list-item-text">Spam</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {MdApp,MdContent, MdDrawer,  MdToolbar, MdList, MdIcon} from 'vue-material/dist/components';
    Vue.use(MdApp);
    Vue.use(MdContent);
    Vue.use(MdDrawer);
    Vue.use(MdToolbar);
    Vue.use(MdList);
    Vue.use(MdIcon);


    export default {
        name: 'app',
        components: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>
