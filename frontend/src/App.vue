<template>
    <div id="app" class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary">
                <img src="./assets/logo.png" alt="Logo" style="height: 32px">
                <span class="md-title">International Meeting Planner</span>
                <md-button @click="addGroup" alt="Create New Meeting Planner" class="md-icon-button md-raised md-accent">
                    <md-icon>add</md-icon>
                </md-button>
                <span style="flex: 1"></span>
                <a href="https://github.com/Krakaw/international-meetings">
                    <img src="./assets/github.png"  alt="Github Krakaw" target="_blank">
                </a>

            </md-app-toolbar>

            <md-app-content>
                <v-groups v-model="groups"></v-groups>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>

    import VGroups from './components/Groups';
    import Vue from 'vue'
    import {MdApp, MdContent, MdDrawer, MdToolbar, MdList, MdIcon, MdButton} from 'vue-material/dist/components';

    Vue.use(MdApp);
    Vue.use(MdContent);
    Vue.use(MdDrawer);
    Vue.use(MdToolbar);
    Vue.use(MdList);
    Vue.use(MdIcon);
    Vue.use(MdButton);


    export default {
        name: 'app',
        components: {
            VGroups
        },
        data() {
            return {
                triggerLocalStorage: false
            }
        },

        computed: {
            groups: {
                get() {
                    // eslint-disable-next-line
                    let trigger = this.triggerLocalStorage;
                    let groupsString = window.localStorage.getItem('groups') || '[]';
                    return JSON.parse(groupsString);
                },
                set(val) {
                    this.triggerLocalStorage = !this.triggerLocalStorage;
                    window.localStorage.setItem("groups", JSON.stringify(val));
                    return val;
                }
            }

        },
        methods: {
            addGroup() {
                let groups = this.groups;
                groups.push({
                    name: '',
                    timezones: []
                });
                this.$set(this, 'groups', groups);
            }
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
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }

    .danger i {
        color: #f44336 !important;
    }

    .md-button.md-theme-default.md-primary, .md-button.md-theme-default.md-primary .md-icon-font {
        color: #ffffff !important;
    }

    .md-button.md-theme-default {
        color: #cecece !important;
    }
</style>
