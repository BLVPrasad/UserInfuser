UserInfuser.logoBar = new Ext.Toolbar({
            dock: 'top',			
            width  : '100%',
            cls : 'logo'
        });

UserInfuser.views.login = new Ext.Panel({
			id : 'login',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'Login',
		        xtype: 'form',
		        //id: 'loginForm',
		        scroll: 'vertical',
		        items: [ UserInfuser.logoBar, 
		       /*  {
		            xtype: 'panel',
		            html: '<img style="height: 100px; text-align:center; width: 70%;" src="http://localhost:7080/WebUserInfuser/images/cloudCaptive.png" />'
		        },*/
		                 {
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
			            id: 'user',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			            xtype: 'passwordfield',
				        id: 'password',
				        label: 'Password',
				        useClearIcon: false
				    }]},
				    {
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Login',
				        cls : 'buttonCls',
				        margin: '0% 85%',
				        align :'center',
				        handler: function() {
							
				        	 var userid = Ext.getCmp('user').getValue();
							 var password = Ext.getCmp('password').getValue();
							
				        	 UserInfuser.navigationBar.setVisible('true');
				        	 var backBtn = UserInfuser.backButton; 
				        	 			
									var mainListContainerPanel = UserInfuser.mainListContainer;
                          			var UserInfuserList = UserInfuser.mainList;
                          			UserInfuserList.addListener('itemTap',function(list, index){
                          				var record = list.store.getAt(index);
                              			if(record.get('id') == 1){
                              				 
                              				var createUserPanel = UserInfuser.views.createUsers;
                              				UserInfuser.views.viewport.setActiveItem(createUserPanel, { type: 'slide', direction: 'left' });
                              			}else if(record.get('id') == 2){
                              				var givePointsPanel = UserInfuser.views.givePoints;
                              				UserInfuser.views.viewport.setActiveItem(givePointsPanel, { type: 'slide', direction: 'left' });
                        				}else if(record.get('id') == 3){
                        					var createBadgePanel = UserInfuser.views.createBadge;
                        					UserInfuser.views.viewport.setActiveItem(createBadgePanel, { type: 'slide', direction: 'left' });
                        				}else if(record.get('id')== 4){
                        					 var userInfoPanel = UserInfuser.views.userInfo;
            								 UserInfuser.views.viewport.setActiveItem(userInfoPanel, { type: 'slide', direction: 'left' });
                        				}
                        				 else if(record.get('id')== 5){
                        					 var removeBadge = UserInfuser.views.removeBadge;
                        					 UserInfuser.views.viewport.setActiveItem(removeBadge, { type: 'slide', direction: 'left' });
                        				 }
                        				 else if(record.get('id')== 6){
                        					 var widgetsListContainer = UserInfuser.widgetsListContainer;
                        					 UserInfuser.views.viewport.setActiveItem(widgetsListContainer, { type: 'slide', direction: 'left' });
                        				 }
                              			 UserInfuser.backButton.show();
                          			});
                          			
                          			mainListContainerPanel.add(UserInfuserList);
                          			UserInfuser.views.viewport.setActiveItem(mainListContainerPanel, { type: 'slide', direction: 'left' });
                          			UserInfuser.navigationBar.doComponentLayout();	
                          			UserInfuser.navigationBar.setVisible(true);
                          			
                          			UserInfuser.views.viewport.doComponentLayout();
                          			UserInfuser.views.viewport.setActiveItem(mainListContainerPanel, {} ); 
								 
			            }
				    }]
		      }]
});
