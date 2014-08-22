Template.configureLoginServiceDialogForUber.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForUber.fields = function () {
  return [
    {property: 'clientId',  label: 'Client ID'},
    {property: 'secret', label: 'Secret'}
  ];
};
