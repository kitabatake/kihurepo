require 'rails_helper'

RSpec.describe Kihu, :type => :model do
  describe "parse" do
    it "is common case" do
      parsed = Kihu.parse file_fixture("kihu/kihu1.txt").read
      expect(parsed[:match_date].to_s).to eq '2016-08-02 20:04:56 +0900' 
      expect(parsed[:rule]).to eq 'R対局(15分)'
      expect(parsed[:handicap]).to eq '平手'
      expect(parsed[:sente]).to eq 'sente'
      expect(parsed[:gote]).to eq 'gote'
      expect(parsed[:moves].size).to eq 140
    end
  end
end
