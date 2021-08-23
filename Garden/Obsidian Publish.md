---
status: published
---
# Obsidian Publish
[Obsidian Publish](https://obsidian.md/publish) is Obsidian's site publishing service that provides way to share Obsidian notes publicly. It's what I'm using to create this site. 

I'm using it provides some nice basic [[digital garden]] features and it integrates seamlessly with my existing Obsidian private note system. 

After many months trying to wrangle [Gatsby](https://www.gatsbyjs.com/) to develop my own public digital garden, I decided that I needed something a workflow with that would make it less likely I would get distracted by fiddling with my site and more likely that I might actually create content (minimizing [[yak shaving]]). 

## Working Notes
- The navigation list isn't accessible, so I'm leaving it off for now
	- the menu items are not actually html links and don't have ARIA attributes to make it clear
	- drop down for folders doesn't have ARIA 
- The interactive graph of the site doesn't work on touch screens
- Sliding Panes: 
	- if you have too many open at once, it's not possible to see the entire note after a while (unable to scroll horizontally)
	- I like the idea of panes providing a kind of breadcrumb trail as you navigate but in practice I think it's unconventional enough that it may be confusing without more features (the ability to close panes, a fix to the above problem, better ways of handling navigating back in the browser)

## Github Repo
- Github Repo: [tlindgren/digital-garden-obsidian](https://github.com/tlindgren/digital-garden-obsidian)
- [publish.css](https://github.com/tlindgren/digital-garden-obsidian/blob/main/publish.css): custom styles
- [publish.js](https://github.com/tlindgren/digital-garden-obsidian/blob/main/publish.js): just using this to add top global nav right now