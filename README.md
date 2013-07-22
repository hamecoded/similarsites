Installing on a *nix environment
================================
install node from site pkg
run:
npm install -g yo
under the project dir run:
npm install
bower install
execute:
grunt server

Installing the Environment
==========================
install npm
-----------
	download msi from
	@http://nodejs.org/

install git
-----------
	http://git-scm.org/

install ruby
------------
download from: http://rubyinstaller.org/downloads/
	these packages:
	1. Windows rubyinstaller - latest version
		run the installer - check these checkboxes:
		 * ADD ruby to PATH.
		 * associate files

	* requires cmd/terminal relaunch

install compass (command line)
------------------------------
	* requires Ruby
	reopen your shell after you installed ruby
	$ gem install compass

install yeoman + bower + grunt
------------------------------
npm install -g yo grunt-cli bower 
	
	references:
	1. @http://yeoman.io/

 	2. @http://gruntjs.com/getting-started

	3. @http://bower.io/

======================================
		END of Environment Setup
======================================

======================================

======================================
Instructions for Development
======================================
Setup Chrome for development:
	1. open this url: chrome://flags
	2. "Enable" this experiment: "Developer Tools experiments"
	3. restart chrome

Open Developers Toolbar of Chrome (while in a tab):	
	click the cog|gear icon located in the bottom right corner (settings)
	on the left sidebar, click "experiments"
	check these:
		Support for Sass
		File system folders in Sources Panel
	
	Restart Chrome

Config Chrome to sync with your file system
-------------------------------------------
open developers toolbar
click on the left sidebar on "Workspaces"
Add file system path: "SaaS2" folder
Add file system path: "SaaS2/styles" folder
	

open this folder: 
	C:\dev\trunk\SaaS2
on cmd run:
	
	npm install && bower install
	
	(bower will would install all third parties dependencies defined in component.json)

Testing Running and Building
----------------------------
grunt test
grunt server
grunt (same as running grunt build)



========================================================================
OPTIONAL INFORMATION
========================================================================
project creation generators used
---------------------------------
npm install -g generator-backbone


Setting Up NGINX HTTP Server
---------------------------------

some useful commands:
http://spatialindex.wordpress.com/2012/05/25/nginx-on-windows-8/


third parties ref
-----------------

backbone resources
------------------
http://backbonejs.org/
https://github.com/documentcloud/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites

bower resources
---------------
http://sindresorhus.com/bower-components/
http://tech.pro/tutorial/1190/package-managers-an-introductory-guide-for-the-uninitiated-front-end-developer#bower_endpoints