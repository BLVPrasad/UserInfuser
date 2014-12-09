UserInfuser.views.userCreated = new Ext.Panel({
      id: 'userCreated',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      html : '<div class="successMsg"> User Created Successfully ........  </div>',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'Success Page',
		cls:'small_title',
		ui:'light'
	  }]
});


