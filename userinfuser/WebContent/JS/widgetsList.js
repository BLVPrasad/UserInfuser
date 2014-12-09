Ext.regModel('widgetList', {
	fields: [  
				{ name: 'id', type: 'int' },
				{ name: 'title', type: 'string' },
				{ name: 'desc', type: 'string'},
				{ name: 'icon', type: 'string'}  
			]
}); 


Ext.regStore('widgetsListStore', {
	   model: 'widgetList',  
			   data:[
			    {
					id: 1,
					title:'Trophy Case', 
					desc: 'View user trophies',
					icon: 'images/trophy.jpg'
				},
				{
					id: 2,
					title:'Rank', 
					desc: 'View user rank',
					icon: 'images/ranking.png'
				},
				{
					id: 3,
					title:'Points', 
					desc: 'View user points',
					icon: 'images/points.png'
				},
				{
					id: 4,
					title:'Notifier', 
					desc: 'Veiw notifications',
					icon: 'images/notifier.jpg'
				},
				{
					id: 5,
					title:'Leader Board', 
					desc: 'View leaderboard',
					icon: 'images/leaderBoard.png'
				},
				{
					id: 6,
					title:'Milestones', 
					desc: 'View milestones',
					icon: 'images/mileStones.jpg'
				}
				
	   ] 
}); 

UserInfuser.widgetsList = new Ext.List({
	id:'widgetsList',
	ui:'round',
	useLoadMask:true,
	store: 'widgetsListStore',
	itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
				+ '<span class="name">{title} <br>'
	 			+ '<span class="tertiary">{desc}</span>'
				+ '</span>',
	//onItemDisclosure: function(record){}
	listeners:{
	    itemtap : function(record, index) {
				 	var backBtn = UserInfuser.backButton; 
			 		backBtn.setHandler(function(){
			 			 var widgetsListContainer = UserInfuser.widgetsListContainer;
						 UserInfuser.views.viewport.setActiveItem(widgetsListContainer, { type: 'slide', reverse: true });
						 backBtn.setHandler(backHome);
					});	
					var list = UserInfuser.widgetsList;
					var rec = list.getStore().getAt(index);
					
					if (rec.data.title == "Trophy Case") {
						localStorage.setItem('widgetType', "Trophies");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left' });
					} else if (rec.data.title == "Rank") {
						localStorage.setItem('widgetType', "Rank");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left' });
					} else if (rec.data.title == "Points") {
						var backBtn = UserInfuser.backButton;
						localStorage.setItem('widgetType', "Points");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left' });
					} else if (rec.data.title == "Notifier") {
						localStorage.setItem('widgetType', "Notifier");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left' });
					} else if (rec.data.title == "Leader Board") {
						localStorage.setItem('widgetType', "LeaderBoard");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left'});
					} else if (rec.data.title == "Milestones") {
						localStorage.setItem('widgetType', "MileStones");
						var widget = UserInfuser.views.widget;
						UserInfuser.views.viewport.setActiveItem(widget, {type : 'slide', direction : 'left'});
					}
				}
	}
});

UserInfuser.widgetsListContainer = new Ext.Panel({
	id: 'widgetsListContainer',
	layout: 'fit',
	//html: 'This Main List Container',
	items: [UserInfuser.widgetsList]
});	

