var Main = {
  data() {
    return {
      treeData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
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
    logOut(){
      location.replace('../login.html');

    }
  }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')