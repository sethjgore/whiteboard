# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "csso-rails"
  s.version = "0.3.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Vasily Fedoseyev"]
  s.date = "2013-09-04"
  s.description = "Invoke the CSSO from Ruby"
  s.email = ["vasilyfedoseyev@gmail.com"]
  s.executables = ["ruby_csso"]
  s.files = ["bin/ruby_csso"]
  s.homepage = "https://github.com/Vasfed/csso-rails"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "csso-rails"
  s.rubygems_version = "2.0.6"
  s.summary = "CSS Stylesheet optimizer/compressor for Rails"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<execjs>, [">= 1"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<minitest>, [">= 0"])
    else
      s.add_dependency(%q<execjs>, [">= 1"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<minitest>, [">= 0"])
    end
  else
    s.add_dependency(%q<execjs>, [">= 1"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<minitest>, [">= 0"])
  end
end
