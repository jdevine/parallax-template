require 'rubygems'
require 'middleman/rack'

#protected_middleman = Rack::Auth::Basic.new(Middleman.server) do |username, password|
#  [username, password] == ['user', 'pass']
#end
#run protected_middleman
run Middleman.server
