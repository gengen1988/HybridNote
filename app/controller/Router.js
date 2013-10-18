Ext.define('TouchApp.controller.Router', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            '': 'showLogin'
        },
    },

    showLogin: function () {
        var history = this.getApplication().getHistory();
        history.add(Ext.create('Ext.app.Action', {
            url: 'login/'
        }));
    }

});
