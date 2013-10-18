Ext.define('TouchApp.view.StoreTest', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.plugin.ListPaging'],
    config: {
        plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }],
        itemTpl: '{name}',
        store: {
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'test',
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            },
            fields: ['name'],
            autoLoad: true
        }
    }
});