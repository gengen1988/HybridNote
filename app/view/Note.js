Ext.define('TouchApp.view.Note', {
    extend: 'Ext.Container',
    requires: [
        'TouchApp.component.MyDataItem',
        'Ext.dataview.List',
        'Ext.Toolbar',
        'Ext.field.Text'
    ],
    config: {
        fullscreen: true,
        layout: 'fit',
        items: [{
            xtype: 'list',
            disableSelection: true,
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            defaultType: 'mydataitem',
            useSimpleItems: false,
            store: Ext.create('Ext.data.Store', {
                fields: ['val1', 'val2', 'disclosure'],
                data: [{
                    val1: true,
                    val2: 'world',
                    disclosure: true
                }, {
                    val1: true,
                    val2: 'jun',
                    disclosure: false
                }]
            })
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            layout: 'hbox',
            items: [{
                xtype: 'textfield',
                flex: 1
            }, {
                xtype: 'button',
                text: 'add',
                action: 'add'
            }]
        }]
    }
});
