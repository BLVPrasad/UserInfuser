var userInfoTpl = new Ext.XTemplate([
		                                      
       '<tpl for=".">',
       '<tpl if="user_id">',	
             '<div class="">My User</div>',
             '<br>',
             '<center><div class=""></div></center>',
             '<div class="cname">',
                   '<div><span class="appsubtitle">User Id : {user_id}</span> </div>',
                   '<div class=""><span class="applicationstatus"> {profile_name}</span></div>',
                   '<div class=""><span class="applicationstatus">Points :  {points}</span></div>',
                   '<div class=""><span class="applicationstatusdate">Creation Date  :  {creation_date}</span></div>',
             '</div>',
            
       '</tpl>',
       '</tpl>',

       '<tpl if="length == 0">',			
	   		'<div class=""> </div>',
	   '</tpl>'
]);

UserInfuser.views.userInformation = new Ext.Panel({
      id: 'userInformation',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'userInfor',
			  	xtype: 'toolbar',
			  	title: 'User Information',
				cls:'small_title',
				ui:'light'
			  }] 
});
