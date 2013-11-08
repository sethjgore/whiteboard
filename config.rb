require 'middleman-autoprefixer'

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true # default: false
end

# ROUTER IMPLEMENTATION VIA MIDDLEMAN RACKWARE
page "/handy.html",  :layout => :handy
page '/lab.html', :layout => :lab

#SET DIRECTORIES OF IMG / JS / CSS
set :css_dir, 'css'
set :js_dir, 'js'
#set :images_dir, 'img'

#SET MARKDOWN ENGINE CHOICE
set :markdown_engine, :redcarpet

#ACTIVATE LIVERELOAD SERVER
activate :livereload

activate :directory_indexes
activate :gzip
activate :minify_html

# TURNS ON RELATIVE ASSETS. DO NOT CHANGE
activate :relative_assets

# TURNS ON VANITY URLS. DO NOT CHANGE.
activate :directory_indexes

# TURNS ON RELATIVE LINKING. DO NOT CHANGE.
set :relative_links, true

#WHEN LAND PROJECT/* DODO? && BLOG PREFERENCES
activate :blog do |blog|
  blog.name = "handy"
  blog.prefix = "handy"
  blog.permalink = ":title"
  blog.layout = "handylesson"
  blog.default_extension = ".html.haml"

  ## WARNING WILL RETURN BLOG_CONTROLLER ERROR IF
  ## PAGES ARE NOT ORDERED BY DATE
  blog.paginate = true
end

#WHEN BUILDING SITE, DODO?
configure :build do

  ignore 'images/assets/*'

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  activate :autoprefixer
  
  # Enable cache buster
  #activate :cache_buster

  # TURNS ON RELATIVE ASSETS. DO NOT CHANGE
  activate :relative_assets

  # TURNS ON VANITY URLS. DO NOT CHANGE.
  activate :directory_indexes

  # TURNS ON RELATIVE LINKING. DO NOT CHANGE.
  set :relative_links, true

  activate :directory_indexes
  activate :gzip
  activate :minify_html
  #activate :cache_buster
  #activate :asset_hash
end

sprockets.append_path File.join "#{root}", "bower_components"