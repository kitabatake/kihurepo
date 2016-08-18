require 'rails_helper'

RSpec.describe Kihu, :type => :model do
  describe "parse_kihu" do

    it "is common case" do
      kihu = Kihu.new(
        teban: 'sente',
        won: true
      )

      expect(true).to be true
    end
  end
end
