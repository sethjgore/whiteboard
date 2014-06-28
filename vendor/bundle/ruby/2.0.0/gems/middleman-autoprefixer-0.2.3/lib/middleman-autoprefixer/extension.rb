require 'ostruct'
require 'autoprefixer-rails'

module Middleman
  module Autoprefixer
    class Options < OpenStruct; end

    class << self
      def registered(app, options_hash={}, &block)
        @@options = Options.new(options_hash)
        yield @@options if block_given?

        browsers = Array(@@options.browsers)
        browsers = nil if browsers.empty?

        app.after_configuration do
          AutoprefixerRails.install(sprockets, browsers)
        end
      end
      alias :included :registered
    end
  end
end
