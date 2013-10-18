Ext.define('TouchApp.view.CheckIn', {
    extend: 'Ext.Container',
    plugins: [{
        xclass: 'ETFramework.plugin.NavigationToolbar',
        items: [{
            xtype: 'button',
            text: '显示地图'
        }, {
            xtype: 'button',
            text: '重新定位'
        }]
    }],
    config: {
        title: '考勤',
        items: [{
            xtype: 'label',
            html: '当前登录用户：小明'
        }, {
            xtype: 'textfield'
        }, {
            xtype: 'label',
            html: '定位成功'
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                text: '签到',
                flex: 1
            }, {
                xtype: 'button',
                text: '签退',
                flex: 1
            }]
        }, {
            xtype: 'label',
            html: 'wenzi'
        }]
    }
});
