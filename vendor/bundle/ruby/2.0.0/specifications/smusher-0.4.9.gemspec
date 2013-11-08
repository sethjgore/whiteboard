# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "smusher"
  s.version = "0.4.9"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Michael Grosser"]
  s.date = "2011-11-18"
  s.email = "michael@grosser.it"
  s.executables = ["smusher"]
  s.files = ["bin/smusher"]
  s.homepage = "http://github.com/grosser/smusher"
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.6"
  s.summary = "Automatic Lossless Reduction Of All Your Images"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<rake>, [">= 0"])
      s.add_runtime_dependency(%q<json>, [">= 0"])
      s.add_runtime_dependency(%q<httpclient>, [">= 2.2"])
    else
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<json>, [">= 0"])
      s.add_dependency(%q<httpclient>, [">= 2.2"])
    end
  else
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<json>, [">= 0"])
    s.add_dependency(%q<httpclient>, [">= 2.2"])
  end
end
