UserInfuser.views.givePoints = new Ext.Panel({
			id : 'givePoints',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'Points',
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
			            id: 'userId2',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			        	xtype: 'textfield',
			            id: 'points',
			            label: 'Points',
			            showClear: true,
			            required: true,
			            useClearIcon: true
				    }]},
				    {
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Submit',
				        cls : 'buttonCls',
				        margin: '0% 90%',
				        align :'center',
				        handler: function() {
							
				        	 var userId2 = Ext.getCmp('userId2').getValue();
							 var points = Ext.getCmp('points').getValue();
							
				        	 var logoffBtn = UserInfuser.backButton;
				        	 
							 if (userId2 != '' && points != ''){
								 givePoints(userId2,points);
							
							 var backBtn = UserInfuser.backButton; 
					        	backBtn.setHandler(function(){
					        		//UserInfuser.navigationBar.setVisible('true'); 
					 				 var givePoints = UserInfuser.views.givePoints;
					 				 UserInfuser.views.viewport.setActiveItem(givePoints, { type: 'slide', reverse: true });
					 				 backBtn.setHandler(backHome);
					 			});
								 // var homePanel = UserInfuser.views.homePanel;
								 // UserInfuser.views.viewport.setActiveItem(homePanel, { type: 'slide', direction: 'left' });
							 }else{
							 	Ext.Msg.alert("Please enter the User Name and Password");
							 }
			            }
				    }]
		      }],
		      dockedItems: [{
			      	xtype: 'toolbar',
			      	id: 'loginDocked',
			   		layout:'fit',
			   		title: 'Points',
			   		cls:'small_title',
			   	    ui:'light'
			   	}]
		});

function givePoints(userId,points){
	Ext.Ajax.request({                 
		url: './ClientTest',
		 params: {
            format : 'json',
            callback : 'callback',
            ws : 'givePoints',
			userId : userId,
			points : points
        },
	
		success: function ( result, request ) {
        	 UserInfuser.views.pointsGiven.update(pointsTpl.applyTemplate(result));
			 var pointsGiven = UserInfuser.views.pointsGiven;
			 UserInfuser.views.viewport.setActiveItem(pointsGiven, { type: 'slide', direction: 'left' });
		},
		failure: function ( result, request ) {
		 var jsonData = Ext.util.JSON.decode(result.responseText);
		 var resultMessage = jsonData.data.result;
		 fn_AKExt(resultMessage, 'Error');
		}
	});
}

/*function givePoints(userId,points){
Ext.util.JSONP.request({
                          url: './ClientTest',
                          params: {
                             format : 'json',
                             callback : 'callback',
                             ws : 'givePoints',
							 userId : userId,
							 points : points
                         },
                         
                          method: 'GET', 
                          callbackKey: 'callback',
                        
                          callback: function(result) {  
                          if(result.status == "success"){
							  UserInfuser.views.pointsGiven.update(pointsTpl.applyTemplate(result));
							  var pointsGiven = UserInfuser.views.pointsGiven;
							  UserInfuser.views.viewport.setActiveItem(pointsGiven, { type: 'slide', direction: 'left' });

						  }else{
						  	alert("Error. Server not responding");
							
						  }                                                                
                        //  loadingMask.hide();
                          }
                      });
}*/