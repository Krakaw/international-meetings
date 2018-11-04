<template>
    <div>
        <md-card v-for="(group, groupIndex) in value" :key="groupIndex">
            <md-card-header>
                <div style="display: flex">
                    <md-field md-inline>
                        <label>Name</label>
                        <md-input @input="setValue(groupIndex, 'name', $event)" :value="group.name"></md-input>

                    </md-field>
                    <md-button @click="removeGroup(groupIndex)" class="md-icon-button md-accent">
                        <md-icon>delete</md-icon>
                    </md-button>
                </div>


            </md-card-header>

            <md-card-content>

                <div v-for="(tz, timezoneIndex) in group.timezones" :key="timezoneIndex"
                     :class="{'md-invalid': manualTime[groupIndex] && manualTime[groupIndex].timezoneIndex === timezoneIndex &&  manualTime[groupIndex].invalid}"

                >
                    <div class="name-holder">
                        <h2 class="description">{{tz.description || tz.timezone}}</h2>
                        <sub>{{tz.timezone}}</sub>
                        <span style="flex:1"></span>
                        <md-icon @click.native="updateTimezone(groupIndex,timezoneIndex)">edit</md-icon>
                        <md-icon @click.native="deleteTimezone(groupIndex,timezoneIndex)">remove</md-icon>
                    </div>
                    <div style="display: flex"
                    >
                        <md-field
                                :md-clearable="manualTime[groupIndex] && manualTime[groupIndex].timezone === tz.timezone">
                            <md-input
                                    :ref="`input-${groupIndex}-${tz.timezone}`"
                                    :value="currentFixed[groupIndex] ? currentFixed[groupIndex][tz.timezone] : currentTicks[tz.timezone]"
                                    @focus="setRootTime(groupIndex, timezoneIndex, tz.timezone, currentTicks[tz.timezone])"
                                    @input="setManualTime(groupIndex, timezoneIndex, $event)"
                            ></md-input>
                        </md-field>
                    </div>
                </div>
            </md-card-content>

            <md-card-actions>
                <md-button @click="addTimezone(groupIndex)" class="md-icon-button md-primary" md-dense>
                    <md-icon>add</md-icon>
                </md-button>

            </md-card-actions>
        </md-card>
        <v-timezone :show-dialog="showDialog" :value="editTimezone"
                    @input="setTimezone"
                    @close="showDialog = false"></v-timezone>

    </div>
