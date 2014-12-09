Ext.regModel('mainList', {
	fields: [  
				{ name: 'id', type: 'int' },
				{ name: 'title', type: 'string' },
				{ name: 'desc', type: 'string'},
				{ name: 'icon', type: 'string'}  
			]
}); 


Ext.regStore('mainListStore', {
	   model: 'mainList',  
			   data:[
			    {
					id: 1,
					title:'Create User', 
					desc: 'Creating a User',
					icon: 'images/user.jpg'
				},
				{
					id: 2,
					title:'Points', 
					desc: 'Give the points to the user',
					icon: 'images/points.png'
				},
				{
					id: 3,
					title:'Add Badge', 
					desc: 'Assigning a badge to the user',
					icon: 'images/addBadge.png'
				},
				{
					id: 4,
					title:'User Info', 
					desc: 'Veiw User Information',
					icon: 'images/userinfo.png'
				},
				{
					id: 5,
					title:'Remove Badge', 
					desc: 'remove a badge to the user',
					icon: 'images/badge1.png'
				},
				{
					id: 6,
					title:'Widgets', 
					desc: 'View different widgets',
					icon: 'images/star.jpg'
				}
				
	   ] 
	});