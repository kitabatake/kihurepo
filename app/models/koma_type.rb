class KomaType < ActiveHash::Base
  self.data = [
    {:id => 1, :name => 'hu'},
    {:id => 2, :name => 'keima'},
    {:id => 3, :name => 'kyousya'},
    {:id => 4, :name => 'gin'},
    {:id => 5, :name => 'kin'},
    {:id => 6, :name => 'ou'},
    {:id => 7, :name => 'hisya'},
    {:id => 8, :name => 'kaku'},
    {:id => 9, :name => 'to'},
    {:id => 10, :name => 'nari_kei'},
    {:id => 11, :name => 'nari_kyou'},
    {:id => 12, :name => 'nari_gin'},
    {:id => 13, :name => 'ryuu'},
    {:id => 14, :name => 'uma'},
  ]

  def self.get_by_name (name)
    target = nil
    data.each {|kt| target = kt if kt[:name] == name}
    target
  end
end