UserInfuser.views.createUsers = new Ext.Panel({
			id : 'createuser',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'Create User',
		        xtype: 'form',
		        //id: 'loginForm',
		        scroll: 'vertical',
		        items: [{
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
			            id: 'user_Id',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			        	xtype: 'textfield',
			            id: 'user_name',
			            label: 'Name',
			           // allowBlank: true,
			            showClear: true,
			            required: false,
			            useClearIcon: true
				    },{
			            xtype: 'textfield',
			            id: 'url',
			            label: 'Profile',
			            //allowBlank: true,
			            showClear: true,
			            required: false,
			            useClearIcon: true
			        },{
			            xtype: 'textfield',
			            id: 'imageurl',
			            label: 'Image URL',
			            allowBlank: true,
			            showClear: true,
			            required: false,
			            useClearIcon: true
			        }]},
				 	{
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Create or Update User',
				        cls : 'buttonCls',
				        margin: '0% 85%',
				        align :'center',
				        handler: function() {
							 var userId = Ext.getCmp('user_Id').getValue();
							 var userName = Ext.getCmp('user_name').getValue();
							 var url = Ext.getCmp('url').getValue();
							 var imageurl = Ext.getCmp('imageurl').getValue();
				        	 // alert("user ID : "+userId);
							 if(userId != ''){
								 callCreateUser(userId,userName,url,imageurl);
								 	
									 var backBtn = UserInfuser.backButton; 
							        	backBtn.setHandler(function(){
							        		//UserInfuser.navigationBar.setVisible('true'); 
							 				 var createUsers = UserInfuser.views.createUsers;
							 				 UserInfuser.views.viewport.setActiveItem(createUsers, { type: 'slide', reverse: true });
							 				 backBtn.setHandler(backHome);
							 		});	
							 }
							 else{
								 Ext.Msg.alert("Please enter the User Id");
							 }
				    }
		      }],  //button
			//fieldset items
		      dockedItems: [{
		      	xtype: 'toolbar',
		      	id: 'CreateUserDocked',
		   		layout:'fit',
		   		title: 'Create User',
		   		cls:'small_title',
		   	    ui:'light'
		   	}]
		}]   //   form items
});


function callCreateUser(userId,userName,url,imageurl){
	alert("userId" +userId);
	Ext.Ajax.request({                 
		url: './ClientTest',
		 params: {
            format: 'json',
            callback: 'callback',
            ws : 'createUser',
			userId : userId,
			name : userName,
			url : url,
			image : imageurl
        },
		success: function ( result, request ) {
        	
        		 var userCreated = UserInfuser.views.userCreated;
        		 UserInfuser.views.viewport.setActiveItem(userCreated, { type: 'slide', direction: 'left' });
		},
		failure: function ( response, request ) {
			 var jsonData = Ext.util.JSON.decode(response.responseText);
			 var resultMessage = jsonData.data.response;
			 fn_AKExt(resultMessage, 'Error');
		}
	});
}


