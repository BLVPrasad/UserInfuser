var App = new Ext.Application({  
	name : 'UserInfuser',  
	useLoadMask : true, 
	tabletStartupScreen: 'app/img/userInfuser_launch.png',
    phoneStartupScreen: 'app/img/userInfuser_launch.png',
    icon: 'app/img/userInfuser_icon1.png',
    glossOnIcon: true, 
	launch : function () { 
		
		UserInfuser.header = new Ext.Toolbar({
            ui : 'none',
            cls: 'header',
            dock: 'top',
            height: '70px'
            //title: '<img src="app/img/UserInfuser_launch1.png" width="250px" height="80px" />'	
        });
		
		UserInfuser.ourlogoBar = new Ext.Toolbar({
		    dock: 'bottom',			
		    width  : '100%',
		    //cls : 'logo',
		    cls: 'small_title',
		    //hidden: true,
		    title:'<span><p>&nbsp;&nbsp;Powered by Hexaware<img src="images/hexlogo.png" height="20px" style="display:inline;position:absolute;padding:1px;margin:5px"></p></span>'
		});
		
		UserInfuser.backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: backHome,
			hidden: true,
			scope: this
			
        });
		
		UserInfuser.spacer = [
			{
				xtype:'spacer'
			}
		];		
		
		
		UserInfuser.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',			
            title: 'UserInfuser',  
			hidden: 'true',          
            items: [ UserInfuser.backButton ]
        });
		
		UserInfuser.headerPanel = new Ext.Panel({
        	items: [UserInfuser.header],
        	dock:'top',
			border: '0px'
        });
		
		UserInfuser.mainList = new Ext.List({
			id:'mainList',
			ui:'round',
			useLoadMask:true,
			store: 'mainListStore',
			itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
						+ '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{desc}</span>'
						+ '</span>',
			onItemDisclosure: function(record){}
		});
		
		UserInfuser.mainListContainer = new Ext.Panel({
			id: 'mainListContainer',
			layout: 'fit'
			//html: 'This Main List Container',
			//items: [UserInfuser.mainList]
			
            
        });		
		
		
		UserInfuser.views.viewport = new Ext.Panel({  
		    fullscreen : true,  
		    layout : 'card',  
		    cardAnimation : 'slide',
		    items: [				
				UserInfuser.views.login
			],
			dockedItems: [UserInfuser.navigationBar,UserInfuser.ourlogoBar] 
		});		
		
		
	}
	
	
});

function onBackTap(){
	var mainListContainer = UserInfuser.mainListContainer;
	if (UserInfuser.views.viewport.getActiveItem() === mainListContainer) {
		    mainListContainer.onBackTap();
	}else{
		UserInfuser.views.viewport.setActiveItem(UserInfuser.mainListContainer, { type: 'slide', reverse: true });	
		UserInfuser.backButton.hide();
	}				      
}

function backHome() {
		var mainListContainer = UserInfuser.mainListContainer;
		if (UserInfuser.views.viewport.getActiveItem() === mainListContainer) {
			    mainListContainer.onBackTap();	
		}else{
			UserInfuser.views.viewport.setActiveItem(UserInfuser.mainListContainer, { type: 'slide', reverse: true });	
			UserInfuser.backButton.hide();
		}
}
