Ext.Loader.setPath({
    'Ext': 'touch/src'
});

Ext.application({
    name: 'TouchApp',
    controllers: ['Note'],
    requires: [
        'Ext.data.Store'
    ]        
});
