#require 'middleman-gh-pages'

require 'middleman-gh-pages'


SSH_USER = 'u35775128'
SSH_HOST = 's93421611.onlinehome.us'
SSH_DIR  = '/homepages/22/d93421593/htdocs/seth
/'

desc "Build the website from source"
task :build do
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end
desc "Run the preview server at http://localhost:4444"
task :preview do
  system("middleman server")
end

desc "Deploy website via rsync"
task :testing do
  puts "## Deploying website via rsync to #{SSH_HOST}"
  status = system("rsync -avze 'ssh' --delete build/ #{SSH_USER}@#{SSH_HOST}:#{SSH_DIR}")
  puts status ? "OK" : "FAILED"
end

desc "Build and deploy website"
task :gen_deploy => [:build, :deploy] do
end