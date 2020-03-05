rblms.define(function (require) {
    var BB = require('backbone'),
        $ = require('jquery'),
        _ = require('underscore'),
        Settings = require('settings'),
        eventDispatcher = require('core/event_dispatcher'),
        gaTracker = require('core/stats/ga_tracker'),
        Bootstrap = require('bootstrap'),
        Model = require('widgets/models/site_subscribe'),
        Template = require('widgets/templates/site_subscribe'),
        WhitelabelSettings = require('utils/whitelabel_settings'),
        Consts = require('consts'),
        Engine = require('engine'),
        Utils = require('utils'),
        appEngine = require('core/app_engine');

    return BB.View.extend({
        events: {
            'click': 'ignoreClick', // in case of clickable header
            'click button': 'subscribe'
        },
        initialize: function () {
            var data = _.extend((WhitelabelSettings.getTemplateVars().site_subscribe || Consts.SITE_SUBSCRIBE), {
                site_id: Bootstrap.alerts_site ? Bootstrap.alerts_site.id : Settings.site.id,
                user_id: Settings.user.id
            });
            this._SiteInstance = new BB.Model(Settings.site);
            this.model = new Model(data);
        },
        ignoreClick: function () {
            eventDispatcher.trigger('post_page:clicked');
            return true;
        },
        subscribe: function (evnt) {
            var view = this,
                $el = $(evnt.currentTarget),
                email = this.emailField.val(),
                errorMsg = '',
                params = {email: email, groups: []};

            if (!email) {
                errorMsg = 'Please enter your email';
                this.notify({
                    message: errorMsg, type: 'error', timeout: 2000
                });
                return this;
            }

            if (this.groupFields.length > 0) {
                    this.groupFields.each(function () {
                        if($(this).is(':checked')) {
                            params.groups.push($(this).val());
                        }
                    });
            }

            $el.data('ga-tracking') &&
                gaTracker.trackAction('signup_subscribe.%s'.format($el.data('ga-tracking')), window.location.href);

            this.notify({message: 'Processing ...'});

            this.model.save(params, {
                success: function () {
                    var isEnterprise = view._SiteInstance.get('paid_features')['enterprise'],
                        msg = view.model.getSuccessMessage(isEnterprise);

                    view.notify({ message: msg, type: 'subscribed', timeout: 7000 });

                    view.options.router && view.options.router.trigger('email:subscribed',{ emailAddress: email });
                    eventDispatcher.trigger('email:subscribed');

                    this.trackNewslettersSubscribeEvent();

                    $.cookie('newsletters_subscribed', true, { expires: 31 });

                }.bind(this),
                error: function (model, response) {
                    var msg = Utils.getXhrErrorMessage(response);
                    view.notify({message: msg, type: 'error', timeout: 7000});

                    eventDispatcher.trigger('email:error', msg);
                },
                complete: function () {
                    view.emailField.val('');
                }
            });
            return this;
        },
        trackNewslettersSubscribeEvent: function () {
            gaTracker.trackAction('newsletter_signup.signup_follow_box', window.location.href);
        },
        render: function () {
            this.$el.is(':empty') && this.$el.append(Template.render(this.model.toJSON()));
            this.emailField = this.$('input[type=email]');
            this.groupFields = this.$('input[type=checkbox]');
            console.log('groupFields');
            console.log(this.groupFields);

            return this;
        }
    });
});

