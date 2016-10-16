var searchCardTemplate = _.template(`
	<div class="class-filter">
		<a class="title" href=#All>Book Of Shadow</a>
		<div class="class-selector">
			<a class="attribute-selector" href=#Bard>Bard</a>
			<a class="attribute-selector" href=#Cleric>Cleric</a>
			<a class="attribute-selector" href=#Druid>Druid</a>
			<a class="attribute-selector" href=#Paladin>Paladin</a>
			<a class="attribute-selector" href=#Ranger>Ranger</a>
			<a class="attribute-selector" href=#Sorcerer>Sorcerer</a>
			<a class="attribute-selector" href=#Warlock>Warlock</a>
			<a class="attribute-selector" href=#Wizard>Wizard</a>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
			<div class="filler"></div>
		</div>
	</div>
	<input type="text" class="filter-bar" placeholder="Spell name"></input>
`);

var levelTemplate = _.template(`
	<div class="level-header" value="<%= rank%>">Level <%= rank%>:</div>
	</div>
`);

var spellTemplate = _.template(`
	<div class="spell">
		<div class="accordion-header">
			<%= name %>
		</div>
		<div class="accordion-main" style="display: none;">
			<div class="spell-header">
				Level: <%= level %> School: <%= school %> Used By:
				<% _.each(classes, function(ele){ %>
				            <%= ele %>, 
				        <% }); %>
			</div>
			<div class="spell-body">
				<%= spelltext %>
			</div>
		</div>
	</div>
`);
