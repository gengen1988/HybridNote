Ext.define('TouchApp.view.Login', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.field.Radio',
        'Ext.field.Number',
        'Ext.field.Toggle',
        'Ext.Toolbar',
        'Ext.Label'
    ],
    config: {
        fullscreen: true,
        scrollable: null,
        cls: 'et-login',
        items: [{
            xtype: 'titlebar',
            title: '用户登录',
            items: [{
                align: 'left',
                xtype: 'button',
                text: '重置',
                iconCls: 'refresh',
                ui: 'decline'
            }, {
                align: 'right',
                xtype: 'button',
                text: '登录',
                iconCls: 'action',
                ui: 'confirm'
            }]
        }, {
            xtype: 'fieldset',
            aaa: 'auth',
            showAnimation: 'slideIn',
            hideAnimation: 'slideOut',
            items: [{
                xtype: 'textfield',
                label: '用户名',
                name: 'username',
                placeHolder: 'username'
            }, {
                xtype: 'passwordfield',
                label: '密码',
                name: 'password',
                placeHolder: 'password'
            }]
        }, {
            xtype: 'fieldset',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut',
            items: [{
                xtype: 'radiofield',
                name: 'type',
                label: '营业厅',
                value: 0
            }, {
                xtype: 'radiofield',
                name: 'type',
                label: '合作厅',
                value: 1
            }, {
                xtype: 'numberfield',
                label: 'MIS 编码',
                name: 'mis',
                placeHolder: 'MIS-CODE'
            }]
        }, {
            xtype: 'fieldset',
            showAnimation: 'fadeIn',
            hideAnimation: 'fadeOut',
            items: [{
                xtype: 'textfield',
                label: '验证码',
                name: 'captcha',
                placeHolder: 'captcha'
            }]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            hidden: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'up'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'down'
            },
            ui: 'neutral',
            items: [{
                xtype: 'togglefield',
                label: '记住我',
                labelCls: 'bigfont',
                labelWidth: '3em'
            }, {
                docked: 'right',
                xtype: 'label',
                showAnimation: 'slideIn',
                hideAnimation: {
                    type: 'slideOut',
                    direction: 'right'
                },
                html: '当前用户：123',
                hidden: true
            }]
        }]
    }
});
