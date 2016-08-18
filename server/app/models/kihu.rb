class Kihu < ApplicationRecord
  has_many :moves

  def self.parse (text)
    parsed = KihuParser.new.parse text
    result = {
      :match_date => parsed[:date],
      rule: parsed[:rule],
      handicap: parsed[:handicap],
      sente: parsed[:sente],
      gote: parsed[:gote]
    }

    moves = []
    parsed[:moves].each do |move|
      m = {
        koma: move[:koma],
        to_x: move[:to][:x],
        to_y: move[:to][:y],
        naru: move[:naru],
        utsu: move[:utsu]
      }
      unless m[:utsu]
        m[:from_x] = move[:from][:x]
        m[:from_y] = move[:from][:y]
      end
      moves << m
    end

    result[:moves] = moves
    result
  end

end
