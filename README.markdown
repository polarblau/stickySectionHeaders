# Usage

Basic options
	$('#container').stickySectionHeaders();

Check out the [demo here](http://www.polarblau.com/code/jquery/stickysectionheaders).
	
Settings and defaults
	$('#container').stickySectionHeaders({
		stickyClass      : 'sticky',
		headlineSelector : 'strong'
	});
	
	
Requires basic HTML structure
	<div id="container">
		<ul class="sections">
			<li>
				<strong>Section Headline 1</strong>
				<ul>
					<li id="id-1">Content line</li>
					<li id="id-2">Content line</li>
					<li id="id-3">Content line</li>
					<li id="id-4">Content line</li>
				</ul>
			</li>
			<li>
				<strong>Section Headline 2</strong>
				<ul>
					<li id="id-5">Content line</li>
					<li id="id-6">Content line</li>
				</ul>
			</li>
			<li>
				<strong>Section Headline 4</strong>
				<ul>
					<li id="id-14">Content line</li>
					<li id="id-15">Content line</li>
					<li id="id-16">Content line</li>
					<li id="id-17">Content line</li>
				</ul>
			</li>
		</ul>          
	</div>