class Kihu < ApplicationRecord
  has_many :moves

  def parse (text)
    parsed = KihuParser.new.parse text
    self.match_date = parsed[:date]
    self.rule = parsed[:rule]
    self.handicap = parsed[:handicap]
    self.sente = parsed[:sente]
    self.gote = parsed[:gote]
    # self.raw_moves = parsed[:moves]
  end
end
