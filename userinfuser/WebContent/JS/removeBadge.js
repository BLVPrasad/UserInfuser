UserInfuser.views.removeBadge = new Ext.Panel({
			id : 'removeBadge',
		    layout : 'fit',  
		    items: [{
		        title: 'Remove Badge',
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
			            id: 'userid3',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			             xtype: 'selectfield',
			             id: 'selec',
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
							
				        	 var userId = Ext.getCmp('userid3').getValue();
							 var badgeId = Ext.getCmp('selec').getValue();
							 
							 var logoffBtn = UserInfuser.backButton;
				        	 
							 if (userId != '' && badgeId != ''){
							
								 removeBadge(userId, badgeId);
								 
								 var backBtn = UserInfuser.backButton; 
						        	backBtn.setHandler(function(){
						        		//UserInfuser.navigationBar.setVisible('true'); 
						 				 var removeBadge = UserInfuser.views.removeBadge;
						 				 UserInfuser.views.viewport.setActiveItem(removeBadge, { type: 'slide', reverse: true });
						 				 backBtn.setHandler(backHome);
						 			});

							 }else{
							 	Ext.Msg.alert("Please enter the User Id and badge Id");
							 }
			            }
				    }]
		      }],
		      dockedItems: [{
			      	xtype: 'toolbar',
			      	id: 'badgeDocked',
			   		layout:'fit',
			   		title: 'Remove Badge',
			   		cls:'small_title',
			   	    ui:'light'
			   	}]
});

function removeBadge(userId, badgeId){
	Ext.Ajax.request({                 
		 url: './ClientTest',
         params: {
            format: 'json',
            callback: 'callback',
            ws : 'removeBadge',
            userId : userId,
            badgeId : badgeId
        },
	
		success: function ( result, request ) {
        	 UserInfuser.views.badgeRemoved.update(removeBadgeTpl.applyTemplate(result));
			 var badgeRemoved = UserInfuser.views.badgeRemoved;
			 UserInfuser.views.viewport.setActiveItem(badgeRemoved, { type: 'slide', direction: 'left' });
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