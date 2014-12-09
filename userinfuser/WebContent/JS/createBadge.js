UserInfuser.views.createBadge = new Ext.Panel({
			id : 'createBadge',
		    layout : 'fit',  
		    items: [{
		        title: 'Create Badge',
		        xtype: 'form',
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
			            id: 'user3',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			             xtype: 'selectfield',
			             id: 'selec3',
			             label: 'Badge Id',
			             name : 'badgekey',
			             options: [{
			                 text: 'Job',
			                 value: 'Dedicated-Job-private'
			             }, {
			                 text: 'Performance',
			                 value: 'FirstPlace-Performance-private'
			             },{
			                 text: 'Airmen',
			                 value: 'Outstanding-Airmen-private'
			             }, {
			                 text: 'Dept.',
			                 value: 'Police-Dept.-private'
			             }] // options
			             /*listeners: {
			                 change: function (select, newValue, oldValue) {
			                     Ext.Msg.alert('change', newValue.data.value);
			                 } // change
			             } // listeners
*/			         }]},
				    {
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Submit',
				        cls : 'buttonCls',
				        margin: '0% 90%',
				        align :'center',
				        handler: function() {
							
				        	 var userId = Ext.getCmp('user3').getValue();
							 var badgeId = Ext.getCmp('selec3').getValue();
							 
							 var logoffBtn = UserInfuser.backButton;
				        	 
							 alert("user ID : "+userId)
							 if(userId != ''){
								 awardBadge(userId, badgeId);
								 
								 var backBtn = UserInfuser.backButton; 
						        	backBtn.setHandler(function(){
						        		//UserInfuser.navigationBar.setVisible('true'); 
						 				 var createBadge = UserInfuser.views.createBadge;
						 				 UserInfuser.views.viewport.setActiveItem(createBadge, { type: 'slide', reverse: true });
						 				 backBtn.setHandler(backHome);
						 			});

							 }else{
							 	Ext.Msg.alert("Please enter the User Name and Password");
							 }
			            }
				    }]
		      }],
		      dockedItems: [{
			      	xtype: 'toolbar',
			      	id: 'badgeDocked',
			   		layout:'fit',
			   		title: 'Create Badge',
			   		cls:'small_title',
			   	    ui:'light'
			   	}]
});

function awardBadge(userId, badgeId){
	alert(badgeId +""+userId);
	Ext.Ajax.request({                 
		 url: './ClientTest',
         params: {
            format: 'json',
            callback: 'callback',
            ws : 'createBadge',
            userId : userId,
            badgeId : badgeId
        },
	
		success: function ( result, request ) {
        	 UserInfuser.views.badgeGiven.update(badgeTpl.applyTemplate(result));
			 var badgeGiven = UserInfuser.views.badgeGiven;
			 UserInfuser.views.viewport.setActiveItem(badgeGiven, { type: 'slide', direction: 'left' });
		},
		failure: function ( result, request ) {
		 var jsonData = Ext.util.JSON.decode(result.responseText);
		 var resultMessage = jsonData.data.result;
		 fn_AKExt(resultMessage, 'Error');
		}
	});
}



/*function awardBadge(userId, badgeId){
	Ext.util.JSONP.request({
                              url: './ClientTest',
                              params: {
                                 format: 'json',
                                 callback: 'callback',
                                 ws : 'createBadge',
                                 userId : userId,
                                 badgeId : badgeId
                             },
                              method: 'GET', 
                              callbackKey: 'callback',
                              callback: function(result) {  

    						  if(result){

    						  }else{
    						  	alert("Error. Server not responding");
    						  }                                                                
                            		//  loadingMask.hide();
                              }
                          });
}*/