var removeBadgeTpl = new Ext.XTemplate([
       '<tpl for=".">',
       '<tpl if="status">',	
             '<div class="cname">',
                   '<div class=""><span class="">  {points}  Badge Removed to your user.....</span></div>',
             '</div>',
       '</tpl>',
       '</tpl>'
]);

UserInfuser.views.badgeRemoved = new Ext.Panel({
    id: 'badgeRemoved',           
    layout : 'fit',
    scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'userInfo5',
			  	xtype: 'toolbar',
			  	title: 'Success Page',
				cls:'small_title',
				ui:'light'
			  }] 
});
