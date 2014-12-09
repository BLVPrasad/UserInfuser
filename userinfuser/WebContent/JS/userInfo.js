UserInfuser.views.userInfo = new Ext.Panel({
			id : 'userInfo',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'User Information',
		        xtype: 'form',
		        //id: 'loginForm',
		        scroll: 'vertical',
		        items: [ {
				    xtype : 'fieldset',
				    ui: 'round',
				    width: '70%',
				    defaults: {
		                required: true,
		                labelAlign: 'left',
		                labelWidth: '45%'
		            },
				    items : [{
			            xtype: 'textfield',
			            id: 'userId1',
			            label: 'User Id',
			            
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        }]},
				    {
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Get User Info',
				        cls : 'buttonCls',
				        margin: '0% 90%',
				        align :'center',
				        handler: function() {
			        	//UserInfuser.backButton.setVisible('true');	 
			        	//UserInfuser.navigationBar.setVisible('true');
			        	var backBtn = UserInfuser.backButton; 
			        	backBtn.setHandler(function(){
			        		//UserInfuser.navigationBar.setVisible('true'); 
			 				 var userInfo = UserInfuser.views.userInfo;
			 				 UserInfuser.views.viewport.setActiveItem(userInfo, { type: 'slide', reverse: true });
			 				 backBtn.setHandler(backHome);
			 			});	
				        	 var userid = Ext.getCmp('userId1').getValue();
							 getUserInfo(userid);
			            }
				    }]
		      }],
		      dockedItems: [{
		      	xtype: 'toolbar',
		      	id: 'userInfoDocked',
		   		layout:'fit',
		   		title: 'User Information',
		   		cls:'small_title',
		   	    ui:'light'
		   	}]
		});
		
function getUserInfo(userId){
	Ext.util.JSONP.request({
    						
                              url: './ClientTest',
                              params: {
                                 format : 'json',
                                 callback : 'callback',
                                 ws : 'userInfo',
    							 userId : userId
                             },
                              method: 'GET', 
                              callbackKey: 'callback',
                              callback: function(result) {  
                              if(result){
                            	  
    							  UserInfuser.views.userInformation.update(userInfoTpl.applyTemplate(result));
    							  var userInformation = UserInfuser.views.userInformation;
    							  UserInfuser.views.viewport.setActiveItem(userInformation, { type: 'slide', direction: 'left' });

    						  }else{
    						  	alert("Error. Server not responding");
    						  }                                                                
                             // loadingMask.hide();
                              }
                          });
}


/*function getUserInfo(userId){
	Ext.Ajax.request({                 
		url: './ClientTest',
        params: {
           format : 'json',
           callback : 'callback',
           ws : 'userInfo',
		   userId : userId
       },
		success: function ( result, request ) {
    	   	 UserInfuser.views.userInformation.update(userInfoTpl.applyTemplate(result));
			 var userInformation = UserInfuser.views.userInformation;
			 UserInfuser.views.viewport.setActiveItem(userInformation, { type: 'slide', direction: 'left' });
		},
		failure: function ( result, request ) {
			 var jsonData = Ext.util.JSON.decode(result.responseText);
			 var resultMessage = jsonData.data.result;
			 fn_AKExt(resultMessage, 'Error');
		}
	});
}*/


