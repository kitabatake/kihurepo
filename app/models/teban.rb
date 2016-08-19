class Teban < ActiveHash::Base
  self.data = [
    {:id => 1, :name => 'sente', :label => '先手'},
    {:id => 2, :name => 'gote', :label => '後手'}
  ]
end