UserInfuser.views.widget = new Ext.Panel({
			id : 'widget',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'Widget',
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
			            id: 'userId',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        }
			        /*{
			        	xtype: 'textfield',
			            id: 'userName',
			            label: 'Name',
			            showClear: true,
			            required: true,
			            useClearIcon: true
				    }*/
			        ]},
				 	{
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'View Widget',
				        cls : 'buttonCls',
				        margin: '0% 85%',
				        align :'center',
						handler: function() {
			        		 var userid = Ext.getCmp('userId').getValue();
			        		 var widgetType = localStorage.getItem('widgetType');
			        		 
			        		 if((userid != '')){
							 	viewWidget(userid, widgetType);
						 
			        		 var backBtn = UserInfuser.backButton;
			        		 backBtn.setHandler(function(){
					 			 var widget = UserInfuser.views.widget;
								 UserInfuser.views.viewport.setActiveItem(widget, { type: 'slide', reverse: true });
								 backBtn.setHandler(function(){
						 			 var widgetsListContainer = UserInfuser.widgetsListContainer;
									 UserInfuser.views.viewport.setActiveItem(widgetsListContainer, { type: 'slide', reverse: true });
									 backBtn.setHandler(backHome);
								 });
							});
					        }else{
							 	Ext.Msg.alert("Please enter the User Name and Password");
							}
					    }
				    }]
		      }],
		      dockedItems: [{
		      	xtype: 'toolbar',
		      	id: 'Widget1',
		   		layout:'fit',
		   		title: 'Widget',
		   		cls:'small_title',
		   	    ui:'light'
		   	}]
});

UserInfuser.views.widgetShow = new Ext.Panel({
    id: 'widgetShow',           
    //layout : 'fit',
    scroll : 'vertical',
	styleHtmlContent: true,
    dockedItems: [{
			  	layout:'fit',
				id: 'userInfo5',
			  	xtype: 'toolbar',
			  	title: 'Widget',
				cls:'small_title',
				ui:'light'
		}] 
});

function viewWidget(userId,widgetType){
	alert("widgetType  :"+ widgetType);
	Ext.Ajax.request({                 
		url: './ClientTest',
		 params: {
            format: 'html',
            callback: 'callback',
            ws : widgetType,
			userId: userId
        },
		success: function (response, request ) {
        		 UserInfuser.views.widgetShow.update(response.responseText);	
        		 var widgetShow = UserInfuser.views.widgetShow;
        		 UserInfuser.views.viewport.setActiveItem(widgetShow, { type: 'slide', direction: 'left' });
		},
		failure: function ( response, request ) {
			 var jsonData = Ext.util.JSON.decode(response.responseText);
			 var resultMessage = jsonData.data.response;
			 fn_AKExt(resultMessage, 'Error');
		}
	});
}
