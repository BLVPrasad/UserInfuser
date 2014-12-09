var pointsTpl = new Ext.XTemplate([
       '<tpl for=".">',
       '<tpl if="status">',	
             '<div class="cname">',
                   '<div class=""><span class="">  {points}  Points Given to your user.....</span></div>',
             '</div>',
       '</tpl>',
       '</tpl>'
]);

UserInfuser.views.pointsGiven = new Ext.Panel({
    id: 'pointsGiven',           
    layout : 'fit',
    scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'userInfo1',
			  	xtype: 'toolbar',
			  	title: 'User Information',
				cls:'small_title',
				ui:'light'
			  }] 
});
