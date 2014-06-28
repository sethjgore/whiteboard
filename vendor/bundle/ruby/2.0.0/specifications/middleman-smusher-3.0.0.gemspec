# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "middleman-smusher"
  s.version = "3.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Thomas Reynolds"]
  s.date = "2012-08-09"
  s.description = "Compress images in your Middleman project"
  s.email = ["me@tdreyno.com"]
  s.homepage = "https://github.com/tdreyno/middleman-smusher"
  s.require_paths = ["lib"]
  s.rubyforge_project = "middleman-smusher"
  s.rubygems_version = "2.0.6"
  s.summary = "Compress images in your Middleman project"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<middleman>, [">= 3.0.0"])
      s.add_runtime_dependency(%q<smusher>, ["~> 0.4.9"])
    else
      s.add_dependency(%q<middleman>, [">= 3.0.0"])
      s.add_dependency(%q<smusher>, ["~> 0.4.9"])
    end
  else
    s.add_dependency(%q<middleman>, [">= 3.0.0"])
    s.add_dependency(%q<smusher>, ["~> 0.4.9"])
  end
end
