<template>
    <div>
        <md-dialog :md-active.sync="showDialog" @md-closed="$emit('close')">
            <md-dialog-title>Select Timezone</md-dialog-title>
            <div>
                <md-autocomplete v-model="value.timezone" :md-options="timezones" md-layout="box" md-dense>
                    <label>Timezone</label>
                </md-autocomplete>
                <md-field>
                    <label>Name</label>
                    <md-input v-model="value.description"></md-input>
                </md-field>
            </div>
            <md-dialog-actions>
                <md-button class="" @click="$emit('close')">Close</md-button>
                <md-button class="md-primary" @click="emit">Save</md-button>
            </md-dialog-actions>
        </md-dialog>
    </div>
</template>
<script>
    import moment from 'moment-timezone';
    import Vue from 'vue'
    import {MdDialog, MdAutocomplete,MdField } from 'vue-material/dist/components';
    Vue.use(MdDialog);
    Vue.use(MdAutocomplete);
    Vue.use(MdField);

    export default {
        props: {
            showDialog: {
                type: Boolean
            },
            value: {
                type: Object,
                default() {
                    return {
                        timezone: "",
                        description: ""
                    }
                }
            }
        },
        computed: {
            timezones() {
                return moment.tz.names()
            }
        },
        methods: {
            emit() {
                this.$emit('input', this.value);
                this.$emit('close');
            }
        }
    }
</script>
<style>
    .md-autocomplete-box-content {
        z-index: 1000 !important;
    }
</style>