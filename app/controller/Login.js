Ext.define('TouchApp.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            rememberControl: 'togglefield',
            authSet: 'fieldset[aaa="auth"]',
            label: 'label[docked=right]',
            usernameField: 'textfield[name="username"]',
            passwordField: 'textfield[name="password"]',
            form: 'formpanel',
            toolbar: 'toolbar'
        },
        control: {
            rememberControl: {
                change: 'handleRemeber'
            },
            usernameField: {
                change: 'handleAuth'
            },
            passwordField: {
                change: 'handleAuth'
            }
        },
    },

    handleRemeber: function (toggle, slider, thumb, newValue, oldValue, eOpts) {
        if (newValue) {
            this.getAuthSet().hide();
            this.getLabel().show();
        } else {
            this.getAuthSet().show();
            this.getLabel().hide();
        }
    },

    handleAuth: function () {
        var values = this.getForm().getValues();
        if (values.username && values.password) {
            this.getToolbar().show();
        } else {
            this.getToolbar().hide();
        }
    }

});