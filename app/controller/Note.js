Ext.define('TouchApp.controller.Note', {
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Note'
        ],
        refs: {
            input: 'textfield',
            list: 'dataview'
        },
        control: {
            'dataview': {
                itemswipe: 'doSwipe'
            },
            'button[action=add]': {
                tap: 'doAdd'
            }
        }
    },

    launch: function () {
        Ext.create('TouchApp.view.Note');
    },

    doSwipe: function (dataview, index, target, record, e, eOpts) {
        console.log('swipe');
        var hide = record.get('val1');
        hide = !hide;
        record.set('val1', hide);
    },

    doAdd: function () {
        var value = this.getInput().getValue();
        this.getInput().reset();
        this.getList().getStore().add({
            val1: true,
            val2: value
        });
    }

});