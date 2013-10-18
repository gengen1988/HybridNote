Ext.define('TouchApp.view.TestView', {
    extend: 'Ext.Container',
    alias: 'widget.testview',
    requires: [
        'Ext.Toolbar',
        'Ext.field.Text',
        'ETFramework.plugin.NavigationToolbar'
    ],
    config: {
        plugins: [{
            xclass: 'ETFramework.plugin.NavigationToolbar',
            items: [{
                xtype: 'textfield'
            }, {
                xtype: 'button',
                iconCls: 'add',
                ui: 'confirm'
            }]
        }],
        items: [{
            xtype: 'button',
            text: 'hello'
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            ui: 'light',
            items: [{
                xtype: 'button',
                iconCls: 'home',
                text: 'home'
            }]
        }]
    }
});
