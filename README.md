# jekyll_site
Template to Mozilla México site

## Requirements
* ruby 2.4.1
* jekyll 3.6.2

## Gems requirements
* gem install hpricot
* gem install open_uri_redirections

## Running locally
* git clone https://github.com/tuxlan/jekyll_site.git
* cd jekyll_site
* bundle install
* jekyll build --destination /path/to/document_root

Where */path/to/document_root* is the **DocumentRoot** from Apache or Nginx Server config

## Livereload
* jekyll build --destination /path/to/document_root --watch


