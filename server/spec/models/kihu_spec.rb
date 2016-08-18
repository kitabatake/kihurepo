require 'rails_helper'

RSpec.describe Kihu, :type => :model do
  describe "parse" do
    it "is common case" do
      kihu = Kihu.new
      kihu.parse file_fixture("kihu/kihu1.txt").read
      expect(kihu.match_date.to_s).to eq '2016-08-02 20:04:56 +0900' 
      expect(kihu.rule).to eq 'R対局(15分)'
      expect(kihu.handicap).to eq '平手'
      expect(kihu.sente).to eq 'sente'
      expect(kihu.gote).to eq 'gote'
      # expect(kihu.raw_moves.size).to eq 140
    end
  end
end