</template>
<script>
    import VTimezone from './Timezone';
    import moment from 'moment-timezone';
    import Vue from 'vue'
    import {MdCard, MdButton, MdField} from 'vue-material/dist/components';

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
                //For the timezone edit popups
                currentGroupIndex: -1,
                currentTimezoneEditIndex: -1,
                editTimezone: {
                    timezone: '',
                    description: ''
                },
                showDialog: false,

                //The incrementing tick interval
                tickInterval: 0,
                //Each timezones current time
                currentTicks: {},
                //Track the groups individual calculated times from the manually set times
                currentFixed: {
                    //groupId: {tz: ""}
                },
                //The manually set time and timezone
                manualTime: {
                    //groupIndex: {timezone:'', time}
                }
            }
        },
        components: {
            VTimezone
        },
        computed: {
            usedTimezones() {
                let timezones = [];
                this.value.forEach(group => {
                    timezones = timezones.concat(group.timezones.map(item => item.timezone));
                });
                return Array.from(new Set(timezones));
            },
        },
        methods: {
            /**
             * Set the time for manual entry, this stops the clock for the block
             * @param groupIndex
             * @param timezoneIndex
             * @param timeString
             */
            setManualTime(groupIndex, timezoneIndex, timeString) {

                //Of the string is blank, revert back to the ticks
                if (timeString.trim() === "") {
                    this.$delete(this.manualTime, groupIndex);
                    this.$delete(this.currentFixed, groupIndex);
                    return;
                }
                //IF there is no manualTime or it is an update to a non editing timezone, restart
                if (!this.manualTime[groupIndex] || this.manualTime[groupIndex].timezoneIndex !== timezoneIndex) {
                    return;
                }

                let now = moment.tz(timeString, this.manualTime[groupIndex].timezone);
                if (now.isValid()) {
                    this.$set(this.manualTime[groupIndex], 'invalid', false);
                    if (!this.currentFixed.hasOwnProperty(groupIndex)) {
                        this.currentFixed[groupIndex] = {};
                    }

                    //Set the focused one manually
                    let currentTimezone = this.value[groupIndex].timezones[timezoneIndex];
                    if (!this.currentFixed[groupIndex].hasOwnProperty(currentTimezone.timezone)) {
                        this.$set(this.currentFixed[groupIndex], currentTimezone.timezone, now.tz(currentTimezone.timezone).format("YYYY-MM-DD HH:mm:ss"));
                    }
                    this.value[groupIndex].timezones.forEach((timezone, i) => {
                        if (i === timezoneIndex) {
                            return;
                        }
                        this.$set(this.currentFixed[groupIndex], timezone.timezone, now.tz(timezone.timezone).format("YYYY-MM-DD HH:mm:ss"));
                    });

                } else {
                    this.$set(this.manualTime[groupIndex], 'invalid', true);
                }
                this.$forceUpdate();
            },

            /**
             * Sets the fixed point and manual time objects
             * This disconnects the group from the automatic ticks
             *
             * @param groupIndex
             * @param timezoneIndex
             * @param timezone
             * @param currentTimeTick
             */
            setRootTime(groupIndex, timezoneIndex, timezone, currentTimeTick) {
                let editingTimezone = {...this.value[groupIndex].timezones[timezoneIndex]};
                editingTimezone.time = this.manualTime[groupIndex] && this.currentFixed[groupIndex] ? this.currentFixed[groupIndex][editingTimezone.timezone] : currentTimeTick;
                editingTimezone.timezoneIndex = timezoneIndex;
                this.$set(this.manualTime, groupIndex, editingTimezone);
                this.setManualTime(groupIndex, timezoneIndex, editingTimezone.time);
            },
            /**
             * Add the new timezone to the value object array
             * @param timezone
             */
            setTimezone(timezone) {
                if (this.currentTimezoneEditIndex > -1) {
                    this.value[this.currentGroupIndex].timezones.splice(this.currentTimezoneEditIndex, 1, timezone);
                } else {
                    this.value[this.currentGroupIndex].timezones.push(timezone);
                }
                this.emit();
                this.currentGroupIndex = -1;
                this.currentTimezoneEditIndex = -1;
            },
            /**
             * Delete a timezone row
             * @param groupIndex
             * @param timezoneIndex
             */
            deleteTimezone(groupIndex, timezoneIndex) {
                this.value[groupIndex].timezones.splice(timezoneIndex, 1);
                this.emit();
            },
            /**
             * Update a timezone row by showing the dialog
             * @param groupIndex
             * @param timezoneIndex
             */
            updateTimezone(groupIndex, timezoneIndex) {
                this.currentGroupIndex = groupIndex;
                this.currentTimezoneEditIndex = timezoneIndex;

                this.$set(this, 'editTimezone', timezoneIndex > -1 ? {...this.value[this.currentGroupIndex].timezones[timezoneIndex]} : {
                    timezone: moment.tz.guess(),
                    description: ''
                });
                this.showDialog = true;
            },
            /**
             * Add a timezone to the group
             * @param groupIndex
             */
            addTimezone(groupIndex) {
                this.updateTimezone(groupIndex, -1);
            },

            /**
             * Remove a group
             * @param groupIndex
             */
            removeGroup(groupIndex) {
                this.value.splice(groupIndex, 1);
                this.$emit('input', this.value);
            },
            /**
             * Set the parent value
             */
            emit() {
                setTimeout(() => {
                    this.$emit('input', this.value);
                }, 250);
            },
            /**
             * Set a master value
             * @param index
             * @param fieldName
             * @param value
             */
            setValue(index, fieldName, value) {
                this.$set(this.value[index], fieldName, value);
                this.$emit('input', this.value);
            },
            /**
             * Starts the tick monitor
             */
            startTracking() {
                this.tickInterval = setInterval(() => {
                    this.usedTimezones.forEach(timezone => {
                        this.$set(this.currentTicks, timezone, moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss"));
                    })
                }, 1000);
            },
            /**
             * Stops the tick monitor
             */
            endTracking() {
                clearInterval(this.tickInterval);
            }

        },
        created() {
            this.startTracking();

        },
        beforeDestroy() {
            this.endTracking();
        }
    }
</script>
<style>
    .name-holder {
        display: flex;
        cursor: pointer;
    }

    .name-holder:hover {
    }

    .name-holder h2.description {
        margin-bottom: 5px;

    }

    .time-tick {
        font-size: 1.2em;
        cursor: pointer;
    }

    .md-card {
        width: 480px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }

    .md-invalid {
        color: red;
    }
</style>