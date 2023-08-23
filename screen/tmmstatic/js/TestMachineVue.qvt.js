/* This software is in the public domain under CC0 1.0 Universal plus a Grant of Patent License. */
Vue.component('byl-media-devices', {
    name: "bylMediaDevices",
    template: '<div> Just For test</div>',
<!--                template: '<q-select  v-model = "model" :options = "options" />',-->
    props: { limitKind:String },
<!--                data: function() { return { model:null, options:["1","2","3"] };},-->
<!--
    created: function() {
        navigator.mediaDevices.enumerateDevices()
            .then(
                function(devices){
                    devices.foreach(
                        function(device){
                            if(limitKind && limitKind.size() > 0){
                                if(device.kind == limitKind){
                                    let option = {label: device.label,value: device.deviceId};
                                }else{
                                    return;
                                }

                            } else {
                                let option = {label: device.label,value: device.deviceId};
                            }
                            if(option){ options.push(option);};
                        }
                    );
                }
            );
    }
-->
});
