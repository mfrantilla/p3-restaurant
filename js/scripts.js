$(document).ready(function() {

	$(".page_container").jumpto({
		  firstLevel: "> h2", // You can define which tag will represent your first level header. The default value is the <h2> tag. Any <h2> tag will automatically be used as a first level link in the menu.
		  secondLevel: false, // We also support submenu. Like above, you can define the selector for the second level header to be used in the submenu. Default is false.
		  innerWrapper: ".jumpto-block", // In case you want to switch the section wrapper class name to something else
		  offset: 400, // You can define how many pixels until the jump to menu starts to follow you on scroll. Default is 400 pixels.
		  animate: 1000, // You can define how fast/slow the page will scroll when the jump to menu is clicked. Set to false to turn off animation.
		  navContainer: false, // If you want to place your jump to menu somewhere else, simply add a selector to your predefined jump to menu container here. The default is false and it will automatically be generated.
		  anchorTopPadding: 20, // This option let you set the top padding when the jump to menu is clicked. This will let you control the space between your header and the top of the page. Default is 20 pixels.
		  showTitle: "Jump To", // You can customize the title of the jump to menu here. Set to false if you want to hide the title
		  closeButton: true // You can choose to show/hide the close button by toggling this to true/false respectively
});







});