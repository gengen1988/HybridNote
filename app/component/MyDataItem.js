Ext.define('TouchApp.component.MyDataItem', {
    extend: 'Ext.dataview.component.ListItem',
    xtype: 'mydataitem',
    config: {
        layout: {
            type: 'hbox',
            align: 'center'
        },
        height: 50,
        userName: {
            xtype: 'component',
            flex: 1
        },
        deleteButton: {
            xtype: 'button',
            ui: 'decline',
            action: 'delete',
            hidden: true,
            iconCls: 'delete',
            showAnimation: 'slideIn',
            hideAnimation: {
                type: 'slideOut',
                direction: 'right'
            }
        },
        dataMap: {
            getUserName: {
                setHtml: 'val2'
            }
        }
    },

    applyUserName: function (config) {
        return Ext.factory(config, Ext.Component, this.getUserName());
    },

    applyDeleteButton: function (config) {
        return Ext.factory(config, Ext.Button, this.getDeleteButton());
    },

    updateUserName: function(newUserName, oldUserName) {
        if (oldUserName) {
            this.remove(oldUserName);
        }

        if (newUserName) {
            this.add(newUserName);
        }
    },

    updateDeleteButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            newNameButton.on('tap', this.doDelete, this);
            this.add(newNameButton);
        }
    },

    updateRecord: function (record) {
        if (!record) {
            return;
        }

        if (record.get('val1')) {
            this.getDeleteButton().hide();
        } else {
            this.getDeleteButton().show();
        }

        this.callParent(arguments);

    },

    doDelete: function () {
        this.up('dataview').getStore().remove(this.getRecord());
    }

});
