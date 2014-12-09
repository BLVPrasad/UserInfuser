/*UserInfuser.views.homePanel = new Ext.Panel({
			id : 'home',
		    layout : 'fit',  
		    items: [{
		        title: 'User Infuser',
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
			             xtype: 'selectfield',
			             id: 'sel',
			             label: 'Action',
			             options: [{
			                 text: 'Create User',
			                 value: 'createUser'
			             }, {
			                 text: 'Give Points',
			                 value: 'givePoints'
			             }, {
			                 text: 'Give Badge',
			                 value: 'giveBadge'
			             }, {
			                 text: 'Give Badge Points',
			                 value: 'giveBadgePoints'
			             }, {
			                 text: 'Get User Info.',
			                 value: 'userInfo'
			             }], // options
			             listeners: {
			                 change: function (select, newValue, oldValue) {
			                     Ext.Msg.alert('change', newValue.data.value);
			                 } // change
			             } // listeners
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
							
				        	 if(Ext.getCmp('sel').getValue() == "createUser"){
			                	 var createUserPanel = UserInfuser.views.createUsers;
								 UserInfuser.views.viewport.setActiveItem(createUserPanel, { type: 'slide', direction: 'left' });
			                 }
			                 else if(Ext.getCmp('sel').getValue() == "givePoints"){
			                	 var givePointsPanel = UserInfuser.views.givePoints;
								 UserInfuser.views.viewport.setActiveItem(givePointsPanel, { type: 'slide', direction: 'left' });
			                 }
			                 
			                 else if(Ext.getCmp('sel').getValue() == "giveBadge"){
			                	 var createBadgePanel = UserInfuser.views.createBadge;
								 UserInfuser.views.viewport.setActiveItem(createBadgePanel, { type: 'slide', direction: 'left' });
			                 }
			                 
			                 else if(Ext.getCmp('sel').getValue() == "userInfo"){
			                	 var userInfoPanel = UserInfuser.views.userInfo;
								 UserInfuser.views.viewport.setActiveItem(userInfoPanel, { type: 'slide', direction: 'left' });
			                 }
			            }
				    }]
		      }]
		      dockedItems: [{
			      	xtype: 'toolbar',
			      	id: 'badgeDocked',
			   		layout:'fit',
			   		title: 'Create Badge',
			   		cls:'small_title',
			   	    ui:'light'
			   	}]
});*/
