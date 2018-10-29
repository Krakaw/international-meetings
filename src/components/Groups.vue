<template>
    <div>
        <md-card v-for="(group, i) in value" :key="i">
            <md-card-header>

                <md-field md-inline>
                    <label>Name</label>
                    <md-input @input="setValue(i, 'name', $event)" :value="group.name"></md-input>
                </md-field>

            </md-card-header>

            <md-card-content>
                <md-button @click="addTime(i)" class="md-icon-button">
                    <md-icon>add</md-icon>
                </md-button>
                <div v-for="(tz, j) in group.timezones" :key="j" >
                    <select @input="emit" v-model="tz.timezone">
                        <option v-for="tzName in timezones" :value="tzName" :key="tzName">{{tzName}}</option>
                    </select>
                    <!--<input  type="text" @input="emit" v-model="tz.description">-->
                    <input type="text" @change="setRootTime(i, tz.timezone, $event)" :value="timeForTz(i, tz.timezone)">
                    <span class="time-tick">{{currentTicks[tz.timezone]}}</span>
                </div>
            </md-card-content>

            <md-card-actions>
                <md-button @click="removeGroup(i)" class="md-icon-button md-accent">
                    <md-icon>remove</md-icon>
                </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    import moment from 'moment-timezone';
    import Vue from 'vue'
    import {MdCard, MdButton, MdField } from 'vue-material/dist/components';
    Vue.use(MdCard);
    Vue.use(MdButton);
    Vue.use(MdField);

    export default {
        props: {
            value: {
                type: Array
            }
        },
        data() {
            return {
                tickInterval: false,
                times: {

                },
                currentTicks: {

                }
            }
        },
        computed: {
            timezones() {
                return moment.tz.names()
            },
            usedTimezones() {
                let timezones = [];
                this.value.forEach(group => {
                     timezones = timezones.concat(group.timezones.map(item => item.timezone));
                });
                return Array.from(new Set(timezones));
            }
        },
        methods: {
            removeGroup(index) {
                this.value.splice(index, 1);
                this.$emit('input', this.value);
            },
            setRootTime(index, timezone, $event) {
                let time = $event.target.value;
                if (!this.times.hasOwnProperty(index)) {
                    this.times[index] = {
                        time: moment().tz(timezone).utc(),
                        timezone
                    };
                }
                if (moment(time).isValid()) {
                    this.times[index].time = moment.tz(time, timezone).utc();
                    this.times[index].timezone = timezone;
                    this.$forceUpdate();
                }
            },
            timeForTz(index, timezone) {
                if (!this.times.hasOwnProperty(index)) {
                    this.times[index] = {
                        time: moment().tz(timezone).utc(),
                        timezone

                    };
                }

                return moment(this.times[index].time).tz(timezone).format("YYYY-MM-DD HH:mm");

            },
            emit() {
                setTimeout(() => {
                    this.$emit('input', this.value);
                },250);
            },
            setValue(index, fieldName, value) {
                this.$set(this.value[index], fieldName, value);
                this.$emit('input', this.value);
            },
            addTime(index) {
                this.value[index].timezones.push({
                    timezone: moment.tz.guess(),
                    description: ""
                });
                this.$emit('input', this.value);
            }
        },
        created() {
            this.tickInterval = setInterval(() => {
                // let timezones = [];
                this.usedTimezones.forEach(timezone => {
                    this.$set(this.currentTicks, timezone, moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss"));
                })

            }, 1000);
        },
        beforeDestroy() {
            clearInterval(this.tickInterval);
        }
    }
</script>
<style>
    .time-tick {
        font-size: 0.5em
    }
    .md-card {
        width: 240px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
</style>