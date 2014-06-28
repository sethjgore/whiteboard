# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "middleman-deploy"
  s.version = "0.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Tom Vaughan"]
  s.date = "2013-09-21"
  s.description = "Deploy a middleman built site over rsync, ftp, sftp, or git (e.g. gh-pages on github)."
  s.email = ["thomas.david.vaughan@gmail.com"]
  s.homepage = "http://tvaughan.github.io/middleman-deploy/"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.6"
  s.summary = "Deploy a middleman built site over rsync, ftp, sftp, or git (e.g. gh-pages on github)."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>, [">= 3.0.0"])
      s.add_runtime_dependency(%q<ptools>, [">= 0"])
      s.add_runtime_dependency(%q<net-sftp>, [">= 0"])
    else
      s.add_dependency(%q<middleman-core>, [">= 3.0.0"])
      s.add_dependency(%q<ptools>, [">= 0"])
      s.add_dependency(%q<net-sftp>, [">= 0"])
    end
  else
    s.add_dependency(%q<middleman-core>, [">= 3.0.0"])
    s.add_dependency(%q<ptools>, [">= 0"])
    s.add_dependency(%q<net-sftp>, [">= 0"])
  end
end
