Template.configureLoginServiceDialogForUber.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForUber.fields = function () {
  return [
    {property: 'appId',  label: 'App ID'},
    {property: 'secret', label: 'Secret'}
  ];
};
