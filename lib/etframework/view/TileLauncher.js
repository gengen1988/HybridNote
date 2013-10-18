Ext.define('ETFramework.view.TileLauncher', {
    extend: 'Ext.navigation.View',
    requires: [
        'Ext.dataview.DataView',
        'Ext.data.Store'
    ],
    
    config: {
        fullscreen: true,
        autoDestroy: false,
        items: [{
            title: 'home',
            xtype: 'dataview',
            scrollable: null,
            store: {
                //autoLoad: true,
                proxy: {
                    type: 'ajax',
                    reader: {
                        type: 'json',
                        rootProperty: 'results'
                    }
                },
                fields: ['name', 'xclass', 'config', 'badge', 'icon'],
            },
            itemTpl: [
                '<div class="x-hasbadge" style="height: 100%; background-size: 100% 100%; background-image: url({icon});">',
                    '<tpl if="badge">',
                        '<span class="x-badge" style="font-size: 1em;">{badge}</span>',
                    '</tpl>',
                '</div>',
                '<div style="text-align: center; text-shadow: #fff 0 0.08em 0;">{name}</div>'
            ].join(''),
            baseCls: 'et-tileview'
        }]
    },

    initialize: function () {
        this.callParent(arguments);
        this.subViews = {};
        var dataview = this.down('dataview');
        dataview.getStore().getProxy().setUrl(this.getUrl());
        dataview.getStore().load();
        dataview.on('itemtap', this.handleItemTap, this);
    },

    handleItemTap: function (dataview, index, target, record, e, eOpts) {
        var id = record.getId();
        if (!this.subViews[id]) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask'
            });
            Ext.require(record.get('xclass'), Ext.bind(this.loadModule, this, [
                id,
                record.get('xclass'),
                record.get('config')
            ]));
        } else {
            this.openJSWin(id);   
        }
        id = null;
    },

    loadModule: function (id, xclass, config) {
        Ext.Viewport.setMasked(false);
        this.subViews[id] = Ext.create(xclass, config);
        this.openJSWin(id);
    },

    openJSWin: function (id) {
        this.push(this.subViews[id]);
    }

});
