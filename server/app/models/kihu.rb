class Kihu < ApplicationRecord
  has_many :moves

  def parse (text)
    parsed = KihuParser.new.parse text
    self.match_date = parsed[:date]
    self.rule = parsed[:rule]
    self.handicap = parsed[:handicap]
    self.sente = parsed[:sente]
    self.gote = parsed[:gote]

    parsed[:moves].each do |move|
      self.moves.build do |m|
        m.koma = move[:koma]
        m.to_x = move[:to][:x]
        m.to_y = move[:to][:y]
        m.naru = move[:naru]
        m.utsu = move[:utsu]
        unless m.utsu
          m.from_x = move[:from][:x]
          m.from_y = move[:from][:y]
        end
      end
    end
  end
end
