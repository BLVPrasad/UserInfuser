var badgeTpl = new Ext.XTemplate([
       '<tpl for=".">',
       '<tpl if="status">',	
             '<div class="cname">',
                   '<div class=""><span class="">  {points}  Badge assigned to your user.....</span></div>',
             '</div>',
       '</tpl>',
       '</tpl>'
]);

UserInfuser.views.badgeGiven = new Ext.Panel({
    id: 'badgeAssign',           
    layout : 'fit',
    scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'userInfo2',
			  	xtype: 'toolbar',
			  	title: 'Success Page',
				cls:'small_title',
				ui:'light'
			  }] 
});
