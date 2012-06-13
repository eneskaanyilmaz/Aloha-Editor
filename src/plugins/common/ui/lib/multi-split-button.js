define(["aloha/core",
		"aloha/jquery",
		"ui/component",
		"ui/multiSplit"],
function(Aloha, $, Component, MultiSplit){

	function MultiSplitButton(props){

		Component.define(props.name, MultiSplit, {
			getButtons: function() {
				return makeButtonsFromOldStyleProps(props, false);
			},
			getItems: function() {
				return makeButtonsFromOldStyleProps(props, true);
			}
		});

		var activeItem = null;

		function makeButtonsFromOldStyleProps(props, wide) {
			var buttons = [];
			$.each(props.items, function(_, item){
				if ( !!item.wide != wide) {
					return;
				}
				buttons.push({
					label: item.tooltip,
					icon: item.iconClass,
					click: item.click,
					isActive: function(){
						// TODO return activeItem === item.name;
					}
				});
			});
			return buttons;
		}

		return {
			showItem: function(){
			},
			setActiveItem: function(name){
				activeItem = name;
			}
		};
	}

	return MultiSplitButton;
});
