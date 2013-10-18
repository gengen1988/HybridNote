Ext.define('ETFramework.plugin.NavigationToolbar', {
    extend: 'Ext.Component',
    alias: 'plugin.toolbar',
    config: {
        items: undefined
    },

    init: function (component) {
        component.on('activate', this.handleActivate, this);
        component.on('deactivate', this.handleDeactivate, this);
    },

    handleActivate: function (newActiveItem, container, oldActiveItem, eOpts) {
        if (this.getItems()) {
            if (!newActiveItem.navigationToolbar) {
                newActiveItem.navigationToolbar = Ext.create('Ext.Container', {
                    align: 'right',
                    layout: 'hbox',
                    showAnimation: 'fadeIn',
                    hideAnimation: 'fadeOut',
                    items: this.getItems()
                });
                container.getNavigationBar().add(newActiveItem.navigationToolbar);
            }
            newActiveItem.navigationToolbar.show();
        }
    },

    handleDeactivate: function (oldActiveItem, container, newActiveItem, eOpts) {
        if (oldActiveItem.navigationToolbar) {
            oldActiveItem.navigationToolbar.hide();
        }
    }

});
