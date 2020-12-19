var Main = {
    data() {
        return {
            tableData: [{
                "masterId": "A1234",
                "masterName": "釋見A",
                "u1Name": "中台/中台",
                "jobName": "AA/AA",
                "officePhoneNum": "01-2345678",
                "shortMobileNum": "0987-654321",
                "mobileNum": "0987-654321",
                "roomPhoneNum": "11",
                "personalEmail": "aaa@bbb",
                "officeEmail": "aaa@bbb",
                "dormName": "123",
                "roomNum": "12",
                "isDeleted": false
            }, {
                "masterId": "A1234",
                "masterName": "釋見A",
                "u1Name": "中台/中台",
                "jobName": "AA/AA",
                "officePhoneNum": "01-2345678",
                "shortMobileNum": "0987-654321",
                "mobileNum": "0987-654321",
                "roomPhoneNum": "11",
                "personalEmail": "aaa@bbb",
                "officeEmail": "aaa@bbb",
                "dormName": "123",
                "roomNum": "12",
                "isDeleted": false
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            dialogControl: {
                userDialogVisible: false,
                roleDialogVisible: false,
                funcDialogVisible: false,
                unitDialogVisible: false,
                messageSetupDialogVisible: false,
                codeDialogVisible: false,
                syscodeDialogVisible: false,
            }
        };
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        },
        gotoManage()
        {
            location.replace('Management/PrivilegeSetup.html');
        },
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')