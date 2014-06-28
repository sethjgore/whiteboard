# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "middleman-minify-html"
  s.version = "3.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Thomas Reynolds"]
  s.date = "2013-07-08"
  s.description = "A HTML whitespace minifier for Middleman"
  s.email = ["me@tdreyno.com"]
  s.homepage = "https://github.com/middleman/middleman-minify-html"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.6"
  s.summary = "A HTML whitespace minifier for Middleman"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman-core>, ["~> 3.0"])
    else
      s.add_dependency(%q<middleman-core>, ["~> 3.0"])
    end
  else
    s.add_dependency(%q<middleman-core>, ["~> 3.0"])
  end
end
